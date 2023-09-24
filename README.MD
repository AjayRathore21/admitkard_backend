# Admitkard Backend

Admitkard Backend is a Node.js application used for phone number verification via OTP.

## Table of Contents

- [Getting Started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)

- [Owner](#owner)

## Getting Started

These instructions will help you set up and run the project on your local machine.

### Installation

To get the project up and running, follow these steps:

1. Clone the Git repository to your local machine.

   ```bash
   git clone https://github.com/AjayRathore21/admitkard_backend.git

   ```

2. Install project dependencies
   run-> npm install .

3. Start the application.
   npm start

### Prerequisites

Before running the project, make sure you have the following dependencies installed:

cors - 2.8.5
express - 4.18.2
mongodb - 6.1.0
mongoose - 7.5.2
nodemon - 3.0.1

### Usage

This project is primarily used for phone number verification via OTP.

### Apis

1. GET route for generating OTP and registering users

--> http://localhost:8000/:phone

2. POST route for OTP verification
   --> http://localhost:8000/otp

### Owner

Ajay Rathore
Email: ajaykumar420.ak79@gmail.com
If you have any questions or need further assistance, please feel free to reach out to the project owner.
