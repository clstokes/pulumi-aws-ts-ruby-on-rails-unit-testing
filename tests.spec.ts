import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";
import { describe, it } from "mocha";
import { assert } from 'chai';

// const infra = require("./index");
import * as infra from "./index";

describe("Infrastructure", () => {
    const webServer: aws.ec2.Instance = infra.webServer;
    describe("#server", () => {
        it("must have a name tag", () => {
            pulumi.all([webServer.urn, webServer.tags]).apply(([urn, tags]) => {
                assert.isNotNull((tags || {})["Name"], `Missing a Name tag on server [${urn}].`);
            });
        });

        // TODO(check 1): Instances have a Name tag.
        // TODO(check 2): Instances must not use an inline userData script.
    });

    const webSg = infra.webSg;
    describe("#group", function () {
        // TODO(check 3): Instances must not have SSH open to the Internet.
    });
});
