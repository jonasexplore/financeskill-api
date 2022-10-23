type FindCustomerRequest = {
  email: string;
};

type FindCustomerResponse = {
  id: string;
  email: string;
};

export { FindCustomerRequest, FindCustomerResponse };
