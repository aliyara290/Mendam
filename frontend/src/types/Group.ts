export interface Channel {
  id: string;
  name: string;
}

export interface Team {
  id: string;
  name: string;
  channels: Channel[];
}

export interface GroupProps {
  id: string;
  name: string;
  teams: Team[];
}
