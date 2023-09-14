import { useForm } from "react-hook-form";
import { emailPattern, namePattern } from "../constants/validations";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import axios from "axios";
import { useEffect, useState } from "react";

export const UserRegistration = () => {
  const date = moment().format("YYYY-MM-DD");

  const [dateErrorMessage, setDateErrorMessage] = useState("");
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    getValues,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (watch("dob")) dateOfBirthValidation();
  }, [watch("dob")]);

  const saveUserData = async (formdata) => {
    try {
      const { data } = await axios.post(
        "http://127.0.0.1:3030/api/users/saveUser",
        { formdata }
      );
      if (data.Success == 0) {
        // return error message
        console.log(data.message);
      } else if (data.Success == 1) {
        //return success message
        console.log(data.message);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const clearFields = () => {
    setValue("firstName", "");
    setValue("lastName", "");
    setValue("email", "");
    setValue("dob", "");
    setValue("age", "");
    setValue("country", "");
    setValue("country", "");
    setValue("city", "");
    setValue("gender", "");
  };

  const dateOfBirthValidation = () => {
    let selectedDateYear = new Date(watch("dob")).getFullYear();
    if (selectedDateYear > moment().year()) {
      selectedDateYear = moment().year();
      setValue("dob", date);
    }
    const todaysDateYear = new Date().getFullYear();

    const userAge = Math.abs(todaysDateYear - selectedDateYear);
    setValue("age", `${userAge} years`);

    if (userAge < 14) {
      setDateErrorMessage("age cannot be less than 14");
    } else {
      setDateErrorMessage("");
    }
  };

  const getAllCountries = async () => {
    try {
      const { data } = await axios.get(
        "http://127.0.0.1:3030/api/locations/countries"
      );
      setCountries(data);
    } catch (err) {
      console.error(err);
    }
  };

  const getStates = async ({ target }) => {
    try {
      const { data } = await axios.get(
        "http://127.0.0.1:3030/api/locations/states",
        { params: { code: target.value } }
      );
      setStates(data);
    } catch (err) {
      console.error(err);
    }
  };

  const getCities = async ({ target }) => {
    try {
      const { data } = await axios.get(
        "http://127.0.0.1:3030/api/locations/cities",
        { params: { state: target.value } }
      );
      setCities(data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="d-flex flex-column user-tab  align-items-center justify-content-center">
      <div className="user-header">User Form</div>
      <div className="header-underline"></div>
      <form onSubmit={handleSubmit(saveUserData)}>
        <div>
          <div className="d-flex m-2 h-15 justify-content-sm-between">
            <label>First Name </label>
            <input
              {...register("firstName", {
                required: "please enter your first name",
                pattern: namePattern,
              })}
              className="input-field "
              placeholder="Enter Your First Name"
            />
            {errors.firstName && (
              <div className=" error-message">
                <p className="d-flex flex-row-reverse text-danger">
                  {"*" + errors.firstName.message}
                </p>
              </div>
            )}
          </div>
          <div className="d-flex m-2 justify-content-sm-between">
            <label>Last Name </label>
            <input
              {...register("lastName", {
                required: "please enter your last name",
                pattern: namePattern,
              })}
              className="input-field"
              placeholder="Enter Your Last Name"
            />
            {errors.lastName && (
              <div className=" error-message">
                <p className="d-flex flex-row-reverse text-danger">
                  {"*" + errors.lastName.message}
                </p>
              </div>
            )}
          </div>
          <div className="d-flex m-2 justify-content-sm-between">
            <label>E-Mail </label>
            <input
              {...register("email", {
                required: "please enter email",
                pattern: emailPattern,
              })}
              className="input-field"
              placeholder="Enter Your E-Mail"
            />
            {errors.email && (
              <div className=" error-message">
                <p className="d-flex flex-row-reverse text-danger">
                  {"*" + errors.email.message}
                </p>
              </div>
            )}
          </div>
          <div className="d-flex m-2 justify-content-between">
            <label>Country </label>
            <select
              className="select-input-field"
              onClick={getAllCountries}
              {...register("country", {
                required: "please select your country",
                onChange: getStates,
              })}
            >
              <option value="">select country</option>
              {countries.map(({ country, countryCode }) => (
                <option value={countryCode}>{country}</option>
              ))}
            </select>
            {errors.country && (
              <div className=" error-message">
                <p className="d-flex flex-row-reverse text-danger">
                  {"*" + errors.country.message}
                </p>
              </div>
            )}
          </div>
          <div className="d-flex m-2 justify-content-sm-between">
            <label>State </label>
            <select
              className="select-input-field"
              {...register("state", {
                required: "please select your state",
                onChange: getCities,
              })}
            >
              <option value="">select state</option>
              {states.map(({ stateName }) => (
                <option value={stateName}>{stateName}</option>
              ))}
            </select>
            {errors.state && (
              <div className=" error-message">
                <p className="d-flex flex-row-reverse text-danger">
                  {"*" + errors.state.message}
                </p>
              </div>
            )}
          </div>
          <div className="d-flex m-2 justify-content-sm-between">
            <label>City </label>
            <select
              className="select-input-field"
              {...register("city", { required: "please select your city" })}
            >
              <option value="">select city</option>
              {cities.map(({ city }) => (
                <option value={city}>{city}</option>
              ))}
            </select>
            {errors.city && (
              <div className=" error-message">
                <p className="d-flex flex-row-reverse text-danger">
                  {"*" + errors.city.message}
                </p>
              </div>
            )}
          </div>
          <div className="d-flex m-2 justify-content-sm-between">
            <label>Gender </label>
            <label>
              <input
                className="mx-1 form-check-input"
                type="radio"
                {...register("gender", { required: "gender is required" })}
                value="male"
              />
              <span>Male</span>
            </label>
            <label>
              <input
                className="mx-1 form-check-input"
                type="radio"
                {...register("gender", { required: "gender is required" })}
                value="Female"
              />
              <span>Female</span>
            </label>
            <label>
              <input
                className=" mx-1 form-check-input"
                type="radio"
                {...register("gender", { required: "gender is required" })}
                value="Other"
              />
              <span>Other</span>
            </label>
            {errors.gender && (
              <div className=" error-message">
                <p className="d-flex flex-row-reverse text-danger">
                  {"*" + errors.gender.message}
                </p>
              </div>
            )}
          </div>
          <div className="d-flex m-2 justify-content-sm-between">
            <label>Date Of Birth </label>
            <input
              className="date-input-field"
              type="date"
              max={date}
              {...register("dob", { required: "please enter birth date" })}
            />
            {errors.dob && (
              <div className=" error-message">
                <p className="d-flex flex-row-reverse text-danger">
                  {"*" + errors.dob.message}
                </p>
              </div>
            )}
          </div>
          <div className="d-flex m-2 justify-content-sm-between">
            <label>Age </label>
            <input
              style={{
                border: "none",
                background: "none",
                textAlign: "center",
                fontWeight: "bolder",
              }}
              {...register("age")}
              disabled
            />
            {dateErrorMessage && (
              <div className=" error-message">
                <p className="d-flex flex-row-reverse text-danger">
                  {"*" + dateErrorMessage}
                </p>
              </div>
            )}
          </div>
          <div>
            <button className="user-save-btn m-2" type="submit">
              Save{" "}
            </button>
          </div>
          <div>
            <button
              className="user-save-btn m-2"
              type="button"
              onClick={() => navigate("/userslist")}
            >
              Show Saved Users List{" "}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
