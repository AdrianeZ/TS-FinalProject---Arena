-- phpMyAdmin SQL Dump
-- version 4.9.5deb2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Czas generowania: 12 Lut 2022, 21:02
-- Wersja serwera: 8.0.28-0ubuntu0.20.04.3
-- Wersja PHP: 8.0.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `megak_arena`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `warriors`
--

CREATE TABLE `warriors` (
  `id` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `power` tinyint UNSIGNED NOT NULL,
  `defense` tinyint UNSIGNED NOT NULL,
  `stamina` tinyint UNSIGNED NOT NULL,
  `agility` tinyint UNSIGNED NOT NULL,
  `wins` int UNSIGNED NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Zrzut danych tabeli `warriors`
--

INSERT INTO `warriors` (`id`, `name`, `power`, `defense`, `stamina`, `agility`, `wins`) VALUES
('1a1cd777-40b9-4374-bd47-09872403bd7c', '3423233232332', 3, 2, 2, 3, 0),
('66b22827-c787-4673-bd27-0e01e0bed532', 'dfsdf', 4, 3, 2, 1, 0),
('7b30c4d4-5167-4685-a708-884e73261f90', '2334324234', 3, 2, 2, 3, 0),
('dd54986b-a393-4fa2-8126-bf439895a7da', '34234324', 4, 3, 2, 1, 0),
('fd10f028-84fe-4214-b1a0-ddbc85ba1c31', '434', 4, 3, 2, 1, 0);

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `warriors`
--
ALTER TABLE `warriors`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
