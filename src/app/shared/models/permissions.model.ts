export class PermissionsModel {
  canCreate: number;
  canDelete: number;
  canUpdate: number;


  constructor(canCreate: number, canUpdate: number, canDelete: number) {
    this.canCreate = canCreate;
    this.canUpdate = canUpdate;
    this.canDelete = canDelete;
  }
}
