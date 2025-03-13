type User = {
  name: string;
  title: string;
  image: string;
  special: boolean;
};

type UserCardProps = {
  user: User;
};

export default function UserCard({ user }: UserCardProps) {
  return <div>UserCard</div>;
}
