import * as cdk from 'aws-cdk-lib';
import * as path from 'path';
import { Construct } from 'constructs';
import { BucketDeployment, Source } from 'aws-cdk-lib/aws-s3-deployment';
import { CloudFrontToS3 } from '@aws-solutions-constructs/aws-cloudfront-s3';

export class Csc4008ProjectCdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const cloudFrontToS3 = new CloudFrontToS3(this, 'ui-source', {})

    const deployment = new BucketDeployment(this, 'deploy-ui-source', {
      sources: [ Source.asset(path.join(__dirname, 'csc4008-project-ui')) ],
      destinationBucket: cloudFrontToS3.s3BucketInterface,
    });
  }
}
