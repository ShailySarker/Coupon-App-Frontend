# Project Name: Coupon App Website

# Website Link:
https://coupon-app-frontend.vercel.app

# Technologies:
JavaScript, Tailwind CSS, ReactJS, React Router, Redux, Node.js, Express.js, MongoDB, Mongoose.

# Title: 
Round-Robin Coupon Distribution with Abuse Prevention 

# Objective: 
Develop a live web application that distributes coupons to guest users in a 
round-robin manner, incorporating mechanisms to prevent users from exploiting page refreshes to claim multiple coupons within a restricted time frame. 

# Requirements: 
1. Coupon Distribution: 

○ Maintain a list of available coupons. 

○ Assign coupons sequentially to users to ensure even distribution. 


2. Guest Access: 

○ Allow users to access the system without requiring login or account creation. 


3. Abuse Prevention: 

○ IP Tracking: Record each user's IP address upon claiming a coupon, restricting subsequent claims from the same IP within a specified time frame (e.g., one 
hour). 

○ Cookie Tracking: Use cookies to monitor coupon claims from the same browser session. 


4. User Feedback:

○ Provide clear messages indicating successful coupon claims or inform users of the time remaining before they can claim another.


5. Deployment: 

○ Deploy the application to a live web server, ensuring it is accessible via a public URL. 


6. Documentation: 

○ Provide setup instructions and a brief explanation of the implemented abuse prevention strategies.

# Run

# Clone this repository
$ git clone https://github.com/ShailySarker/Coupon-App-Frontend  

# Go into the repository
$ cd Coupon-App-Frontend

# Install dependencies
$ npm install

# Run the app
$ npm run dev
