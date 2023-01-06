export interface InitData {
  subtitle: string;
  value: string;
}

export interface InitDataAlt {
  gurantor: {
    subtitle: string;
    value: string;
  }[];
}

export interface IUserData {
  title: string;
  data: InitData[];
}

export interface IUserDataAlt {
  title: string;
  data: InitDataAlt[];
}
