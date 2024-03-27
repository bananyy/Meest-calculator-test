-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Počítač: 127.0.0.1
-- Vytvořeno: Stř 27. bře 2024, 13:02
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
-- Databáze: `sizes_meest_db`
--

-- --------------------------------------------------------

--
-- Struktura tabulky `bodymeasurements`
--

CREATE TABLE `bodymeasurements` (
  `measurement_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `unit` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Vypisuji data pro tabulku `bodymeasurements`
--

INSERT INTO `bodymeasurements` (`measurement_id`, `name`, `unit`) VALUES
(1, 'Chest', 'cm'),
(2, 'Waist', 'cm'),
(3, 'Sleeve', 'cm');

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
(1, 'BrandA'),
(2, 'BrandB'),
(3, 'BrandC');

-- --------------------------------------------------------

--
-- Struktura tabulky `clothingtypes`
--

CREATE TABLE `clothingtypes` (
  `type_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Vypisuji data pro tabulku `clothingtypes`
--

INSERT INTO `clothingtypes` (`type_id`, `name`) VALUES
(1, 'Shirts'),
(2, 'Pants'),
(3, 'Dresses');

-- --------------------------------------------------------

--
-- Struktura tabulky `sizeconversions`
--

CREATE TABLE `sizeconversions` (
  `conversion_id` int(11) NOT NULL,
  `size_id` int(11) DEFAULT NULL,
  `size_system` varchar(50) DEFAULT NULL,
  `size_value` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Vypisuji data pro tabulku `sizeconversions`
--

INSERT INTO `sizeconversions` (`conversion_id`, `size_id`, `size_system`, `size_value`) VALUES
(1, 1, 'US', 'S'),
(2, 1, 'EU', '36'),
(3, 2, 'US', 'M'),
(4, 2, 'EU', '38'),
(5, 3, 'US', 'L'),
(6, 3, 'EU', '40');

-- --------------------------------------------------------

--
-- Struktura tabulky `sizematching`
--

CREATE TABLE `sizematching` (
  `match_id` int(11) NOT NULL,
  `brand_id` int(11) DEFAULT NULL,
  `type_id` int(11) DEFAULT NULL,
  `size_id` int(11) DEFAULT NULL,
  `measurement_id` int(11) DEFAULT NULL,
  `min_value` decimal(10,2) DEFAULT NULL,
  `max_value` decimal(10,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Vypisuji data pro tabulku `sizematching`
--

INSERT INTO `sizematching` (`match_id`, `brand_id`, `type_id`, `size_id`, `measurement_id`, `min_value`, `max_value`) VALUES
(1, 1, 1, 1, 1, 86.00, 90.00),
(2, 1, 1, 2, 1, 90.00, 94.00),
(3, 1, 1, 3, 1, 94.00, 98.00),
(4, 1, 1, 1, NULL, 80.00, 90.00),
(5, 1, 2, 2, NULL, 85.00, 95.00),
(6, 2, 1, 3, NULL, 88.00, 98.00),
(7, 3, 3, 1, NULL, 78.00, 88.00),
(8, 2, 3, 2, NULL, 82.00, 92.00),
(9, 3, 2, 3, NULL, 90.00, 100.00);

-- --------------------------------------------------------

--
-- Struktura tabulky `unifiedsizes`
--

CREATE TABLE `unifiedsizes` (
  `size_id` int(11) NOT NULL,
  `measurement` decimal(5,2) DEFAULT NULL,
  `measurement_unit` varchar(10) NOT NULL DEFAULT 'cm'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Vypisuji data pro tabulku `unifiedsizes`
--

INSERT INTO `unifiedsizes` (`size_id`, `measurement`, `measurement_unit`) VALUES
(1, 88.00, 'cm'),
(2, 92.00, 'cm'),
(3, 96.00, 'cm');

-- --------------------------------------------------------

--
-- Struktura tabulky `users`
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password_hash` char(64) NOT NULL,
  `account_created` timestamp NOT NULL DEFAULT current_timestamp(),
  `last_login` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Vypisuji data pro tabulku `users`
--

INSERT INTO `users` (`user_id`, `username`, `email`, `password_hash`, `account_created`, `last_login`) VALUES
(1, 'testuser', 'test@example.com', '5f4dcc3b5aa765d61d8327deb882cf99', '2024-03-27 11:28:58', NULL);

--
-- Indexy pro exportované tabulky
--

--
-- Indexy pro tabulku `bodymeasurements`
--
ALTER TABLE `bodymeasurements`
  ADD PRIMARY KEY (`measurement_id`);

--
-- Indexy pro tabulku `brands`
--
ALTER TABLE `brands`
  ADD PRIMARY KEY (`brand_id`);

--
-- Indexy pro tabulku `clothingtypes`
--
ALTER TABLE `clothingtypes`
  ADD PRIMARY KEY (`type_id`);

--
-- Indexy pro tabulku `sizeconversions`
--
ALTER TABLE `sizeconversions`
  ADD PRIMARY KEY (`conversion_id`),
  ADD KEY `size_id` (`size_id`);

--
-- Indexy pro tabulku `sizematching`
--
ALTER TABLE `sizematching`
  ADD PRIMARY KEY (`match_id`),
  ADD KEY `brand_id` (`brand_id`),
  ADD KEY `type_id` (`type_id`),
  ADD KEY `size_id` (`size_id`),
  ADD KEY `measurement_id` (`measurement_id`);

--
-- Indexy pro tabulku `unifiedsizes`
--
ALTER TABLE `unifiedsizes`
  ADD PRIMARY KEY (`size_id`);

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
-- AUTO_INCREMENT pro tabulku `bodymeasurements`
--
ALTER TABLE `bodymeasurements`
  MODIFY `measurement_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pro tabulku `brands`
--
ALTER TABLE `brands`
  MODIFY `brand_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pro tabulku `clothingtypes`
--
ALTER TABLE `clothingtypes`
  MODIFY `type_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pro tabulku `sizeconversions`
--
ALTER TABLE `sizeconversions`
  MODIFY `conversion_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT pro tabulku `sizematching`
--
ALTER TABLE `sizematching`
  MODIFY `match_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT pro tabulku `unifiedsizes`
--
ALTER TABLE `unifiedsizes`
  MODIFY `size_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pro tabulku `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Omezení pro exportované tabulky
--

--
-- Omezení pro tabulku `sizeconversions`
--
ALTER TABLE `sizeconversions`
  ADD CONSTRAINT `sizeconversions_ibfk_1` FOREIGN KEY (`size_id`) REFERENCES `unifiedsizes` (`size_id`);

--
-- Omezení pro tabulku `sizematching`
--
ALTER TABLE `sizematching`
  ADD CONSTRAINT `sizematching_ibfk_1` FOREIGN KEY (`brand_id`) REFERENCES `brands` (`brand_id`),
  ADD CONSTRAINT `sizematching_ibfk_2` FOREIGN KEY (`type_id`) REFERENCES `clothingtypes` (`type_id`),
  ADD CONSTRAINT `sizematching_ibfk_3` FOREIGN KEY (`size_id`) REFERENCES `unifiedsizes` (`size_id`),
  ADD CONSTRAINT `sizematching_ibfk_4` FOREIGN KEY (`measurement_id`) REFERENCES `bodymeasurements` (`measurement_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
