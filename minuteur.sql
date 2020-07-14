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
(1, 'Oeuf à la coque', 180, 1),
(3, 'Sport', 1800, 1);
COMMIT;
