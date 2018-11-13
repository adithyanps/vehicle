import React , { Component} from 'react';
import CalandarField from '../../component/pageBuilder/Date/DateOld';
import Dropdown from '../../component/pageBuilder/Dropdown/DropdownOld';
import RegisterNumber from '../../component/pageBuilder/Registration/RegistrationOld';
import VehiclePrice from '../../component/pageBuilder/VehiclePrice/VehiclePriceOld';
import VehicleYear from '../../component/pageBuilder/vehicleYear/vehicleYear';




class PageBuilder extends Component {
  render() {
    return (
      <div>

        <CalandarField />
        <VehiclePrice />
        <Dropdown />
        <RegisterNumber />
        <VehicleYear />




      </div>

    );
  }
}
export default PageBuilder;
