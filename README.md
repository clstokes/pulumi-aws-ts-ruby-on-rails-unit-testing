> :information_source: Based on https://www.pulumi.com/blog/unit-testing-infrastructure-in-nodejs-and-mocha/.

# TypeScript Unit Testing with Pulumi

## To Run Tests

```
$ pulumi preview
```

### Example Output

```
$ pulumi preview
Previewing update (dev):

     Type                      Name                                          Plan       Info
 +   pulumi:pulumi:Stack       pulumi-aws-ts-ruby-on-rails-unit-testing-dev  create     1 error; 22 messages
 +   ├─ aws:ec2:SecurityGroup  webServerSecurityGroup                        create
 +   └─ aws:ec2:Instance       webServer                                     create

Diagnostics:
  pulumi:pulumi:Stack (pulumi-aws-ts-ruby-on-rails-unit-testing-dev):
    Running Mocha Tests: /Users/clstokes/cc/clstokes/pulumi-aws-ts-ruby-on-rails-unit-testing/tests/tests.spec.ts
      Infrastructure
        #server
          1) must have a name tag
        #group
          2) must not have public internet access
      0 passing (2s)
      2 failing
      1) Infrastructure
           #server
             must have a name tag:
         AssertionError: expected undefined not to be undefined
          at Object.<anonymous> (tests/tests.spec.ts:20:55)
          at Generator.next (<anonymous>)
          at fulfilled (tests/tests.spec.ts:4:58)
      2) Infrastructure
           #group
             must not have public internet access:
         AssertionError: expected { Object (protocol, fromPort, ...) } to be undefined
          at Suite.<anonymous> (tests/tests.spec.ts:29:45)
          at Generator.next (<anonymous>)
          at fulfilled (tests/tests.spec.ts:4:58)

    error: an unhandled error occurred: Program exited with non-zero exit code: 1

```
