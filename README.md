# TypeScript Unit Testing with Pulumi

## To Run Tests

```
$ npm run test
```

### Example Output

```
$ npm run test

> aws-ts-ruby-on-rails@0.1.0 test /Users/clstokes/cc/clstokes/pulumi-aws-ts-ruby-on-rails-unit-testing
> PULUMI_TEST_MODE=true PULUMI_NODEJS_PROJECT=aws-ts-ruby-on-rails PULUMI_NODEJS_STACK=fake-stack PULUMI_CONFIG='{ "aws:region": "us-west-2", "aws-ts-ruby-on-rails:dbUser": "admin2", "aws-ts-ruby-on-rails:dbPassword": "pass2", "aws-ts-ruby-on-rails:dbRootPassword": "pass2" }' mocha -r ts-node/register *.spec.ts



  Infrastructure
    #server
      ✓ must have a name tag


  1 passing (267ms)

```
