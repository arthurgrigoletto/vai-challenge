import {
  setProfileLoading,
  getProfiles,
  deleteProfile
} from "../profilesActions";

import { PROFILE_LOADING } from "../types";

describe("Profiles Actions Test", () => {
  describe("setProfileLoading", () => {
    it("has the correct type", () => {
      const action = setProfileLoading();

      expect(action.type).toEqual(PROFILE_LOADING);
    });
  });
});
