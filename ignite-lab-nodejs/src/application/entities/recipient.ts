import { randomUUID } from 'node:crypto';
import { Replace } from '../../helpers/Replace';

export interface RecipientProps {
  name: string;
  email: string;
  phone: string;
  createdAt: Date;
}

export class Recipient {
  private _id: string;
  private props: RecipientProps;

  constructor(
    props: Replace<RecipientProps, { createdAt?: Date }>,
    id?: string,
  ) {
    this._id = id ?? randomUUID();
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
    };
  }

  public get id() {
    return this._id;
  }

  public set name(name: string) {
    this.props.name = name;
  }

  public get name(): string {
    return this.props.name;
  }

  public set phone(phone: string) {
    this.props.phone = phone;
  }

  public get phone(): string {
    return this.props.phone;
  }

  public set email(email: string) {
    this.props.email = email;
  }

  public get email(): string {
    return this.props.email;
  }

  public get createdAt(): Date {
    return this.props.createdAt;
  }
}
