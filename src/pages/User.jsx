import React, { useState } from "react";

// @material-tailwind/react
import { Input, Typography, Select, Option } from "@material-tailwind/react";

// day picker

// @heroicons/react

function User() {
  const user = JSON.parse(localStorage.getItem("user"));
  const { firstName, lastName, email } = user;
  const [fName, setFName] = useState(firstName);
  const [LName, setLName] = useState(lastName);
  return (
    <section className="px-8 py-20 container mx-auto">
      <Typography variant="h5" color="blue-gray">
        Basic Information
      </Typography>
      <Typography variant="small" className="text-gray-600 font-normal mt-1">
        Update your profile information below.
      </Typography>
      <div className="flex flex-col mt-8">
        <div className="mb-6 flex flex-col items-end gap-4 md:flex-row">
          <div className="w-full">
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-2 font-medium"
            >
              First Name
            </Typography>
            <Input
              size="lg"
              labelProps={{
                className: "hidden",
              }}
              className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
              value={fName}
              onChange={(e) => setFName(e.target.value)}
            />
          </div>
          <div className="w-full">
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-2 font-medium"
            >
              Last Name
            </Typography>
            <Input
              size="lg"
              value={LName}
              onChange={(e) => setLName(e.target.value)}
              labelProps={{
                className: "hidden",
              }}
              className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
            />
          </div>
        </div>
        <div className="mb-6 flex flex-col gap-4 md:flex-row">
          <div className="w-full">
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-2 font-medium"
            >
              I&apos;m
            </Typography>
            <Select
              size="lg"
              labelProps={{
                className: "hidden",
              }}
              className="border-t-blue-gray-200 aria-[expanded=true]:border-t-primary"
            >
              <Option>Male</Option>
              <Option>Female</Option>
            </Select>
          </div>
        </div>
        <div className="mb-6 flex flex-col items-end gap-4 md:flex-row">
          <div className="w-full">
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-2 font-medium"
            >
              Email
            </Typography>
            <Input
              size="lg"
              placeholder="emma@mail.com"
              labelProps={{
                className: "hidden",
              }}
              disabled
              className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
            />
          </div>
        </div>
        <div className="mb-6 flex flex-col items-end gap-4 md:flex-row">
          <div className="w-full">
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-2 font-medium"
            >
              Location
            </Typography>
            <Input
              size="lg"
              placeholder="Casablanca, MOROCCO"
              disabled
              labelProps={{
                className: "hidden",
              }}
              className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
            />
          </div>
          <div className="w-full">
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-2 font-medium"
            >
              Phone Number
            </Typography>
            <Input
              size="lg"
              placeholder="+212 123 456 789"
              labelProps={{
                className: "hidden",
              }}
              disabled
              className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default User;
