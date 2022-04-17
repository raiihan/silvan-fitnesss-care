import React from 'react';

const Blog = () => {
    return (
        <div className="w-50 mx-auto my-5">
            <div className="my-5">
                <h3 className='text-success fw-bold mb-2'>Difference between authorization and authentication?</h3>
                <p>Authentication and authorization  might sound similar but they are completely different from each other.</p>
                <h6><strong>Authorization:-</strong> <small>Permission or verifying  to use any resources  is called authorization</small></h6>
                <ul>
                    <li>
                        <strong>Check user's permit to access resources</strong>
                    </li>
                    <li><strong>Validates users permission</strong></li>
                    <li><strong> It needs user’s privilege or security levels</strong></li>
                    <li><strong>Authorize process, users or persons are validated.</strong></li>
                    <li><strong>Occurs after Authentication</strong></li>
                </ul>
                <h6><strong>Authentication :-</strong> <small>The process of verifying who the real user is, is called authentication

                </small></h6>
                <ul>
                    <li>
                        <strong>Checks a person's details to identify him</strong>
                    </li>
                    <li><strong>verifies users credentials</strong></li>
                    <li><strong> It needs usually user’s login details
                    </strong></li>
                    <li><strong>Authentication process, users or persons are verified.</strong></li>
                    <li><strong>Occurs before authorization </strong></li>
                </ul>
            </div>

            <div className="my-5">
                <h3 className='text-success fw-bold mb-2'>Why are you using firebase? What other options do you have to implement authentication?
                </h3>
                <p>Usually I use firebase Authentication because it saves time and increases productivity. If you want to save or store user information with firebase just write some build Methods here you can avoid server side annoying methods. And here easily implement social login systems like Google, Facebook, Twitter,  Github etc. The bottom line is that it's highly secured.</p>
                <p>You have many others option implement Authentication without firebase like
                </p>
                <ul>
                    <li><strong>Auth0</strong></li>
                    <li><strong>Okta</strong></li>
                    <li><strong>Amazon cognito</strong></li>
                    <li><strong>Keycloak</strong></li>
                    <li><strong>Passport </strong></li>
                    <li><strong>AWS Amplify</strong></li>
                    <li><strong>Flutter</strong></li>
                </ul>
            </div>
            <div className="my-5">
                <h3 className='text-success fw-bold mb-2'>What other services does firebase provide other than authentication?</h3>
                <p>Maybe many people are familiar with Firebase with Authentication but firebase also provides other essential services. Many of them are very important and popular.</p>
                <h5><small>First of all you can talk about</small> <strong className='fw-bold'>Google analytics:- </strong><small>It analyzes your website traffic or user related topics  and has some other benefits. </small></h5>

                <h5><strong>Storage:- <small>Google Firebase uses dedicated cloud-based NoSQL databases, Firestore</small></strong></h5>
                <h5><strong>Database:-</strong> <small>used to store users data like chat messages, users details and other metadata It provides two types of database to you.</small></h5>
                <p>⚫ Firebase Realtime Database</p>
                <p>⚫ Firebase Cloud Firestore
                </p>
                <h5><strong>Cloud Messaging:-</strong> <small>You can choose user segments that you want to target for push notifications and after sending you can also see the percentage of users who opened the notification.</small></h5>
                <h5><strong>Hosting:-</strong><small>You can also host your web app easily on Firebase. Offering microservices, Firebase lets you host and deploy your web app rapidly with a few commands.</small></h5>
                <h5><strong>Firebase ML</strong><small>Firebase ML comes in handy if you have a machine learning project to deploy along with your app. Firebase offers machine learning capabilities for training models.
                </small></h5>
                <h5><strong>Remote Config</strong><small>You can set different values for different OS versions, regions, app versions, and a lot more. If you haven’t given it a try, then I would highly urge you to explore this fantastic product and check out how you can implement any benefit from it</small></h5>
            </div>
        </div>
    );
};

export default Blog;