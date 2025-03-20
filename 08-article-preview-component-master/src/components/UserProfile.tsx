export default function UserProfile() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <img
          className="h-auto w-10 rounded-full"
          src="/avatar-michelle.jpg"
          alt="Image of Michelle"
        />
        <div>
          <h3 className="text-very-dark-grayish-blue font-bold">
            Michelle Appleton
          </h3>
          <p className="text-grayis-blue">28 Jun 2020</p>
        </div>
      </div>
      <div className="bg-light-grayish-blue rounded-full grid place-items-center aspect-square w-8">
        <img src="/icon-share.svg" alt="Share icon" />
      </div>
    </div>
  );
}
