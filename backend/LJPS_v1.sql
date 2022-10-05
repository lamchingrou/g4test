DROP DATABASE `LJPS_DB`;
CREATE DATABASE IF NOT EXISTS `LJPS_DB` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `LJPS_DB`;


CREATE TABLE `Staff` (
    `Staff_ID` int NOT NULL,
    `Staff_FName` varchar(50) NOT NULL,
    `Staff_lName` varchar(50) NOT NULL,
    `Dept` varchar(50) NOT NULL,
    `Email` varchar(50) NOT NULL,
    `Role` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `Course` (
    `Course_ID` varchar(20) NOT NULL,
    `Course_Name` varchar(50) NOT NULL,
    `Course_Desc` varchar(255),
    `Course_Status` varchar(15),
    `Course_Type` varchar(10),
    `Course_Category` varchar(50)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `Role` (
    `Role_ID` int NOT NULL,
    `Role_Name` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `Registration` (
    `Reg_ID` int NOT NULL,
    `Course_ID` varchar(20) NOT NULL,
    `Staff_ID` int NOT NULL,
    `Reg_Status` varchar(15) NOT NULL,
    `Completion_Status` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/* Role Table PK FK */
ALTER TABLE `Role`
    ADD PRIMARY KEY (`Role_ID`);

/* Course Table PK FK */
ALTER TABLE `Course`
    ADD PRIMARY KEY (`Course_ID`);
/* Staff Table PK FK */
ALTER TABLE `Staff`
    ADD PRIMARY KEY (`Staff_ID`),
    ADD CONSTRAINT `Role` FOREIGN KEY (`Role`) REFERENCES `Role` (`Role_ID`);

/* Registration Table PK FK */
ALTER TABLE `Registration`
    ADD PRIMARY KEY (`Reg_ID`),
    ADD CONSTRAINT `Course` FOREIGN KEY (`Course_ID`) REFERENCES `Course` (`Course_ID`),
    ADD CONSTRAINT `Staff` FOREIGN KEY (`Staff_ID`) REFERENCES `Staff` (`Staff_ID`);
    
INSERT INTO `role` (`Role_ID`, `Role_name`) 
VALUES
(1, 'Admin'),
(2, 'User'),
(3, 'Manager'),
(4, 'Trainer');


INSERT INTO course(Course_ID,Course_Name,Course_Desc,Course_Status,Course_Type,Course_Category)
VALUES ("COR001", "Systems Thinking and Design","This foundation module aims to introduce students to the fundamental concepts and underlying principles of systems thinking,","Active","Internal","Core");

INSERT INTO staff(Staff_ID, Staff_FName, Staff_LName, Dept, Email, Role)
VALUES (130001,"John","Sim","Chariman","jack.sim@allinone.com.sg",1);

INSERT INTO `registration` (`Reg_ID`, `Course_ID` , `Staff_ID` , `Reg_Status`, `Completion_Status`) 
VALUES
(1, 'COR001', 130001, 'Registered', 'Completed');

