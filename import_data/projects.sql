-- MySQL dump 10.13  Distrib 9.1.0, for Linux (x86_64)
--
-- Host: localhost    Database: projects
-- ------------------------------------------------------
-- Server version	9.1.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `pro_list`
--

DROP TABLE IF EXISTS `pro_list`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pro_list` (
  `project_id` char(5) NOT NULL,
  `project_name` text NOT NULL,
  `languages_used` text,
  `project_file_name` text NOT NULL,
  `short_desc` text,
  `desc_file` text,
  `project_image` text,
  PRIMARY KEY (`project_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pro_list`
--

LOCK TABLES `pro_list` WRITE;
/*!40000 ALTER TABLE `pro_list` DISABLE KEYS */;
INSERT INTO `pro_list` VALUES ('AFS','ANDREW FILE SYSTEM','','afs.py','','afs.md','images/afs.jpg'),('CHE','CHECKSUM','SHA-256, SHA2','checksum.py','','checksum.md','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9gD_3AeiYQw3gre6DVOxaCN1GWCp0mSX7JQ&usqp=CAU'),('DIS','MORDERN HARDDRIVE SIMULATOR','','disk-precise.py','','disk.md','images/disk.png'),('DIS_P','MORDERN HARDDRIVE SIMULATOR-PRECISE','','disk.py','','disk.md','images/disk.png'),('FFS','BERKLEY FAST FILE SYSTEM','','ffs.py','','ffs.md','images/ffs.png'),('FOR','CONTEXT SWITCH SIMULATION','CTX_SWITCH,SIMU,PYTHON,C++','fork.py','This shows you u the magic Operating system performs while Context switch allowing multiprograming','fork.md','/images/context.png'),('FSC','FILE SYSTEM CONSISTENCY CHECK','','fsck.py','','fsck.md','images/fsc.png'),('GEN','FORK PROCESS GENERATOR','','generator.py','','generator.md','images/generator.jpg'),('LFS','LOG-STRUCTURED FILE SYSTEM','','lfs.py','','lfs.md','images/lfs.png'),('LOT','TICKET_SCHEDULER','PROPOTIONAL,FAIR,TICKETS,PYTHON','lottery.py','Ticket Cpu Scheduling scheme to schedule the processes optimizing on fairness','lottery.md','/images/lot.png'),('MAL','SPACE ALLOCATOR','FREE SPACE MNG, PYTHON, MEMORY','malloc.py','An implemetation of famous C++ malloc library','malloc.pd','/images/space.jpg'),('MLF','MLFQ_SCH_OPTIMIZED','OPTIMIZE,TURN_AROUND_TIME,C++,MEMORY','mlfq.py','A non-deterministic scheduling alogorithm performing on par with Shortest job First.','mlfq.md','/images/mlfq.png'),('MUL','PAGING_MULTI','TRANSLATE, M_PAGES','multi.py','Translate the pages using multiple levels or so','multi.md','/images/multi.gif'),('PAG_L','PAGING_LINEAR_TR','TABLES,PAGE LIST,PAGE','paging-linear-translate.py','Compute the virtual addresses of the pages with single page table to optimize the disk access time','paging-linear-translate.md','/images/pagl.png'),('PAG_M','PAGING_MULI_TR','PAGE LIST,M_PAGES,TRANSLATE','paging-multilevel-translate.py','Compute the virtual addresses of the pages with page directories and page lists to optimize the disk access time','paging-multilevel-translate.md','/images/pagm.png'),('PAG_P','PAGING_POLICIES','LRU,MRU,MFU,LFU PAGING POLICIES','paging-policy.py','Run various Page Eviction policies like MRU,MFU,LFU,RANDOM ','paging-policy.py','/images/pagp.png'),('PRO','PROCESS_VISUALIZATION','PROC_STR,ADDR_SPACE,C++,PYTHON','process-run.py','See the internal stages a project can be in like Running,Ready and Waiting and many more...','process-run.md','/images/pro.png'),('RAI','RAID_WITHOUT_GRAPHICS','PYTHON,C++,RAID,DISK','raid.py','Redundant array of inexpensive disk implemented using C++, Python','raid.md','/images/raid.png'),('RAIG','RAID_GRAPHICS','OPEN-GL,PYTHON,C++,RAID,DISK','raid-graphics.py','Redundant array of inexpensive disk implemented using C++, Python and Tkinter Graphics','raid-graphics.md','/images/raidg.gif'),('REL','MEMORY VIRTUALIZATION','VIRTUAL_ADR,PHYSICAL_ADR','relocation.py','Explainer project to simulate the virtual-to-physical address translation in Operating Systems','relocation.md','/images/mem_v.png'),('SCH','CPU SCHEDULER','','scheduler.py','A program to compare and contrast various cpu scheduling algorithms like FCFS,RANDOM,SJF and STCF','scheduler.md','/images/sch.png'),('SEG','MEMORY SEGMENTATION','','segmentation.py','A program which lets you compare the runtime if memory segmentation is used to implement address spaces in a process','segmentation.md','/images/seg.png'),('SSD','SSD OPERATIONS','SSD, DRIVE, ALLOCATION','ssd.py','Solid state drives are definately different so different policy for them yeah!','ssd.md','/images/filesystem.png'),('VSF','SIMPLE FILE SYSTEM','IMPLEMENTATION,FILE SYSTEM, SIMULATION','vsfs.py','Implementation of a very simple file system in C++. Bjarne\'s Support','vsfs.md','/images/very_simple_file.jpg'),('X86','CONCURRENCY','CONCURRENCY, FEEL, THREADS','x86.py','A program simulating the PROC data structure in C used in implementation of x86 hardware instruction set.','x86.md','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRbHHfEZSJ0KV65AM64gFx4OR5q1xGWN-yWQ&usqp=CAU');
/*!40000 ALTER TABLE `pro_list` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-01-26 10:15:48
