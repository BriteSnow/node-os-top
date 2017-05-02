


var data = module.exports = {};


data.mac = `Processes: 329 total, 2 running, 327 sleeping, 1550 threads 
2017/04/14 09:59:33
Load Avg: 1.16, 1.35, 1.46 
CPU usage: 1.11% user, 1.11% sys, 97.21% idle 
SharedLibs: 204M resident, 49M data, 23M linkedit.
MemRegions: 50665 total, 3705M resident, 108M private, 1210M shared.
PhysMem: 14G used (1830M wired), 2188M unused.
VM: 889G vsize, 627M framework vsize, 2086455(0) swapins, 2105501(0) swapouts.
Networks: packets: 687227/438M in, 569619/161M out.
Disks: 667330/25G read, 145829/13G written.

PID    COMMAND          %CPU TIME     #TH   #WQ #PORTS MEM    PURG   CMPRS  PGRP  PPID  STATE    BOOSTS     %CPU_ME %CPU_OTHRS UID FAULTS   COW     MSGSENT   MSGRECV   SYSBSD    SYSMACH   CSW       PAGEINS IDLEW    POWER USER             #MREGS RPRVT VPRVT VSIZE KPRVT KSHRD
16098  top              0.0  00:00.19 1/1   0   20+    2992K+ 0B     0B     16098 14531 running  *0[1]      0.22598 0.00000    0   1724+    99+     139533+   69771+    3150+     75003+    110+      0       1+       7.1   root             N/A    N/A   N/A   N/A   N/A   N/A  
16085  mdworker         0.0  00:00.02 3     1   43     2780K  0B     0B     16085 1     sleeping *0[1]      0.00000 0.00000    89  1738     185     487       208       1559      505       92        0       0        0.0   _spotlight       N/A    N/A   N/A   N/A   N/A   N/A  
16033  quicklookd       0.0  00:00.09 4     1   88     4560K  32K    0B     16033 1     sleeping  0[0]      0.00000 0.00000    501 3285     247     350       88        2592      728       269       0       4        0.0   jeremychone      N/A    N/A   N/A   N/A   N/A   N/A  

Processes: 329 total, 2 running, 327 sleeping, 1550 threads 
2017/04/14 09:59:33
Load Avg: 1.16, 1.35, 1.46 
CPU usage: 2.22% user, 3.33% sys, 97.21% idle 
SharedLibs: 204M resident, 49M data, 23M linkedit.
MemRegions: 50665 total, 3705M resident, 108M private, 1210M shared.
PhysMem: 14G used (1830M wired), 2188M unused.
VM: 889G vsize, 627M framework vsize, 2086455(0) swapins, 2105501(0) swapouts.
Networks: packets: 687227/438M in, 569619/161M out.
Disks: 667330/25G read, 145829/13G written.

PID    COMMAND          %CPU TIME     #TH   #WQ #PORTS MEM    PURG   CMPRS  PGRP  PPID  STATE    BOOSTS     %CPU_ME %CPU_OTHRS UID FAULTS   COW     MSGSENT   MSGRECV   SYSBSD    SYSMACH   CSW       PAGEINS IDLEW    POWER USER             #MREGS RPRVT VPRVT VSIZE KPRVT KSHRD
16098  top              7.1  00:00.19 1/1   0   20+    2992K+ 0B     0B     16098 14531 running  *0[1]      0.22598 0.00000    0   1724+    99+     139533+   69771+    3150+     75003+    110+      0       1+       7.1   root             N/A    N/A   N/A   N/A   N/A   N/A  
16085  mdworker         0.0  00:00.02 3     1   43     2780K  0B     0B     16085 1     sleeping *0[1]      0.00000 0.00000    89  1738     185     487       208       1559      505       92        0       0        0.0   _spotlight       N/A    N/A   N/A   N/A   N/A   N/A  
16033  quicklookd       0.0  00:00.09 4     1   88     4560K  32K    0B     16033 1     sleeping  0[0]      0.00000 0.00000    501 3285     247     350       88        2592      728       269       0       4        0.0   jeremychone      N/A    N/A   N/A   N/A   N/A   N/A  `;



data.lnx = `top - 23:41:05 up 413 days, 21:49,  2 users,  load average: 0.00, 0.01, 0.05
Tasks:  88 total,   1 running,  87 sleeping,   0 stopped,   0 zombie
Cpu(s):  1.1%us,  1.1%sy,  0.0%ni, 98.5%id,  0.0%wa,  0.0%hi,  0.0%si,  0.0%st
Mem:   1019444k total,   507108k used,   512336k free,    84072k buffers
Swap:        0k total,        0k used,        0k free,   160568k cached

  PID USER      PR  NI  VIRT  RES  SHR S %CPU %MEM    TIME+  COMMAND                                                    
  334 ec2-user  20   0 1255m 123m  17m S  2.0 12.4  64:38.11 gulp                                                       
    1 root      20   0 19636 1808 1484 S  0.0  0.2   0:19.69 init                                                       
    2 root      20   0     0    0    0 S  0.0  0.0   0:00.00 kthreadd                                                   
    3 root      20   0     0    0    0 S  0.0  0.0   1:17.94 ksoftirqd/0 


top - 23:41:05 up 413 days, 21:49,  2 users,  load average: 0.00, 0.01, 0.05
Tasks:  88 total,   1 running,  87 sleeping,   0 stopped,   0 zombie
Cpu(s):  2.2%us,  3.3%sy,  0.0%ni, 98.5%id,  0.0%wa,  0.0%hi,  0.0%si,  0.0%st
Mem:   1019444k total,   507108k used,   512336k free,    84072k buffers
Swap:        0k total,        0k used,        0k free,   160568k cached

  PID USER      PR  NI  VIRT  RES  SHR S %CPU %MEM    TIME+  COMMAND                                                    
  334 ec2-user  20   0 1255m 123m  17m S  2.0 12.4  64:38.11 gulp                                                       
    1 root      20   0 19636 1808 1484 S  0.0  0.2   0:19.69 init                                                       
    2 root      20   0     0    0    0 S  0.0  0.0   0:00.00 kthreadd                                                   
    3 root      20   0     0    0    0 S  0.0  0.0   1:17.94 ksoftirqd/0                                                                                                                                                
`;

