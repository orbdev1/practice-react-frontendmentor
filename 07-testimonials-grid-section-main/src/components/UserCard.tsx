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
  return (
    <header className="flex flex-row gap-4">
      <div className="rounded-full overflow-hidden border-2 border-purple-300 w-8 h-8">
        <img
          className="object-cover w-full h-full object-center"
          src={user.image}
          alt={`Photo of ${user.name}`}
        />
      </div>
      <div>
        <h3>{user.name}</h3>
        <span>{user.title}</span>
      </div>
    </header>
  );
}
