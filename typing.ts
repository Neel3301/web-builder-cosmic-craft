interface Website_Interface {
  websiteId: string;
  userId: string;
  templateId: string;
  Text?: Object[];
  Image?: Object[];
  Product?: Object[];
  Customers?: Object[];
  Sales?: Object[];
}

interface User_Interface {
  userId: string;
  username: string;
  email: string;
  website: Website_Interface[];
}
