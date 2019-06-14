import { describe, it } from "mocha";
import { expect } from 'chai';
import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";

const infra = require("./index");

describe("Infrastructure", () => {
    const server: aws.ec2.Instance = infra.server;
    describe("#server", () => {
        it("must have a name tag", () => {
            pulumi.all([server.urn, server.tags]).apply(([urn, tags]) => {
                expect(tags["Name"]).to.be.not.null(`Missing a name tag on server [${urn}]`);
            });
        });

        // TODO(check 1): Instances have a Name tag.
        // TODO(check 2): Instances must not use an inline userData script.
    });

    const group = infra.group;
    describe("#group", function () {
        // TODO(check 3): Instances must not have SSH open to the Internet.
    });
});
