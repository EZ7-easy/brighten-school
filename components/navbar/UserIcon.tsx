import { fetchProfileImage } from "@/utils/actions";

async function UserIcon() {
  const profileImage = await fetchProfileImage();

  return (
    <img src={profileImage ?? ""} className="w-6 h-6 rounded-full object-cover" />
  );
}
export default UserIcon;