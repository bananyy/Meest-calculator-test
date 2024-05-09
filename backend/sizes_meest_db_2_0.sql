-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1
-- Час створення: Квт 30 2024 р., 14:57
-- Версія сервера: 10.4.32-MariaDB
-- Версія PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База даних: `sizes_meest_db_2.0`
--

-- --------------------------------------------------------

--
-- Структура таблиці `body_parameters`
--

CREATE TABLE `body_parameters` (
  `parameter_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `part_name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп даних таблиці `body_parameters`
--

INSERT INTO `body_parameters` (`parameter_id`, `name`, `part_name`) VALUES
(1, 'head_length', 'Довжина голови'),
(2, 'chest_length', 'Довжина грудей'),
(3, 'waist_length', 'Довжина талії'),
(4, 'hip_length', 'Довжина стегна'),
(5, 'foot_length', 'Довжина стопи'),
(6, 'height', 'Зріст'),
(7, 'pants_length', 'Довжина штанів');

-- --------------------------------------------------------

--
-- Структура таблиці `brands`
--

CREATE TABLE `brands` (
  `brand_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `logo` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп даних таблиці `brands`
--

INSERT INTO `brands` (`brand_id`, `name`, `logo`) VALUES
(1, 'BrandX', NULL),
(2, 'BrandY', NULL),
(3, 'BrandZ', NULL);

-- --------------------------------------------------------

--
-- Структура таблиці `clothing_body_requirements`
--

CREATE TABLE `clothing_body_requirements` (
  `requirement_id` int(11) NOT NULL,
  `clothing_type_id` int(11) DEFAULT NULL,
  `parameter_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп даних таблиці `clothing_body_requirements`
--

INSERT INTO `clothing_body_requirements` (`requirement_id`, `clothing_type_id`, `parameter_id`) VALUES
(12, 3, 4),
(13, 2, 3),
(14, 2, 4),
(15, 1, 2),
(16, 1, 6),
(17, 6, 6),
(18, 6, 5),
(19, 6, 3),
(20, 9, 6);

-- --------------------------------------------------------

--
-- Структура таблиці `clothing_types`
--

CREATE TABLE `clothing_types` (
  `type_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `type_name` varchar(255) DEFAULT NULL,
  `gender_id` bigint(20) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп даних таблиці `clothing_types`
--

INSERT INTO `clothing_types` (`type_id`, `name`, `type_name`, `gender_id`) VALUES
(1, 'shirt', NULL, 1),
(2, 'pants', NULL, 2),
(3, 'dress', NULL, 3),
(4, 'shirts', NULL, 2),
(5, 'jacket', NULL, 3),
(6, 'jeans', 'Джинси', 3),
(9, 'pajamas', 'Піжами', 3);

-- --------------------------------------------------------

--
-- Структура таблиці `genders`
--

CREATE TABLE `genders` (
  `gender_id` bigint(20) UNSIGNED NOT NULL,
  `gender_category` varchar(50) DEFAULT NULL,
  `gender_name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп даних таблиці `genders`
--

INSERT INTO `genders` (`gender_id`, `gender_category`, `gender_name`) VALUES
(1, 'male', 'Чоловік'),
(2, 'female', 'Жінка'),
(3, 'children', 'Дитина');

-- --------------------------------------------------------

--
-- Структура таблиці `measurements`
--

CREATE TABLE `measurements` (
  `measurement_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `unit` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп даних таблиці `measurements`
--

INSERT INTO `measurements` (`measurement_id`, `name`, `unit`) VALUES
(1, 'Chest', 'cm'),
(2, 'Waist', 'cm'),
(3, 'Length', 'cm');

-- --------------------------------------------------------

--
-- Структура таблиці `sizes`
--

CREATE TABLE `sizes` (
  `size_id` int(11) NOT NULL,
  `size_label` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп даних таблиці `sizes`
--

INSERT INTO `sizes` (`size_id`, `size_label`) VALUES
(1, 'S'),
(2, 'M'),
(3, 'L');

-- --------------------------------------------------------

--
-- Структура таблиці `size_conversions`
--

CREATE TABLE `size_conversions` (
  `conversion_id` int(11) NOT NULL,
  `size_id` int(11) NOT NULL,
  `size_system` varchar(50) NOT NULL,
  `size_value` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп даних таблиці `size_conversions`
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
-- Структура таблиці `size_matching`
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
-- Дамп даних таблиці `size_matching`
--

INSERT INTO `size_matching` (`match_id`, `brand_id`, `type_id`, `size_id`, `measurement_id`, `min_value`, `max_value`) VALUES
(1, 1, 3, 1, 1, 80.00, 90.00),
(4, 1, 2, 3, 2, 80.00, 90.00),
(5, 2, 1, 2, 3, 50.00, 60.00),
(6, 3, 1, 1, 2, 80.00, 90.00),
(7, 2, 6, 2, 2, 80.00, 90.00),
(8, 2, 5, 1, 2, 80.00, 90.00),
(9, 3, 9, 2, 2, 90.00, 100.00),
(10, 2, 9, 1, 2, 80.00, 90.00);

-- --------------------------------------------------------

--
-- Структура таблиці `users`
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
-- Дамп даних таблиці `users`
--

INSERT INTO `users` (`user_id`, `username`, `email`, `password_hash`, `account_created`, `last_login`) VALUES
(1, 'testuser1', 'testuser1@example.com', 'hashedpassword1', '2023-01-01 10:00:00', NULL),
(2, 'testuser2', 'testuser2@example.com', 'hashedpassword2', '2023-01-02 10:00:00', NULL);

--
-- Індекси збережених таблиць
--

--
-- Індекси таблиці `body_parameters`
--
ALTER TABLE `body_parameters`
  ADD PRIMARY KEY (`parameter_id`);

--
-- Індекси таблиці `brands`
--
ALTER TABLE `brands`
  ADD PRIMARY KEY (`brand_id`);

--
-- Індекси таблиці `clothing_body_requirements`
--
ALTER TABLE `clothing_body_requirements`
  ADD PRIMARY KEY (`requirement_id`),
  ADD KEY `clothing_type_id` (`clothing_type_id`),
  ADD KEY `parameter_id` (`parameter_id`);

--
-- Індекси таблиці `clothing_types`
--
ALTER TABLE `clothing_types`
  ADD PRIMARY KEY (`type_id`),
  ADD KEY `gender_id` (`gender_id`);

--
-- Індекси таблиці `genders`
--
ALTER TABLE `genders`
  ADD PRIMARY KEY (`gender_id`);

--
-- Індекси таблиці `measurements`
--
ALTER TABLE `measurements`
  ADD PRIMARY KEY (`measurement_id`);

--
-- Індекси таблиці `sizes`
--
ALTER TABLE `sizes`
  ADD PRIMARY KEY (`size_id`);

--
-- Індекси таблиці `size_conversions`
--
ALTER TABLE `size_conversions`
  ADD PRIMARY KEY (`conversion_id`),
  ADD KEY `size_id` (`size_id`);

--
-- Індекси таблиці `size_matching`
--
ALTER TABLE `size_matching`
  ADD PRIMARY KEY (`match_id`),
  ADD KEY `brand_id` (`brand_id`),
  ADD KEY `type_id` (`type_id`),
  ADD KEY `size_id` (`size_id`),
  ADD KEY `measurement_id` (`measurement_id`);

--
-- Індекси таблиці `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT для збережених таблиць
--

--
-- AUTO_INCREMENT для таблиці `body_parameters`
--
ALTER TABLE `body_parameters`
  MODIFY `parameter_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT для таблиці `brands`
--
ALTER TABLE `brands`
  MODIFY `brand_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT для таблиці `clothing_body_requirements`
--
ALTER TABLE `clothing_body_requirements`
  MODIFY `requirement_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT для таблиці `clothing_types`
--
ALTER TABLE `clothing_types`
  MODIFY `type_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT для таблиці `genders`
--
ALTER TABLE `genders`
  MODIFY `gender_id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT для таблиці `measurements`
--
ALTER TABLE `measurements`
  MODIFY `measurement_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT для таблиці `sizes`
--
ALTER TABLE `sizes`
  MODIFY `size_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT для таблиці `size_conversions`
--
ALTER TABLE `size_conversions`
  MODIFY `conversion_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT для таблиці `size_matching`
--
ALTER TABLE `size_matching`
  MODIFY `match_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT для таблиці `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Обмеження зовнішнього ключа збережених таблиць
--

--
-- Обмеження зовнішнього ключа таблиці `clothing_body_requirements`
--
ALTER TABLE `clothing_body_requirements`
  ADD CONSTRAINT `clothing_body_requirements_ibfk_1` FOREIGN KEY (`clothing_type_id`) REFERENCES `clothing_types` (`type_id`),
  ADD CONSTRAINT `clothing_body_requirements_ibfk_2` FOREIGN KEY (`parameter_id`) REFERENCES `body_parameters` (`parameter_id`);

--
-- Обмеження зовнішнього ключа таблиці `clothing_types`
--
ALTER TABLE `clothing_types`
  ADD CONSTRAINT `clothing_types_ibfk_1` FOREIGN KEY (`gender_id`) REFERENCES `genders` (`gender_id`);

--
-- Обмеження зовнішнього ключа таблиці `size_conversions`
--
ALTER TABLE `size_conversions`
  ADD CONSTRAINT `size_conversions_ibfk_1` FOREIGN KEY (`size_id`) REFERENCES `sizes` (`size_id`);

--
-- Обмеження зовнішнього ключа таблиці `size_matching`
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