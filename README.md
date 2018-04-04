# Chrome Remote Interface with Serverless on AWS Lambda

## Structure

`handler.js` is the entrypoint which drives the Chrome behavior.

## Use Cases

This project can be used as a template to automate Chrome:
- run on a periodic basis with Cloudwatch Events
- run in response to HTTP events from API Gateway
- SNS topic
- any one of the many Serverless event sources

## Setup

1. `yarn install` or `npm install` to get your local environment ready. The AWS Lambda runtime already includes the AWS SDK
2. Make sure you name the service in the `serverless.yml` that's unique in your account's region.
3. Customize the `handler.js` to how you want to control Chrome

## Deploy

1. `sls deploy`!
2. Invoke the function manually with `sls invoke -f hello`

## Scaling

### AWS Lambda

By default, AWS Lambda limits the total concurrent executions across all functions within a given region to 100. The default limit is a safety limit that protects you from costs due to potential runaway or recursive functions during initial development and testing. To increase this limit above the default, follow the steps in [To request a limit increase for concurrent executions](http://docs.aws.amazon.com/lambda/latest/dg/concurrent-executions.html#increase-concurrent-executions-limit).
