import { describe, it } from "mocha";
import { expect } from 'chai';
import * as pulumi from "@pulumi/pulumi";

const infra = require("./index");

describe("Infrastructure", () => {
    const server = infra.server;
    describe("#server", () => {
        it("must have a name tag", function (/*done*/) {
            expect('Hello world!').to.equal('Hello world!');

            // pulumi.all([server.urn, server.tags]).apply(([urn, tags]) => {
            //     if (!tags || !tags["Name"]) {
            //         done(new Error(`Missing a name tag on server ${urn}`));
            //     } else {
            //         done();
            //     }
            // });
        });

        // TODO(check 1): Instances have a Name tag.
        // TODO(check 2): Instances must not use an inline userData script.
    });

    const group = infra.group;
    describe("#group", function () {
        // TODO(check 3): Instances must not have SSH open to the Internet.
    });
});
