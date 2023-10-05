import Link from "next/link";
import { useRouter } from "next/router";
// animate
import { motion } from "framer-motion";

const ProfileList = ({ profileMenuRef, style }) => {
  const router = useRouter();
  const handleLogOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("loginTime");
    router.push("/login");
  };

  return (
    <motion.div
      initial={{
        scale: 0,
      }}
      animate={{
        scale: 1,
        transition: {
          duration: 0.2,
        },
      }}
      ref={profileMenuRef}
      className="absolute py-3 flex flex-col justify-center items-center gap-2 bg-white rounded-lg top-[40px] -right-[50px] shadow-[0_18px_40px_0_rgba(0,0,0,0.16)] w-[130px] text-center z-10"
      style={style}
    >
      <Link href="/edit-info">Profile</Link>
      <Link href="/orders">Orders History</Link>
      <button onClick={handleLogOut}>Log Out</button>
    </motion.div>
  );
};

export default ProfileList;
