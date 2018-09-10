-- phpMyAdmin SQL Dump
-- version 4.0.4
-- http://www.phpmyadmin.net
--
-- 主机: localhost
-- 生成日期: 2018 年 09 月 08 日 14:45
-- 服务器版本: 5.6.12-log
-- PHP 版本: 5.4.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";




--
-- 数据库: `wuif`
--

-- --------------------------------------------------------

--
-- 表的结构 `category`
--

CREATE TABLE IF NOT EXISTS `category` (
  `id` int(12) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `is_default` varchar(255) NOT NULL, -- 1 代表显示 0 代表不显示
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;


INSERT INTO `category` (`id`, `name`, `is_default`) VALUES
(1, '推荐', '1'),
(2, '视频', '1'),
(3, '娱乐', '1'),
(4, '军事', '1'),
(5, '体育', '1'),
(6, '时尚', '1'),
(7, '旅游', '1');




COMMIT;