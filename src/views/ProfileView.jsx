import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import CardWelcome from "../components/Profile/CardWelcome";
import Menu from "../components/Profile/Menu";
import { getUserFn } from "../api/usersApi.js";
import { decodeJWT } from "../utilities/decodeJWT";
import { useSession } from "../stores/useSession.js";
import NavigationProfile from "../components/Profile/NavigationProfile";
import IsLoanding from "../components/Common/IsLoading/isLoading.jsx";

const ProfileView = () => {
  const { isLoggedIn } = useSession();
  const token = sessionStorage.getItem("token");
  const userId = token ? decodeJWT(token).user.id : null;

  const [selectedSection, setSelectedSection] = useState(null);

  const {
    data: userData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["user", userId],
    queryFn: () => getUserFn(userId),
    enabled: !!userId,
  });

  if (isLoading) return <IsLoanding />;
  if (isError) return <p>Error al cargar los datos del usuario.</p>;

  if (!isLoggedIn)
    return (
      <div className="container mb-5 pb-5">
        <NavigationProfile />
      </div>
    );
  if (userData) {
    console.log(userData);
  }
  return (
    <div className="container mb-5 pb-5">
      {userData ? (
        <>
          <CardWelcome user={userData} />
          <Menu onSelectSection={setSelectedSection} user={userData} />
        </>
      ) : (
        <p>No se encontró la información del usuario.</p>
      )}
    </div>
  );
};

export default ProfileView;
