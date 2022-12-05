import { IProfile } from "./Profile.interface"

export interface IContacts extends Pick<IProfile, "pendings" | "contacts" | "requested" > {}