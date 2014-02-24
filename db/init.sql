
CREATE TABLE "users" (
	"id" int PRIMARY KEY,
	"first" varchar(255),
	"last" varchar(255),
	"email" varchar(255),
	"password" varchar(255),
	"phone" varchar(255),
	"numRidesTaken" int,
	"numRidesGiven" int,
	"createdAt" timestamp,
	"updatedAt" timestamp
);
CREATE TABLE "rides" (
	"id" int PRIMARY KEY,
	"driverId" int,
	"numSeats" int,
	"fromId" int,
	"toId" int,
	"price" varchar(255),
	"dt" timestamp,
	"createdAt" timestamp,
	"updatedAt" timestamp,
	FOREIGN KEY("driverId") REFERENCES "users" ("id"),
	FOREIGN KEY("fromId") REFERENCES "locations" ("id"),
	FOREIGN KEY("toId") REFERENCES "locations" ("id")
);
CREATE TABLE "usersRides" (
	"id" int PRIMARY KEY,
	"userId" int,
	"rideId" int,
	FOREIGN KEY("userId") REFERENCES "users" ("id"),
	FOREIGN KEY("rideId") REFERENCES "rides" ("id")
);
CREATE TABLE "locations" (
	"id" int PRIMARY KEY,
	"name" varchar(255),
	"geo" varchar(255),
	"numFrom" int,
	"numTo" int
);