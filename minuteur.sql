-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3308
-- Généré le :  mar. 14 juil. 2020 à 11:13
-- Version du serveur :  5.7.9
-- Version de PHP :  7.4.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `minuteur`
--

-- --------------------------------------------------------

--
-- Structure de la table `minuteur`
--

DROP TABLE IF EXISTS `minuteur`;
CREATE TABLE IF NOT EXISTS `minuteur` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titre` varchar(100) COLLATE utf8_bin NOT NULL,
  `second` int(11) NOT NULL,
  `actif` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Déchargement des données de la table `minuteur`
--

INSERT INTO `minuteur` (`id`, `titre`, `second`, `actif`) VALUES
(1, 'test', 90, 1),
(2, 'oeuf à la coque', 180, 1),
(3, 'sport', 1800, 1);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
