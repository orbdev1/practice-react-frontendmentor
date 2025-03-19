type User = {
  name: string;
  title: string;
  image: string;
  special: boolean;
};

type UserCardProps = {
  user: User;
  borderColor: string;
  nameColor: string;
  titleColor: string;
};

export default function UserCard({
  user,
  borderColor,
  nameColor,
  titleColor,
}: UserCardProps) {
  return (
    <header className="flex flex-row items-center gap-4 relative">
      <div
        className={`rounded-full overflow-hidden border-2 ${borderColor} w-[31px] h-[31px]`}
      >
        <img
          className="object-cover w-full h-full object-center"
          src={user.image}
          alt={`Photo of ${user.name}`}
        />
      </div>
      <div className="flex flex-col">
        <h3 className={`${nameColor} `}>{user.name}</h3>
        <span className={`${titleColor} text-[11px] -mt-0.5`}>
          {user.title}
        </span>
      </div>
    </header>
  );
}
