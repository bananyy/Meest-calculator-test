-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Počítač: 127.0.0.1
-- Vytvořeno: Pát 12. dub 2024, 12:50
-- Verze serveru: 10.4.32-MariaDB
-- Verze PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Databáze: `sizes_meest_db_2.0`
--

-- --------------------------------------------------------

--
-- Struktura tabulky `body_parameters`
--

CREATE TABLE `body_parameters` (
  `parameter_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Vypisuji data pro tabulku `body_parameters`
--

INSERT INTO `body_parameters` (`parameter_id`, `name`) VALUES
(1, 'head_length'),
(2, 'chest_length'),
(3, 'waist_length'),
(4, 'hip_length'),
(5, 'foot_length'),
(6, 'height'),
(7, 'pants_length');

-- --------------------------------------------------------

--
-- Struktura tabulky `brands`
--

CREATE TABLE `brands` (
  `brand_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Vypisuji data pro tabulku `brands`
--

INSERT INTO `brands` (`brand_id`, `name`) VALUES
(1, 'BrandX'),
(2, 'BrandY'),
(3, 'BrandZ');

-- --------------------------------------------------------

--
-- Struktura tabulky `clothing_body_requirements`
--

CREATE TABLE `clothing_body_requirements` (
  `requirement_id` int(11) NOT NULL,
  `clothing_type_id` int(11) DEFAULT NULL,
  `parameter_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Vypisuji data pro tabulku `clothing_body_requirements`
--

INSERT INTO `clothing_body_requirements` (`requirement_id`, `clothing_type_id`, `parameter_id`) VALUES
(6, 1, 3),
(7, 1, 3),
(9, 4, 2),
(10, 4, 6),
(11, 3, 4);

-- --------------------------------------------------------

--
-- Struktura tabulky `clothing_types`
--

CREATE TABLE `clothing_types` (
  `type_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `gender_category` enum('Men','Women','Children') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Vypisuji data pro tabulku `clothing_types`
--

INSERT INTO `clothing_types` (`type_id`, `name`, `gender_category`) VALUES
(1, 'Shirt', 'Men'),
(2, 'Pants', 'Women'),
(3, 'Dress', 'Children'),
(4, 'Shirt', 'Women');

-- --------------------------------------------------------

--
-- Struktura tabulky `measurements`
--

CREATE TABLE `measurements` (
  `measurement_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `unit` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Vypisuji data pro tabulku `measurements`
--

INSERT INTO `measurements` (`measurement_id`, `name`, `unit`) VALUES
(1, 'Chest', 'cm'),
(2, 'Waist', 'cm'),
(3, 'Length', 'cm');

-- --------------------------------------------------------

--
-- Struktura tabulky `sizes`
--

CREATE TABLE `sizes` (
  `size_id` int(11) NOT NULL,
  `size_label` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Vypisuji data pro tabulku `sizes`
--

INSERT INTO `sizes` (`size_id`, `size_label`) VALUES
(1, 'S'),
(2, 'M'),
(3, 'L');

-- --------------------------------------------------------

--
-- Struktura tabulky `size_conversions`
--

CREATE TABLE `size_conversions` (
  `conversion_id` int(11) NOT NULL,
  `size_id` int(11) NOT NULL,
  `size_system` varchar(50) NOT NULL,
  `size_value` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Vypisuji data pro tabulku `size_conversions`
--

INSERT INTO `size_conversions` (`conversion_id`, `size_id`, `size_system`, `size_value`) VALUES
(1, 1, 'US', 'Small'),
(2, 2, 'US', 'Medium'),
(3, 3, 'US', 'Large'),
(4, 1, 'EU', '36'),
(5, 2, 'EU', '38'),
(6, 3, 'EU', '40');

-- --------------------------------------------------------

--
-- Struktura tabulky `size_matching`
--

CREATE TABLE `size_matching` (
  `match_id` int(11) NOT NULL,
  `brand_id` int(11) NOT NULL,
  `type_id` int(11) NOT NULL,
  `size_id` int(11) NOT NULL,
  `measurement_id` int(11) NOT NULL,
  `min_value` decimal(10,2) NOT NULL,
  `max_value` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Vypisuji data pro tabulku `size_matching`
--

INSERT INTO `size_matching` (`match_id`, `brand_id`, `type_id`, `size_id`, `measurement_id`, `min_value`, `max_value`) VALUES
(1, 1, 1, 1, 1, 80.00, 90.00),
(2, 1, 2, 2, 2, 65.00, 75.00),
(3, 2, 3, 3, 3, 90.00, 100.00);

-- --------------------------------------------------------

--
-- Struktura tabulky `users`
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password_hash` varchar(255) NOT NULL,
  `account_created` datetime NOT NULL,
  `last_login` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Vypisuji data pro tabulku `users`
--

INSERT INTO `users` (`user_id`, `username`, `email`, `password_hash`, `account_created`, `last_login`) VALUES
(1, 'testuser1', 'testuser1@example.com', 'hashedpassword1', '2023-01-01 10:00:00', NULL),
(2, 'testuser2', 'testuser2@example.com', 'hashedpassword2', '2023-01-02 10:00:00', NULL);

--
-- Indexy pro exportované tabulky
--

--
-- Indexy pro tabulku `body_parameters`
--
ALTER TABLE `body_parameters`
  ADD PRIMARY KEY (`parameter_id`);

--
-- Indexy pro tabulku `brands`
--
ALTER TABLE `brands`
  ADD PRIMARY KEY (`brand_id`);

--
-- Indexy pro tabulku `clothing_body_requirements`
--
ALTER TABLE `clothing_body_requirements`
  ADD PRIMARY KEY (`requirement_id`),
  ADD KEY `clothing_type_id` (`clothing_type_id`),
  ADD KEY `parameter_id` (`parameter_id`);

--
-- Indexy pro tabulku `clothing_types`
--
ALTER TABLE `clothing_types`
  ADD PRIMARY KEY (`type_id`);

--
-- Indexy pro tabulku `measurements`
--
ALTER TABLE `measurements`
  ADD PRIMARY KEY (`measurement_id`);

--
-- Indexy pro tabulku `sizes`
--
ALTER TABLE `sizes`
  ADD PRIMARY KEY (`size_id`);

--
-- Indexy pro tabulku `size_conversions`
--
ALTER TABLE `size_conversions`
  ADD PRIMARY KEY (`conversion_id`),
  ADD KEY `size_id` (`size_id`);

--
-- Indexy pro tabulku `size_matching`
--
ALTER TABLE `size_matching`
  ADD PRIMARY KEY (`match_id`),
  ADD KEY `brand_id` (`brand_id`),
  ADD KEY `type_id` (`type_id`),
  ADD KEY `size_id` (`size_id`),
  ADD KEY `measurement_id` (`measurement_id`);

--
-- Indexy pro tabulku `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT pro tabulky
--

--
-- AUTO_INCREMENT pro tabulku `body_parameters`
--
ALTER TABLE `body_parameters`
  MODIFY `parameter_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT pro tabulku `brands`
--
ALTER TABLE `brands`
  MODIFY `brand_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pro tabulku `clothing_body_requirements`
--
ALTER TABLE `clothing_body_requirements`
  MODIFY `requirement_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT pro tabulku `clothing_types`
--
ALTER TABLE `clothing_types`
  MODIFY `type_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pro tabulku `measurements`
--
ALTER TABLE `measurements`
  MODIFY `measurement_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pro tabulku `sizes`
--
ALTER TABLE `sizes`
  MODIFY `size_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pro tabulku `size_conversions`
--
ALTER TABLE `size_conversions`
  MODIFY `conversion_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT pro tabulku `size_matching`
--
ALTER TABLE `size_matching`
  MODIFY `match_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pro tabulku `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Omezení pro exportované tabulky
--

--
-- Omezení pro tabulku `clothing_body_requirements`
--
ALTER TABLE `clothing_body_requirements`
  ADD CONSTRAINT `clothing_body_requirements_ibfk_1` FOREIGN KEY (`clothing_type_id`) REFERENCES `clothing_types` (`type_id`),
  ADD CONSTRAINT `clothing_body_requirements_ibfk_2` FOREIGN KEY (`parameter_id`) REFERENCES `body_parameters` (`parameter_id`);

--
-- Omezení pro tabulku `size_conversions`
--
ALTER TABLE `size_conversions`
  ADD CONSTRAINT `size_conversions_ibfk_1` FOREIGN KEY (`size_id`) REFERENCES `sizes` (`size_id`);

--
-- Omezení pro tabulku `size_matching`
--
ALTER TABLE `size_matching`
  ADD CONSTRAINT `size_matching_ibfk_1` FOREIGN KEY (`brand_id`) REFERENCES `brands` (`brand_id`),
  ADD CONSTRAINT `size_matching_ibfk_2` FOREIGN KEY (`type_id`) REFERENCES `clothing_types` (`type_id`),
  ADD CONSTRAINT `size_matching_ibfk_3` FOREIGN KEY (`size_id`) REFERENCES `sizes` (`size_id`),
  ADD CONSTRAINT `size_matching_ibfk_4` FOREIGN KEY (`measurement_id`) REFERENCES `measurements` (`measurement_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;