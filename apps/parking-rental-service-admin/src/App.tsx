import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { SpotList } from "./spot/SpotList";
import { SpotCreate } from "./spot/SpotCreate";
import { SpotEdit } from "./spot/SpotEdit";
import { SpotShow } from "./spot/SpotShow";
import { ParkingLotList } from "./parkingLot/ParkingLotList";
import { ParkingLotCreate } from "./parkingLot/ParkingLotCreate";
import { ParkingLotEdit } from "./parkingLot/ParkingLotEdit";
import { ParkingLotShow } from "./parkingLot/ParkingLotShow";
import { RentalList } from "./rental/RentalList";
import { RentalCreate } from "./rental/RentalCreate";
import { RentalEdit } from "./rental/RentalEdit";
import { RentalShow } from "./rental/RentalShow";
import { CustomerList } from "./customer/CustomerList";
import { CustomerCreate } from "./customer/CustomerCreate";
import { CustomerEdit } from "./customer/CustomerEdit";
import { CustomerShow } from "./customer/CustomerShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"ParkingRentalService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Spot"
          list={SpotList}
          edit={SpotEdit}
          create={SpotCreate}
          show={SpotShow}
        />
        <Resource
          name="ParkingLot"
          list={ParkingLotList}
          edit={ParkingLotEdit}
          create={ParkingLotCreate}
          show={ParkingLotShow}
        />
        <Resource
          name="Rental"
          list={RentalList}
          edit={RentalEdit}
          create={RentalCreate}
          show={RentalShow}
        />
        <Resource
          name="Customer"
          list={CustomerList}
          edit={CustomerEdit}
          create={CustomerCreate}
          show={CustomerShow}
        />
      </Admin>
    </div>
  );
};

export default App;
