import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";

import * as config from "./config";

export const webSg = new aws.ec2.SecurityGroup("webServerSecurityGroup", {
    description: "Enable HTTP and SSH access",
    egress: [
        { protocol: "-1", fromPort: 0, toPort: 0, cidrBlocks: ["0.0.0.0/0"] },
    ],
    ingress: [
        { protocol: "tcp", fromPort: 22, toPort: 22, cidrBlocks: [config.sshLocation] },
        { protocol: "tcp", fromPort: 80, toPort: 80, cidrBlocks: ["0.0.0.0/0"] },
    ],
});

export const webServer = new aws.ec2.Instance("webServer", {
    ami: "ami-0475f60cdd8fd2120",
    instanceType: config.instanceType,
    securityGroups: [webSg.name],
    keyName: config.keyName,
    userData: "key1=val1",
});

// Export the VM IP in case we want to SSH.
export const vmIP = webServer.publicIp;
