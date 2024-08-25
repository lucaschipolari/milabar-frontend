import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import CardWelcome from "../components/Profile/CardWelcome";
import Menu from "../components/Profile/Menu";
import { getUserFn } from "../api/usersApi.js";

const ProfileView = () => {
  const { id } = useParams();
  const [selectedSection, setSelectedSection] = useState(null);

  const {
    data: user,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["user", id],
    queryFn: () => getUserFn(id),
  });

  if (isLoading) return <p>Cargando...</p>;
  if (isError) return <p>Error al cargar los datos del usuario.</p>;

  return (
    <div className="container mb-5 pb-5">
      <CardWelcome user={user} />
      <Menu onSelectSection={setSelectedSection} user={user} />
    </div>
  );
};

export default ProfileView;
