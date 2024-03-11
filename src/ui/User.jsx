const FAKE_USER = {
  name: "Jack",
  email: "jack@example.com",
  password: "qwerty",
  avatar: "https://i.pravatar.cc/100?u=zz",
};

function User() {
  const user = FAKE_USER;

  function handleClick() {}

  return (
    <div className="absolute top-3 right-3 p-1 rounded-sm z-10 shadow-xl text-sm font-semibold flex items-center gap-3">
      <img src={user.avatar} alt={user.name} className="rounded-full h-12" />
      <span>Welcome, {user.name}</span>
      <button className="bg-blue-600 rounded-md py-2 px-3 text-white border-none uppercase cursor-pointer" onClick={handleClick}>
        Logout
      </button>
    </div>
  );
}

export default User;
