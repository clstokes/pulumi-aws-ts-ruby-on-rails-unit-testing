import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";
import * as config from "./config";

const amiId = aws.getAmi({
    owners: ["099720109477"], // Ubuntu
    mostRecent: true,
    filters: [
        { name: "name", values: ["ubuntu/images/hvm-ssd/ubuntu-bionic-18.04-amd64-server-*"] },
    ],
}).then(x => x.id);

const webSg = new aws.ec2.SecurityGroup("webServerSecurityGroup", {
    description: "Enable HTTP and SSH access",
    egress: [
        { protocol: "-1", fromPort: 0, toPort: 0, cidrBlocks: ["0.0.0.0/0"] },
    ],
    ingress: [
        { protocol: "tcp", fromPort: 22, toPort: 22, cidrBlocks: [config.sshLocation] },
        { protocol: "tcp", fromPort: 80, toPort: 80, cidrBlocks: ["0.0.0.0/0"] },
    ],
});

const webServer = new aws.ec2.Instance("webServer", {
    ami: amiId,
    instanceType: config.instanceType,
    securityGroups: [webSg.name],
    keyName: config.keyName,
    userData: "asdfasdf"
});

// Export the VM IP in case we want to SSH.
export let vmIP = webServer.publicIp;

// Export the URL for our newly created Rails application.
export let websiteURL = pulumi.interpolate`http://${webServer.publicDns}/notes`;
