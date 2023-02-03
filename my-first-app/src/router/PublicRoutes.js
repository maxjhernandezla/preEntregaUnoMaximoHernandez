import { Route, Routes, Navigate } from "react-router-dom";
import { ItemDetailContainer } from "../components/ItemDetailContainer/ItemDetailContainer";
import { ItemListContainer } from "../components/ItemListContainer/ItemListContainer";
import { LoginScreen } from "../components/LoginScreen/LoginScreen";
import { Principal } from "../components/Principal/Principal";
import { RegisterScreen } from "../components/RegisterScreen/RegisterScreen";

export const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Principal />} />
      <Route path="/productos/:brand" element={<ItemListContainer />} />
      <Route
        path="/productos/:brand/:categoryId"
        element={<ItemListContainer />}
      />

      <Route path="/detail/:itemId" element={<ItemDetailContainer />} />
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/register" element={<RegisterScreen />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
