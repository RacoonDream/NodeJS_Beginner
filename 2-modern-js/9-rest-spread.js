const [first, ...restOfItems] = [10, 20, 30, 40];

const data = {
  temp1: '001',
  temp2: '002',
  firstName: 'John',
  lastName: 'Doe',
};

const { temp1, temp2, ...person } = data;// data object will have property firstname and lastname

const newArray = [...restOfItems];

const newObject = {
  ...person,
};
