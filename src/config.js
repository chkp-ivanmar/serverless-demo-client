const dev = {
  STRIPE_KEY: "pk_test_51HWkmPKHpbm7UUbsyTpnjPY4t5Wl5ezTN73aXA1CkHRHrPKQZwxMQngxJtK785wttXNrpd93GVi3hyhcS6ouO2zp00XUlRJnXm",
  s3: {
    REGION: "eu-central-1",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-mdgdyxu9m2a8"
  },
  apiGateway: {
    REGION: "eu-central-1",
    URL: "https://szhx850sm3.execute-api.eu-central-1.amazonaws.com/dev
  },
  cognito: {
    REGION: "eu-central-1",
    USER_POOL_ID: "eu-central-1_hGoiQZ1zC",
    APP_CLIENT_ID: "66dkouvo1s98e8vt3ifu33qh2q",
    IDENTITY_POOL_ID: "eu-central-1:9e75f407-54f0-446c-a135-a14262b97e73"
  }
};

const prod = {
  STRIPE_KEY: "pk_test_51HWkmPKHpbm7UUbsyTpnjPY4t5Wl5ezTN73aXA1CkHRHrPKQZwxMQngxJtK785wttXNrpd93GVi3hyhcS6ouO2zp00XUlRJnXm",
  s3: {
    REGION: "eu-central-1",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-1m7yc5ud2ewft"
  },
  apiGateway: {
    REGION: "eu-central-1",
    URL: "https://xlhf65vu72.execute-api.eu-central-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "eu-central-1",
    USER_POOL_ID: "eu-central-1_XZlkFa10f",
    APP_CLIENT_ID: "7uvndsmkli8iphe5nb12n7vu2q",
    IDENTITY_POOL_ID: "eu-central-1:0d21c602-b815-4a4d-82c5-a63777353737"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};
