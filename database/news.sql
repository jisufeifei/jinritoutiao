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
-- 表的结构 `news`
--

CREATE TABLE IF NOT EXISTS `news` (
  `id` int(12) NOT NULL AUTO_INCREMENT,
  `cid` int(12) NOT NULL,
  `title` varchar(255) NOT NULL,
  `dsc` TEXT(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `url` varchar(255) NOT NULL,
  `create_time` varchar(255) NOT NULL,
  `content` LONGTEXT NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 ;

INSERT INTO `news` (`cid`, `title`, `dsc`,`image`,`url`,`create_time`,`content`) VALUES
(1, '航空母舰发射成功', '发射成功', 'http://..', 'http://..', '2018-09-02 20:40:01', '<ul><li>1</ul>'),
(2, '航空母舰发射成功', '发射成功', 'http://..', 'http://..', '2018-09-02 20:40:01', '<ul><li>1</ul>');

