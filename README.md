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



(node:31550) UnhandledPromiseRejectionWarning: TypeError: Cannot read property 'invoke' of undefined
    at /Users/clstokes/cc/clstokes/pulumi-aws-ts-ruby-on-rails-unit-testing/node_modules/@pulumi/pulumi/runtime/invoke.js:63:114
    at new Promise (<anonymous>)
    at Object.<anonymous> (/Users/clstokes/cc/clstokes/pulumi-aws-ts-ruby-on-rails-unit-testing/node_modules/@pulumi/pulumi/runtime/invoke.js:63:63)
    at Generator.next (<anonymous>)
    at fulfilled (/Users/clstokes/cc/clstokes/pulumi-aws-ts-ruby-on-rails-unit-testing/node_modules/@pulumi/pulumi/runtime/invoke.js:17:58)
    at processTicksAndRejections (internal/process/task_queues.js:89:5)
(node:31550) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). (rejection id: 2)
(node:31550) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.
  Infrastructure
    #server
      ✓ must have a name tag


  1 passing (234ms)

The Pulumi runtime detected that 120 promises were still active
at the time that the process exited. There are a few ways that this can occur:
  * Not using `await` or `.then` on a Promise returned from a Pulumi API
  * Introducing a cyclic dependency between two Pulumi Resources
  * A bug in the Pulumi Runtime

Leaving promises active is probably not what you want. If you are unsure about
why you are seeing this message, re-run your program with the `PULUMI_DEBUG_PROMISE_LEAKS`
environment variable. The Pulumi runtime will then print out additional
debug information about the leaked promises.

```
