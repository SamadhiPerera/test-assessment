# test-assessment

This application is for user registration to online examinations. As the basic functionalities such as create, insert, update, delete and search have built the REST APIs.  First, I have start with an Express web server. Next, add configuration for MySQL database. Then I defined routes for handling all CRUD operations.
Create Node.js application

npm init
npm install express mysql parser –save
npm install nodemon

After creating the folders with files accordingly, use the following command
npm run dev

Cloud formation stack for create ec2 instance - This cloudformation template is based on the AMI ( Ubuntu server ) which is taken from ap-south-1 region. 
OS - Ubuntu Server 20.04


The provided cloud formation stack is scripted for create VPC, public and private subnets and ec2 instance with t2.micro instance type. Inside the web server, Docker is installed and start when creating the instance. 
