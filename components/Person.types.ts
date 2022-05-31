export type AddressProps = {
  city: string;
  district: string;
};

export type FamilyMembersProps = {
  name: string;
  relationShip: string;
};

export type PersonProps = {
  name: string;
  age: number;
  isMarried: boolean;
  addressDetails: AddressProps;
  familyMembers: FamilyMembersProps[];
};
