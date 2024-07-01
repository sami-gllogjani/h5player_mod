// ==UserScript==
// @name HTML5 video player enhancement script
// @name:en HTML5 video player enhanced script
// @namespace https://github.com/xxxily/h5player
// @homepage https://github.com/xxxily/h5player
// @version 4.2.7
// @description Video enhancement script, supports all H5 video websites, such as: Bilibili, Douyin, Tencent Video, Youku, iQiyi, Xigua Video, YouTube, Weibo Video, Zhihu Video, Sohu Video, NetEase open courses, Baidu network disk, Alibaba cloud disk, ted, instagram, twitter, etc. Full shortcut key control supports: double-speed playback/accelerated playback, video screen capture, picture-in-picture, full-screen web page, adjustment of brightness, saturation, contrast, custom configuration function enhancement and other functions, providing you with a pleasant online video playback experience. It also has the ability to fast forward video ads, learn online tutorials/educational videos at twice the speed, download video files, etc.
// @description:en Video enhancement script, supports all H5 video websites, such as: Bilibili, Douyin, Tencent Video, Youku, iQiyi, Xigua Video, YouTube, Weibo Video, Zhihu Video, Sohu Video, NetEase Open Course, Baidu network disk, Alibaba cloud disk, ted, instagram, twitter, etc. Full shortcut key control, support: double-speed playback/accelerated playback, video screenshots, picture-in-picture, full-screen web pages, adjusting brightness, saturation, contrast
// @author ankvps
// @icon data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAADAFBMVEUAAAAZo+IiqNkXlMx+xs+Kw947ueyq5fAomMlTude76OnJ5uo6o8BrvuB0u9SIzNdFo8sjpcIom7IurODa698PjcBW0uxAoMocp90xjsR+v9zS2 c3j6+UznbP5//uYtK3/7dNHn9DL9PbM9vYDqe0Cq+sDqO0Ipu0Cqu8Eqe8CqeYGpvAMpuMArun/////+//7//////0Dp+v/+P8ArPUHqOr/+/P/+/cBrPDs/// /+PsCquj//voBqfP4/f/3//4Brvj1//cJqOX8/P4Bqvfw//8ArfsBrub//Pv+/vICp/cBrPMAr//5/vcDpf8KpekGqd0Bqv/y//oNp90BqfsFq+ALpOABp/L8//v//+jy/ /L0//8LptgCrez/9vYBsO4BoOL///YGpfYPoPYBm+YBofEAnuoBleEBruEAsuoHpfrl//8CrdsBousHquMNot0EjdoNnNn0+/8BnPUMpO7/++0Qo+cBm9wYoOA+tNAFltAAovf5/u/A7/8CrvL//+4Amu2 c1OMCldcBn8gBnvwAlehxvcoBotoFqtICntL/9P3T9fAAtP8BlvFmvszd//sBs/QJpPIUnu0CseQAtPm+6fCj1uZLq9PR+/z+9u0BpuGx8/ 3s+vvS8vu89Pem5fcFjPRz0eoaoNgElMLa+Psfsu+y5OgEkcwQnv8Bl/zi+frG7/lHxu+J1OgAtuH//Nx1ytg6sNgDh8O68P7G+/uy6PKV2vA+t+kDsdf++OUjmd8AuOwtuOJkxdotodX 6+P3p//eB3fde1+1ixe2k8Pem2fAVl+cZruRavdxwu9oGq8dMu+tc0uAiltXQ6vdMxtxAu9xSt9UboM6+/P4AvPn/7/Vxv+cQn76W5/p/ye2P5ecPlN4XrNen1dUnq8z /7/4Gi+gpqtw9n9Auqeuz0OdfteRHt8UDhbSj3+iLxuM7nuEiutFarLnt7/oTpfO+19mJucYelsEHnq0amPXp+udfoOd54OHN7N0Eus+u9+/N2PGexO8omu4fxL8ZpaEAzOwL7fbjAAAAJHRSTlMAzs j+hQSzWf6dcCf8fVE4n/36vRP149vMupcJBOnihEkHl8Lv/rxjAAAdpElEQVR42ryWW2jTUBiAq9bpNqfzfr8np0nXiRwSKJRAqCGDtjYpSdeXjo4uXTtZb3RMWaHU1aHiRMV5YWq9TlGmIAw3mI o3vlt zfmZ52bilC+blFZg4o+vqgJJOOl0OWTBAiAGAWYyasKhjMQAFrt3hTKaVgatdMybmmX5S+flYuoJ iGVnmPB7S42EoBIFrgkBD7YwHwXA852G5ivrY+fJJun8zds6ETG1dpFEURa8kea0EYU6ZEQRAYMQw wACCMOcg7BYJRUNBG611tZkJc8b+8/Nnx8IdPsldFXK7RTQmYkEYjVYjXaEJGg01WhARFEx0uyNVbqmmoz42e9I/dn++yLucdJ/ PoS4dAo9YVUwmwaAJAWWjVQW32yk7RbEOXx/tdMni/Il/y/450zf2pzg/qKRkjkXwvJnGMIgCNRlwTaCBBgMEGG3meRbByVQl8Msd/Znpc+YO2f6FcbY5Lp5qoJxNJkGgaQzHGY5iGJv f7yerqiqHTVUViYbaGIbi7DiOQVoQTE1OquGUGG9m4wsHJ0LZIchAmsZxsgLQKIUg+njyB5hGyB+o0QBaClBB4jgNSQYeKhu0/9NZgsYIkgQAx1ASDwJoAhsEiosDQJIEAe389D/yoHRKRiCxEYQUMlNKf0uA2R v7o4IZGzHM4Wj/xtm/0kAfkzvc9AguAUm7t9pi+p8FaHLAxZ3CR1IAP8W5ApN/FKTiTIfT34AD bMQAeIPf2ZEp1unU23HcmFofTVLEsE7WzydtBgRF0jW1Y8blTsCMYF11X6XTgxcy/5+HU6sA7n FW9kl1sRnqSSjpClhFH9VkKCR3JFEF3VVR9NTY2OiVoCYFQxPlc1vru0rUHdjMbAg5ZBNNFCCASu FCiBf5qL9Jm02G2f7fscwqM9BT9qSAAgsEmDbisfqps1MeJAAT4O8+QcBZs21m2qDI0mmalNzcz PUtAeAZlnRyyVmTtON++C0eUUkAPOtGpoKWnDUInV2dkZC7k6jkYaoaU0BOHwBSPOU65x5fqS sa4ZEmi+PzSkMBJl9qrhusVJRyuDwSSsos3E0hCAzwlSbILVQJ9i4Pzein+v6ce3dMoRcOKElwdXXPtbHd3d29376s1A8GgUh8mzIAgQK4sqD9EwQJeztGiRwLtOQH872UPRYQ4MrCTitJmPntj7 ZVsz+5NOY7szp65cX9rfVvAbEaGqH8BOISAKcgA5ynvd4HiVpYyRlDbSA6Z3RKhDUQqRdneN9fWtmzovfhw98M9Zy5eur5L5fXlgxev9GzZvef6g9agUlOT9ISMqxyPGh5U2wsoaWrLa6TY1m JdUdzAoBfIkUPLFbRsD0WaZAff2Xr +ZM+W7M77N+Obk55wOsCvW5dIJJKdL94833HhxJne1tWWdjnqxbayNc9MTAECHIzgFEO3FiEBwJgtVmyoALDJqe2N3jXNSrD3Yja79n48EQgfOJ5QVsfSfFJZHQwkk+mgUnv6ZLbnya24 mKozfZ58p66dFcgCBDCrxcwY4kW6qVHImI1WMEGAgIb+ijq/L3T45ZcT2bs3b24MJ9LpT1977z1+2226dfDx9d6ubWklEYDrvbf29+x/89HSHh//oMLF0FiBAiSMTtWNRgIpJGAbmgONGwi XKxC9fST75sPAgQNt6z/fPblj35G9K5Y9nLxz+fKVe/ftP3nuXWbgQCIRv3/0xNO+zetkX2hNIb0daQNIwAOrkUA1Zv/GiZ19NXHFcQDv8tIHX9qn/gGEJATvzBDIZCaTjTAkg1kkgiGJhAQhIAF KQcAlLLI0rAJFWhYREMsWIWxio1QsLijFrZXaVi1udSvWU1tta9dLkdba5YR+z0lOZuaemU9+d+ 7cmYEVYEPAMxG+efzgQPnd0+7J6W6rvfCr/f2VBAZsRo8XGfn6Bsj2em0Ak+65fWaquv14+fT206 0fBIVH6qajxb4A2KEBnGD/tS8sAkID/wHAStEGPBgk7t+17ohKuPReCwEABhCb0WhBjq55C1X NWkgEwKCNg1+WJ5aUvnj58PuvVwenirg+AOLZgRDg9xTg77NKyHlDxmX54IPmkurVe/NijE24m UaB2UHzkaPpY7SZjygkKEpk4tlMY8dUWu/WW/P32i5Zs3gsXwAb/wQIgyFgYwr3qVmHZ4gV8bTTDx7PPSz/ 9ECVH11SCM9qwumdfebumgb5la9clmooidxlnviplw0bynd2uza8E0XL6KF22UQXGQUFF4TC/WCKBAWM5CG4EPDQWhahe6jjw+VYK8OL2OL69DFJZ0+/8T3O3F BilcudForskbQOQQBWLDZKBMJ3VXIZMAIVKO1HJAOEMTSCQPDJPS0RUBTHDQ4OSLKZRSPH/MFUZTBF8IRSGJFE55+ 3P+LQFWBMZHQEBWGYBNGOJCZJ3qztieagaihahwakqku7aaaaaqb3zg9L5P+/BuleMynj6q87S3CF8v4kdksxnw1u/ 2FBOJJYAHWBMGWML8CUBRDAZQKCZSNT5CG78yWQNTZV+SHV936DCOCCB6/JWDRHWBDVXJ95MCFX/EUU17RPDSK5IXEJ7EAV6LUVAYQ+CSAMLQKSDKYPML2 DTAZXCM5RZFSYUKNT/7WGHPHPH0L8DVI4AWP8EGEMOTOKSG5X42H6+7GWFGUCZOAYZWEAG6UBAP4ACG6ZI2AK38X66668VQE1FTYPRI8P breqm8vfkvkadx9gx/ttuggj+DQC8AKCPTVWPTBXQZAVJZ7I0XFOGO9YQYMGO4FWPAPZEKFNA8TRW+W9+ 9+RGOZFTVNS4O779BDVNVNVKEBT4FWBGXCM6ZKD5P1LRIXUQOQOQ0HhesSSOYPIRAOV9RCXZWDDDGODFCLLU1WTDDUTETBKL6HRKBZ1ulrropto9ntojrjrjrjrjrjrjRJ BEKMVBE9H0ZM4UHNDVH0BEYDRVVEHMJWRQD6bjb58lz0Vwry8rs9WD0ZHNFL7UVKR3W1/FGOCSLTSWXBW6UR // qwi4+ TCC/JIJNSKAO5AWGDHBIK2DZCFRM1nrae+2WOF /qzAI0A7ErRXOvpWfK/dujxAfb1SxPIziMXHrUd2/rylZOo7Fd/ocbx/JTG1LCC2VhYWz3alu21ShQUHeQe2YSSjl1QgxN6iOGVq6ur4lNc2VCWdkMLLsvftEu26yh+37JCFLAugVIoggCsOTig/O tZpTZikVPxso+NIaURzOttPyOHVsTnWYzazQhCzAAAkY5LwwZ4pa35+9Op0g3atsirh2h4MR7Hb 1qju91o3ha1a3jAUwcBpgROc+8VHX2YkXGrE4J9liHO5VVxDHY+t023kqZPuULREoMHyTi0A9BB QOWUIC+cGpnPCQoPU4kNugCtQ+Qelrx/f1VHKWd5JGKILYUGA0N/V8ENxu30S0xASC5l5wlUVro3g5 QQGsoLVhdtstASXUk8DEiO1KbpQVlxIsDrxeiuwMGawL7e6enDkeNAyARv9/eJgJ9jHHdu39NaOFgg IumIOfVRcq42UcXXp0clxEYkNDJ1JSSn3h0sAx3huZImWF7pyg9AgyxiqAXiBkzSd7c0ab/wiicPhBvkOYNdxhbGigLSkjtELudV7MaNAYuZXgH0XXCmyWiG8Qx+oT7pOGPUSFazAEgCRdnTnbE3hBijjwsS 5w59KAcYYLdhYb4Ku5VhGGnzR7zuAZ4Dzc1xAQkLLo6JEVxvGxCAoggDp4C123Ab/ulUbBo qH2zCvQqEyY3m7lwBo44phmZglUrIiVt1a0QcQlYbRYI2byhOPVB6ywztb3wFcsTAuNlZX+ k7je1lZX+5E+AoEowkplnluOFlZ1xNZ5Rq+g2o8JILQ4HeAEwIUeqzhpaL8HbWrwtQZX7sxFR8lcLkZ3V5eOLXz48SgIA7XDw4tXwHwJio06UjlNW3aTAw6MaFR0YSEBHsm123JuFJaOvU+imi 8JJ+fuTgMcamCj +gp0DJe7nLlJiXtbwGUAEFpXE5gl9elhbqP2eHjO9y5v4/nQOwG3vq6+gs3jpZHBbVhcr3JhihgJoC0oePEiZN3WgFOolKyYmKCGjl+A1OQcDOCqDDguD147szM/XtgoT2iEFAocK8Jb37 U8GG+zJUq7qkL4PoMiEi+4O7PKPnmNIUrSI1JDmMyOSlUSkupAq/HY6KNRtrpaVm3TWoyOuV6ubOpqUkFZwSCphjYdKG9APYSsb+k9I2+IXH466mreuqUfr4DVn/eeKS69/pOBpYadzILcWbjfAw104 cP650FNq8XdXpGdl/GCrxGW4ym4Ntv4WFRGMbJLEYjQUjwcW/7w75zaerA1GAtV7mMCrjOuvdHJX6gNwoy4X6epGKOr5DSBE1LSMRiUeDMyIEbGGXBMdgDkKWXTExMVJBL0ddosm39WSVfuU/aowJTZV rhMgBRq8+4x2WcSafHSejRzMXQExaLAKcolQLJJBQSx2HQohsz05kSgqAlC+cBwoeRZEoWm8v1GqPxs+bw/JZtCVvXQkBssj / Yio fH1e+c3Xzz5uant/+xMH9z6O35zbFR9iVAjm+A3zg196cmriiO/8Av/aF/RkhCK/sgJCFhkyUkCyRkEUIohJiXBlEDkgZCFJBABIQUBEFUFAQMICJUREGtgijSQrH4FqUWbdXasWOl73b6mJ6NBnVQB3oG ZpbZsHzYe+6953y/N48VyiQhvIGEwqn5ionJ+YrtgZjcvhAVFcMV85fUl4crKirgp9fEfMUkfJkSSoaWDwBJCACFGbcQsraWRPTk89A/C7iAHpAikWP140wvQuqx5wGfCVxhCDSK+j2dNSWtjebC5Q6 BiknCVNcQoaRsMjEvEGgg4lCjWG7UHX78AIkzimH+iXmLgtA4xMTh5FxrK5OE65achGyTH+Di9EiGp4+pboVGYSCIZyG3KOVOp77oyJaRB3iR0wlbs0C4OHBek7sxJ3ft4LgVAJY8DVl+gL2XWu4Xl rS7jzgRlA7MbU0gZDKRUmlLh72AWQeKKJGGZm6//J0uS0MB4DtzIedYqVWVzyxEywDQplxumVLlTsl0AgyVUvrnIV0IR5xclO7et2kXRtK0wyGVv7gTuMCgn8Xbczd0MkvxB0tfitksPwBsRhll9z ssBDxoIXgvwuuFWnnLJw8QnljMe21gIKYgvYcKL9fuzlZ/kBXv34yWPAvWzTT2ZZbVb0Fw7AUAL0AhFkMSSot0xwBADOkoh1uB+ wtBix1Y85lD1v6ekRAA8G /HSWDOMCM9UFBWPG4AOEF4A9ZGSRLZA624HQY1SPRJGWQMB2SUSE9RNCSOAEA+AiyaFXQ55NDJ0NUOR6ADIGFGYQUJC4X7MB+ 3GI9/WG6FLGU6MIX1LI34FDGA2VD0HKTULS2RLEUD/UGWINZ+WKKF3MQL+QZJMMX60GF/FDLLQSQSQSDPCOZML3FW9UFWFD+ 4JA/RGA+EUQDBCIG3MF1SXM18FVBHHHHHHICORUYUS87ZVHNVCUSGJF6DIBONBYFD95wlytucokuhwbm+VR9SMXSGJYZW1CIFEVGXAMJBHWDYQH2S+L2+MQS+MQS IWKNXPWA57C/LD2RZL9WE+9UBNQF8FM+72+71uqceci9ix7zhn2L9Q11MKMQHX3CO14MOOPGLN4AJ10ygtarwjslRTVM9KBFQAI8LVBCT/OOZXPSL6CPWOMJID AWX3RHVLHVXT/VTPEKBUJSMHCBTRZIHHHKOS606OJSHEAQMGAND8YAWRXQTJBMER4GX4MT9BITPB7SPQJTZFMY5NODFY/TMLLF4WZEKYVBK9kmp3Meg/ K24JI6EA3XM6UBWBGQ3KCQFQFQ3SDHRNI4IUGDUGDUBSZ8QK+GZIJRA+/TMRICSFYA6EBBE7DL+7YN8// +Rihodxu28PMhKTIrKyN0eAbR7lKQaAQwm74iX8IAOCjrxNTQt9bmb8xsb47qeabFlypQZ6cyP7w/vExl+F/ARhMZs+tQZ85+zyRphe4mx+WKwzRYWGMeMDSZvYBgED2MsBnkbGhYRx+cOimvO qMkWnIXXy2POFg+/6r2RIu1y9Aw4MXPLjnANzXA3A40KGb8s1Ttm8PJiU/xdEmJzlWXlwZmqCKMJkiJAklswyABlqzwBA0d4Zx2eAjx9dVrrue+nUHcQP55euyQynH233c1fAf+f/wyyY kMPDfkITA5/+FGEXQ0z8rE9p2yxBjE3LOs7ahIX8FnxUCVtn93wnZM5EqMAuwh/a6neFr6vNXzSSrN/RqnELkZolh4NytmY/VeZWJsaB95W/KU0fFc8HzTQmNYYGOr5Dwo1+3EnKee1VadcG7tef LD93rR4gmrOOxqy4yJTpEkrojzz5mQdP9Mp0fgMBgFgwOZF2P2vBzfuKB4tx7rWk6Yrwtwb cdfI6qmsiTscx5sujkaEU8N5g5mReh5kbzJVoFf0XsYoAFuf694p2em81zf0gGuhBnEdJa5V JUV6vVO/mP5q4hPFr8CgBODT/Kqk5KUFertQPzRBEx/UXo3qAO5EnjlSBX3c7C7jU7DKcbDuTAiTyJKiEmcm90WLxCsjL6LQDsk6s2qMunf//3uvXHP /Emi348qIodHqPKHHh3P0mAUPkqAKxUjw6 WFGqjCu3zRTr3njM1WTPjiBdHsMHeersVDuYVR0WuSo4OSdUmJGUU5Kxkh8SHcPhvBmCHnL7ziVZ9NH3eXO2aa8FhUBsvXb364aaR /G6EYLTIVWFGRZZ95P0VVTJUOAQ8RNNZWT9/FCENDFEMGJ65TWTJ2PJU1EBISMVKTXQDPTEB3YQN5JPEZTCZ44XXF1RVZLABD+8H29KXXWFDE0C5CHAJM// IOAGOT5CNYZ3DXV2JYMC9F21PS5RKJRS6O/OJ00JON+I99V9XYAELKS7FFFFFBO8BKFFFFGRG8O4BWYIZNH OH1RO5VBZJ/AGXRTRMVTLRALZGKE3TDEHFNA2C0L3PM4YNNPZCZJNIYWMAIYWBAKJ/4XTKPQGO+Y7qqge1/C4FQE4FQQQZEJKOXQAE7I/XGCIWM9YY+9We 9We 3CHHOSYGUFOMNHPBYDT3Q+92 ++ 2H4ZYSIYCZ1CWJQ9ik2MiazbpyTKPC0R2+LL9T+UMP5WHN9DQGuhyrsumetmcaqq/i9fVQkDwDkNHwcvTQrCBdI2tjPJtbEMHoKO/uXUrkdYikZ5kGV2ghEAjmETgA1FVWhsQsACyy7dhcOHwbH7py9fWsf59iY9brewcePsERSkMTaBotRElNUZOFse3iGN8Uj6ObnErSJkKabnv2Zg9s7 rAc0aWnG2/cAAmLpuWo2GixFJ1yKgkcqosmAT68LWlN/cbYiBB+wLZbbFxCmoa9zw3maLcN9O lv+06a2h7P2hCe1xinkYlRCoxL9M9/v2IkMgSTi420wGgk6O921ySZfcM88JYtuAU6egGINRb0 LHxIDlYjbSHAd5IjyKVKbXc3tyE2YFy+zboN3lBSdVH04J1t1YXmM602oUBIUShPatN70QurSkUOFKpWHBGRMAyDE2ZVlOedXVRj37lzt8eP14owXOkkUBgbCkPvelFgZVpMDBmuVHSvMcQGB6zbt5 nXf IU6x pHO7qoXDQgp3IFsgBsNHdBNXze/+ZNW2ZHxZ8NtvR+tieGmHOySizerbOTQzaUK9XoAMxT+SAuUDKaItQDAAGiWE9P2/Bvn/zAQZWxH/N21uIElEYwHGIIgqCeo8eYpw82nXIMmxKwrS0Wg3NFy3LHE2cCt xy03KtVVRM1lt02+2+mV0Wo9tmFG3FGlZ0ZdOI6ELRFvRSD0EFfTNGVGZNWdanIANyHOGAB/z9e3ru3JkYSF/ Feel7yhjmdm0ovdy7FV+OSNU07COET2LRI+W/0NVK0ZK2ZQKJS5H23RRRRFLGDPZPZY C8JFNKY0OFWT5CACACFT0TFQEPL9PKBP/UXMP4D1P65ceffkknev0upsfuj+93F7UFUDDACJLYDVGBP5XKZGR5CK8V/TDBOHN69LMZM5SNWU7Y/IIIIIIGSNKAGE QWCGBAHHHVCSCE6MNR68V3OYSMUDTHL+1+RNHBAMZCMFZSKDOXJTO9NSBDAVNH4VFD3EFS/ Z4O61TZC4JFHWQS1XGGGYPD/DUJVVCQW+SLN4QVN2HTPXHK2EMEJ9LI8XEcyhe1ll+1UW/NLTZNPDXKT6ZT0BBEGMJ9OH5D3F9M8VHM2P7F 2otejdcndpdvpsn4vhpqnaczzgqfzgkhnissuv88euxheiptbVED3P3RTKQOFBTLFB3ZBLBLBWEQOPY3DSKU13AFRQZQZQZQZITV2JN4XVRRRRR nyxSyln1wu7czvvxcueshejsqdmuiatiWLK1AhxiheqnwjasfhxCynl1OTM55LJ5XEPLVZ7NQ3HXG+6W0ZBAEHNABITGCMZC4IHEJJ+Clhtqf+0RVO+0rvo Sgaefkmdmnh2tll2uju/2PMHTGZGGGYVSKUUSJ2UVQYND05PMD+Durxcyj8zvyv4XB/7ydaxfcq5v8kkgj4EP+Whtfwpmm24hxkawfoh/Geisdnaob5/ f6M3+NxZvx+LahOPsbJ88EtVOF8XEEjQgAqiYYEM+Z4Y/zVq0TiVSP8onDwjAjhwOy+Axr9ABqBdJIGtVT6U9KJE4iUhEDyqnXJpM2WtKmDDkdXF6uLf64h4fHVNdyATq1nSOeAQQEZ F9QKA9tKkWRai2WfRqFIJjH0m6h1os4w0Td0AMt64QY4sV6e0Gz/dmpgvUGpdQgLm1UOjrAZQ/G4EOEiGMhQCCQUxuMI+23Y3KUKDGRpNzVDx5F28xQwNmZ0OpuNuahCBLjRbl/HYBa3r zSPLuP2ug2L2xewuP0XeT/6drCaef/wfxs4gC0fziYeynonHsovEg+IXJSx+kYuEl1Mu7L/15kPXc/Mp6GJyXz+n9CJSb3kKoJfv9SLD6lXZeyG6hS7ARjH9wz533I/JnhsOZPSxv968Cj znglD8Pj95FP7V5JPOPLCfE4+5ZB8/pvo1QbR6yI2euWY/QpUYpgas1/mSsCsZqjIfquEz1aqHD4r9aQUNqGqxvBZT8JqeqVWS8qlQsoK4TP39FveAAwHry39hicCIqmpSL+5xu8r/kz8ni7H7y NHVOz++ub /wyvz/49yHLNaugaoEAAAAABJRU5ErkJggg==ElEYwHGIIgqCeo8eYpw82nXIMmxKwrS0Wg3NFy3LHE2cCtxy03KtVVRM1lt02+2+mV0Wo9tmFG3FGlZ0ZdOI6ELRFvRSD0EFfTNGVGZNWdanIANyHOGAB/z9e3ru3JkYSF/fEel7YHJmdm0ovDy7fv+ OSNu07cOeT2lri+w/0nvK0ZK2ZqKJs5H23rRLrrFLHLgdpFzYfe3pzoNjJ2w9vWrt+fnjZi1ubl4Fm2X81bAXW7ZMlGABA0ms6FedcGC8JfNky0OFwt5cacft0tFQEPl9pkBP/uXmp4d1p65cef FkNeV0UpSFuJ+93f7ufUDdacjlyDvGBp5xkZGw7Gr5cK8V/tdbOHn69Lmzm5snwU7Y/iiiIiGSnKAG EQwCGBAhHVcSCE6mNr68V3oYSmUDThUvHL+1+RNHBaMZCmFZSKdoXjTo9nsBDavnh4vFD3efS/jlj QoY9TbKN4m0SnlilV2qShZajJ9vHwzaZOXfy1AlgDU7mXMZ4o61TZC4jFhwQS1XGgyPd/dUJvVcqW+SlN4Qvn2htPXHk2eMej9Li8xECyhe1LL+1uW/nltZNpdxKT6zT0bBEGothOVGMj9 OjkERiPuC0uh5d3f9m8Vhm2p7f2OteJDcndPDvPsN4VHpQNACZZGQFZGKHNISSUv88eUxhE iPTBveD3p3rtkQOFbtLfb3ZbLbUXbwEqOpY32O3dSku13aFRtnlqZQoJ/JiQtABEkXitV2jN 4XvrrnYXSyeLN1wu7cZvXCuEShEjSQDmUiATIwlk1ahXIhEQNwJAsFhXcynl1otM55lj5xo37 ePlVz7Nq3P3hxG+6w0ZBAEHNuZ4xaBiTGcMZc4IHEjj+CLhTQF+0RvoSgaefkMDMNh2TLl2uju /2PMhtgzGgYvsKAKUUsJ2uVqynd05PMd+ dUrXCYJj8ZVYv4Xb /7yDAxfCq5V8Kkg0gj4Ep+WhTfwPmM24HxKAwfOh/gEISDnaOb5/f6M3+NxZvx+LahOPsbJ88EtVOF8XEEjQgAqiYYEM+Z4Y/zVq0TiVSP8onDwjAjhwOy+Axr9ABqBdJIGtVT6U9KJE 4iUhEDyqnXJpM2WtKmDDkdXF6uLf64h4fHVNdyATq1nSOeAQQEZF9QKA9tKkWRai2WfRqFI JjH0m6h1os4w0Td0AMt64QY4sV6e0Gz/dmpgvUGpdQgLm1UOjrAZQ/G4EOEiGMhQCCQUxuMI +23Y3KUKDGRpNzVDx5F28xQwNmZ0OpuNuahCBLjRbl/HYBa3rzSPLuP2ug2L2xewuP0XeT/6drCaef/wfxs4gC0fziYeynonHsovEg+IXJSx+kYuEl1Mu7L/15kPXc/Mp6GJyXz+n9CJSb3kKo Jfv9SLD6lXZeyG6hS7ARjH9wz533I/JnhsOZPSxv968CjznglD8Pj95FP7V5JPOPLCfE4+5ZB8/pvo1QbR6yI2euWY/QpUYpgas1/ mSsCsZqjIfquEz1aqHD4r9aQUNqGqxvBZT8JqeqV WS8qlQsoK4TP39FveAAwHry39hicCIqmpSL +5xu8r/kz8ni7H7yNHVOz++ub/wyvz/49yHLNaugaoEAAAAABJRU5ErkJggg==ElEYwHGIIgqCeo8eYpw82nXIMmxKwrS0Wg3NFy3LHE2cCtxy03KtVVRM1lt02+2+mV0Wo9tmFG3FGlZ0ZdOI6ELRFvRSD0EFfTNGVGZNWdanIANyHOGAB/z9e3ru3JkYSF/fEel7YHJmdm0ovDy7fv+ OSNu07cOeT2lri+w/0nvK0ZK2ZqKJs5H23rRLrrFLHLgdpFzYfe3pzoNjJ2w9vWrt+fnjZi1ubl4Fm2X81bAXW7ZMlGABA0ms6FedcGC8JfNky0OFwt5cacft0tFQEPl9pkBP/uXmp4d1p65cef FkNeV0UpSFuJ+93f7ufUDdacjlyDvGBp5xkZGw7Gr5cK8V/tdbOHn69Lmzm5snwU7Y/iiiIiGSnKAG EQwCGBAhHVcSCE6mNr68V3oYSmUDThUvHL+1+RNHBaMZCmFZSKdoXjTo9nsBDavnh4vFD3efS/jlj QoY9TbKN4m0SnlilV2qShZajJ9vHwzaZOXfy1AlgDU7mXMZ4o61TZC4jFhwQS1XGgyPd/dUJvVcqW+SlN4Qvn2htPXHk2eMej9Li8xECyhe1LL+1uW/nltZNpdxKT6zT0bBEGothOVGMj9 OjkERiPuC0uh5d3f9m8Vhm2p7f2OteJDcndPDvPsN4VHpQNACZZGQFZGKHNISSUv88eUxhE iPTBveD3p3rtkQOFbtLfb3ZbLbUXbwEqOpY32O3dSku13aFRtnlqZQoJ/JiQtABEkXitV2jN 4XvrrnYXSyeLN1wu7cZvXCuEShEjSQDmUiATIwlk1ahXIhEQNwJAsFhXcynl1otM55lj5xo37 ePlVz7Nq3P3hxG+6w0ZBAEHNuZ4xaBiTGcMZc4IHEjj+CLhTQF+0RvoSgaefkMDMNh2TLl2uju /2PMhtgzGgYvsKAKUUsJ2uVqynd05PMd+ dUrXCYJj8ZVYv4Xb /7yDAxfCq5V8Kkg0gj4Ep+WhTfwPmM24HxKAwfOh/gEISDnaOb5/f6M3+NxZvx+LahOPsbJ88EtVOF8XEEjQgAqiYYEM+Z4Y/zVq0TiVSP8onDwjAjhwOy+Axr9ABqBdJIGtVT6U9KJE 4iUhEDyqnXJpM2WtKmDDkdXF6uLf64h4fHVNdyATq1nSOeAQQEZF9QKA9tKkWRai2WfRqFI JjH0m6h1os4w0Td0AMt64QY4sV6e0Gz/dmpgvUGpdQgLm1UOjrAZQ/G4EOEiGMhQCCQUxuMI +23Y3KUKDGRpNzVDx5F28xQwNmZ0OpuNuahCBLjRbl/HYBa3rzSPLuP2ug2L2xewuP0XeT/6drCaef/wfxs4gC0fziYeynonHsovEg+IXJSx+kYuEl1Mu7L/15kPXc/Mp6GJyXz+n9CJSb3kKo Jfv9SLD6lXZeyG6hS7ARjH9wz533I/JnhsOZPSxv968CjznglD8Pj95FP7V5JPOPLCfE4+5ZB8/pvo1QbR6yI2euWY/QpUYpgas1/ mSsCsZqjIfquEz1aqHD4r9aQUNqGqxvBZT8JqeqV WS8qlQsoK4TP39FveAAwHry39hicCIqmpSL +5xu8r/kz8ni7H7yNHVOz++ub/wyvz/49yHLNaugaoEAAAAABJRU5ErkJggg==xv968CjznglD8Pj95FP7V5JPOPLCfE4+5ZB8/pvo1QbR6yI2euWY/QpUYpgas1/mSsCsZqjIfquEz1aqHD4r9aQUNqGqxvBZT8JqeqVWS8qlQsoK4TP39FveAAwHry39hicCIqmpSL+5xu8r/k z8ni7H7yNHVOz++ub/wyvz/49yHLNaugaoEAAAAABJRU5ErkJggg==xv968CjznglD8Pj95FP7V5JPOPLCfE4+5ZB8/pvo1QbR6yI2euWY/QpUYpgas1/mSsCsZqjIfquEz1aqHD4r9aQUNqGqxvBZT8JqeqVWS8qlQsoK4TP39FveAAwHry39hicCIqmpSL+5xu8r/k z8ni7H7yNHVOz++ub/wyvz/49yHLNaugaoEAAAAABJRU5ErkJggg==
// @match *://*/*
// @exclude *://yiyan.baidu.com/*
// @exclude *://*.bing.com/search*
// @grant unsafeWindow
// @grant GM_addStyle
// @grant GM_setValue
// @grant GM_getValue
// @grant GM_deleteValue
// @grant GM_listValues
// @grant GM_addValueChangeListener
// @grant GM_removeValueChangeListener
// @grant GM_registerMenuCommand
// @grant GM_unregisterMenuCommand
// @grant GM_getTab
// @grant GM_saveTab
// @grant GM_getTabs
// @grant GM_openInTab
// @grant GM_setClipboard
// @run-at document-start
// @antifeature ads
// @license GPL
// ==/UserScript==
(function (w) { if (w) { w.name = 'h5player'; } })();

/* Save important original functions to prevent contamination by external scripts */
const originalMethods = {
  Object: {
    defineProperty: Object.defineProperty,
    defineProperties: Object.defineProperties
  },
  setInterval: window.setInterval,
  setTimeout: window.setTimeout,

  HTMLElement: window.HTMLElement,
  customElements: window.customElements,
  customElementsMethods: {
    define: window.customElements.define,
    get: window.customElements.get
  }
};

/**
 *Element listener
 * @param selector - required
 * @param fn - required, callback when the element exists
 * @param shadowRoot - optionally specifies to monitor the DOM element under a certain shadowRoot
 * Reference: https://javascript.ruanyifeng.com/dom/mutationobserver.html
 */
function ready (selector, fn, shadowRoot) {
  const win = window;
  const docRoot = shadowRoot || win.document.documentElement;
  if (!docRoot) return false
  const MutationObserver = win.MutationObserver || win.WebKitMutationObserver;
  const listeners = docRoot._MutationListeners || [];

  function $ready (selector, fn) {
    //Storage selector and callback function
    listeners.push({
      selector: selector,
      fn: fn
    });

    /* Add listening objects*/
    if (!docRoot._MutationListeners || !docRoot._MutationObserver) {
      docRoot._MutationListeners = listeners;
      docRoot._MutationObserver = new MutationObserver(() => {
        for (let i = 0; i < docRoot._MutationListeners.length; i++) {
          const item = docRoot._MutationListeners[i];
          check(item.selector, item.fn);
        }
      });

      docRoot._MutationObserver.observe(docRoot, {
        childList: true,
        subtree: true
      });
    }

    // Check if the node is already in the DOM
    check(selector, fn);
  }

  function check (selector, fn) {
    const elements = docRoot.querySelectorAll(selector);
    for (let i = 0; i < elements.length; i++) {
      const element = elements[i];
      element._MutationReadyList_ = element._MutationReadyList_ || [];
      if (!element._MutationReadyList_.includes(fn)) {
        element._MutationReadyList_.push(fn);
        fn.call(element, element);
      }
    }
  }

  const selectorArr = Array.isArray(selector) ? selector : [selector];
  selectorArr.forEach(selector => $ready(selector, fn));
}

/**
 * Some web pages use attachShadow closed mode and need to be open to obtain the video tag, such as Baidu Cloud Disk
 * Solution reference:
 * https://developers.google.com/web/fundamentals/web-components/shadowdom?hl=zh-cn#closed
 * https://stackoverflow.com/questions/54954383/override-element-prototype-attachshadow-using-chrome-extension
 */
function hackAttachShadow () {
  if (window._hasHackAttachShadow_) return
  try {
    window._shadowDomList_ = [];
    window.Element.prototype._attachShadow = window.Element.prototype.attachShadow;
    window.Element.prototype.attachShadow = function () {
      const arg = arguments;
      if (arg[0] && arg[0].mode) {
        // Force open mode
        arg[0].mode = 'open';
      }
      const shadowRoot = this._attachShadow.apply(this, arg);
      //Save a copy of shadowDomList
      window._shadowDomList_.push(shadowRoot);

      /* Allow elements in shadowRoot to have the opportunity to access shadowHost */
      shadowRoot._shadowHost = this;

      //Add addShadowRoot custom event under document
      const shadowEvent = new window.CustomEvent('addShadowRoot', {
        shadowRoot,
        detail: {
          shadowRoot,
          message: 'addShadowRoot',
          time: new Date()
        },
        bubbles: true,
        cancelable: true
      });
      document.dispatchEvent(shadowEvent);

      return shadowRoot
    };
    window._hasHackAttachShadow_ = true;
  } catch (e) {
    console.error('hackAttachShadow error by h5player plug-in', e);
  }
}

/*!
 * @name original.js
 * @description Store some important native functions to prevent external contamination. This logic should be brought forward as much as possible, otherwise the contaminated functions will be stored.
 * @version 0.0.1
 * @author xxxily
 * @date 2022/10/16 10:32
 * @github https://github.com/xxxily
 */

const original = {
  // Prevent defineProperty and defineProperties from being overwritten by AOP scripts
  Object: {
    defineProperty: Object.defineProperty,
    defineProperties: Object.defineProperties
  },

  // Prevent this kind of gameplay: https://juejin.cn/post/6865910564817010702
  Proxy,

  Map,
  map: {
    clear: Map.prototype.clear,
    set: Map.prototype.set,
    has: Map.prototype.has,
    get: Map.prototype.get,
    delete: Map.prototype.delete
  },

  console: {
    log: console.log,
    info: console.info,
    error: console.error,
    warn: console.warn,
    table: console.table
  },

  ShadowRoot,
  HTMLMediaElement,
  CustomEvent,
  // appendChild: Node.prototype.appendChild,

  JSON: {
    parse: JSON.parse,
    stringify: JSON.stringify
  },

  alert,
  confirm,
  prompt
};

/**
 * Media tag detection can detect viode, audio, and other media Elements whose tag names have been modified
 * @param {Function} handler - required callback function to be executed after checkout
 * @returns mediaElementList
 */
const mediaCore = (function () {
  let hasMediaCoreInit = false;
  let hasProxyHTMLMediaElement = false;
  let originDescriptors = {};
  const originMethods = {};
  const mediaElementList = [];
  const mediaElementHandler = [];
  const mediaMap = new original.Map();

  const firstUpperCase = str => str.replace(/^\S/, s => s.toUpperCase());
  function isHTMLMediaElement (el) {
    return el instanceof original.HTMLMediaElement
  }

  /**
   * Create related API functions for enhanced control based on the instance object of HTMLMediaElement, thereby realizing enhanced functions such as locking playback double speed, locking pause and playback, etc.
   * @param {*} mediaElement - required, a specific instance of HTMLMediaElement, such as the video tag or new Audio() on the web page, etc.
   * @returns mediaPlusApi
   */
  function createMediaPlusApi (mediaElement) {
    if (!isHTMLMediaElement(mediaElement)) { return false }

    let mediaPlusApi = original.map.get.call(mediaMap, mediaElement);
    if (mediaPlusApi) {
      return mediaPlusApi
    }

    /* Create MediaPlusApi object */
    mediaPlusApi = {};
    const mediaPlusBaseApi = {
      /**
       * Create a lock to prevent external logic from operating mediaElement-related properties or functions
       * The lock logic here is just data status labeling and switching, the specific lock function needs to be in
       * Implemented in proxyPrototypeMethod and hijackPrototypeProperty
       */
      lock (keyName, duration) {
        const infoKey = `__${keyName}_info__`;
        mediaPlusApi[infoKey] = mediaPlusApi[infoKey] || {};
        mediaPlusApi[infoKey].lock = true;

        /*Unlock time information*/
        duration = Number(duration);
        if (!Number.isNaN(duration) && duration > 0) {
          mediaPlusApi[infoKey].unLockTime = Date.now() + duration;
        }

        // original.console.log(`[mediaPlusApi][lock][${keyName}] ${duration}`)
      },
      unLock (keyName) {
        const infoKey = `__${keyName}_info__`;
        mediaPlusApi[infoKey] = mediaPlusApi[infoKey] || {};
        mediaPlusApi[infoKey].lock = false;
        mediaPlusApi[infoKey].unLockTime = Date.now() - 100;

        // original.console.log(`[mediaPlusApi][unLock][${keyName}]`)
      },
      isLock (keyName) {
        const info = mediaPlusApi[`__${keyName}_info__`] || {};

        if (info.unLockTime) {
          /* The delay lock calculates whether it is still in the lock state based on the current time */
          return Date.now() < info.unLockTime
        } else {
          return info.lock || false
        }
      },

      /* Note: Calling get, set and apply here are not restricted by locks */
      get (keyName) {
        if (originDescriptors[keyName] && originDescriptors[keyName].get && !originMethods[keyName]) {
          return originDescriptors[keyName].get.apply(mediaElement)
        }
      },
      set (keyName, val) {
        if (originDescriptors[keyName] && originDescriptors[keyName].set && !originMethods[keyName] && typeof val !== 'undefined') {
          // original.console.log(`[mediaPlusApi][${keyName}] performs native set operation`)
          return originDescriptors[keyName].set.apply(mediaElement, [val])
        }
      },
      apply (keyName) {
        if (originMethods[keyName] instanceof Function) {
          const args = Array.from(arguments);
          args.shift();
          // original.console.log(`[mediaPlusApi][${keyName}] performs native apply operation`)
          return originMethods[keyName].apply(mediaElement, args)
        }
      }
    };

    mediaPlusApi = { ...mediaPlusApi, ...mediaPlusBaseApi };

    /**
     * Extended api list. Realize the pure API calling effect of 'playbackRate', 'volume', 'currentTime', 'play', 'pause'. The specific available APIs are as follows:
     * mediaPlusApi.lockPlaybackRate()
     * mediaPlusApi.unLockPlaybackRate()
     * mediaPlusApi.isLockPlaybackRate()
     * mediaPlusApi.getPlaybackRate()
     * mediaPlusApi.setPlaybackRate(val)
     *
     * mediaPlusApi.lockVolume()
     * mediaPlusApi.unLockVolume()
     * mediaPlusApi.isLockVolume()
     * mediaPlusApi.getVolume()
     * mediaPlusApi.setVolume(val)
     *
     * mediaPlusApi.lockCurrentTime()
     * mediaPlusApi.unLockCurrentTime()
     * mediaPlusApi.isLockCurrentTime()
     * mediaPlusApi.getCurrentTime()
     * mediaPlusApi.setCurrentTime(val)
     *
     * mediaPlusApi.lockPlay()
     * mediaPlusApi.unLockPlay()
     * mediaPlusApi.isLockPlay()
     * mediaPlusApi.applyPlay()
     *
     * mediaPlusApi.lockPause()
     * mediaPlusApi.unLockPause()
     * mediaPlusApi.isLockPause()
     * mediaPlusApi.applyPause()
     */
    const extApiKeys = ['playbackRate', 'volume', 'currentTime', 'play', 'pause'];
    const baseApiKeys = Object.keys(mediaPlusBaseApi);
    extApiKeys.forEach(key => {
      baseApiKeys.forEach(baseKey => {
        /* When the key corresponds to a function, there should be no get and set APIs, but the apply API */
        if (originMethods[key] instanceof Function) {
          if (baseKey === 'get' || baseKey === 'set') {
            return true
          }
        } else if (baseKey === 'apply') {
          return true
        }

        mediaPlusApi[`${baseKey}${firstUpperCase(key)}`] = function () {
          return mediaPlusBaseApi[baseKey].apply(null, [key, ...arguments])
        };
      });
    });

    original.map.set.call(mediaMap, mediaElement, mediaPlusApi);

    return mediaPlusApi
  }

  /* Detect the processing logic of the media object and rely on Proxy to proxy the media function*/
  function mediaDetectHandler (ctx) {
    if (isHTMLMediaElement(ctx) && !mediaElementList.includes(ctx)) {
      // console.log(`[mediaDetectHandler]`, ctx)
      mediaElementList.push(ctx);
      createMediaPlusApi(ctx);

      try {
        mediaElementHandler.forEach(handler => {
          (handler instanceof Function) && handler(ctx);
        });
      } catch (e) {}
    }
  }

  /* Agent methods play and pause methods to ensure correct pause and playback */
  function proxyPrototypeMethod (element, methodName) {
    const originFunc = element && element.prototype[methodName];
    if (!originFunc) return

    element.prototype[methodName] = new original.Proxy(originFunc, {
      apply (target, ctx, args) {
        mediaDetectHandler(ctx);
        // original.console.log(`[mediaElementMethodProxy] executes the ${methodName} function after proxy`)

        /* Enhance the playback pause logic, such as allowing locking through mediaPlusApi*/
        if (['play', 'pause'].includes(methodName)) {
          const mediaPlusApi = createMediaPlusApi(ctx);
          if (mediaPlusApi && mediaPlusApi.isLock(methodName)) {
            // original.console.log(`[mediaElementMethodProxy] ${methodName} has been locked and cannot perform related operations`)
            return
          }
        }

        const result = target.apply(ctx, args);

        // TODO observes and judges the function execution results

        return result
      }
    });

    // It is not recommended to extend the prototype chain of HTMLMediaElement, which will easily allow the web page to detect the existence of mediaCore enhanced logic.
    // if (originMethods[methodName]) {
    // element.prototype[`__${methodName}__`] = originMethods[methodName]
    // }
  }

  /**
   * Hijack playbackRate, volume, currentTime attributes, and add locking logic to achieve stronger anti-interference ability
   */
  function hijackPrototypeProperty (element, property) {
    if (!element || !element.prototype || !originDescriptors[property]) {
      return false
    }

    original.Object.defineProperty.call(Object, element.prototype, property, {
      configurable: true,
      enumerable: true,
      get: function () {
        const val = originDescriptors[property].get.apply(this, arguments);
        // original.console.log(`[mediaElementPropertyHijack][${property}][get]`, val)

        const mediaPlusApi = createMediaPlusApi(this);
        if (mediaPlusApi && mediaPlusApi.isLock(property)) {
          if (property === 'playbackRate') {
            return +!+[]
          }
        }

        return val
      },
      set: function (value) {
        // original.console.log(`[mediaElementPropertyHijack][${property}][set]`, value)

        if (property === 'src') {
          mediaDetectHandler(this);
        }

        /* Enhance speed adjustment, tuning and progress control logic, such as allowing locking through mediaPlusApi*/
        if (['playbackRate', 'volume', 'currentTime'].includes(property)) {
          const mediaPlusApi = createMediaPlusApi(this);
          if (mediaPlusApi && mediaPlusApi.isLock(property)) {
            // original.console.log(`[mediaElementPropertyHijack] ${property} has been locked and cannot perform related operations`)
            return
          }
        }

        return originDescriptors[property].set.apply(this, arguments)
      }
    });
  }

  function mediaPlus (mediaElement) {
    return createMediaPlusApi(mediaElement)
  }

  function mediaProxy () {
    if (!hasProxyHTMLMediaElement) {
      const proxyMethods = ['play', 'pause', 'load', 'addEventListener'];
      proxyMethods.forEach(methodName => { proxyPrototypeMethod(HTMLMediaElement, methodName); });

      const hijackProperty = ['playbackRate', 'volume', 'currentTime', 'src'];
      hijackProperty.forEach(property => { hijackPrototypeProperty(HTMLMediaElement, property); });

      hasProxyHTMLMediaElement = true;
    }

    return hasProxyHTMLMediaElement
  }

  /**
   * Media tag detection can detect viode, audio, and other media Elements whose tag names have been modified
   * @param {Function} handler - required callback function to be executed after checkout
   * @returns mediaElementList
   */
  function mediaChecker (handler) {
    if (!(handler instanceof Function) || mediaElementHandler.includes(handler)) {
      return mediaElementList
    } else {
      mediaElementHandler.push(handler);
    }

    if (!hasProxyHTMLMediaElement) {
      mediaProxy();
    }

    return mediaElementList
  }

  /**
   * Initialize mediaCore related functions
   */
  function init (mediaCheckerHandler) {
    if (hasMediaCoreInit) { return false }

    originDescriptors = Object.getOwnPropertyDescriptors(HTMLMediaElement.prototype);

    Object.keys(HTMLMediaElement.prototype).forEach(key => {
      try {
        if (HTMLMediaElement.prototype[key] instanceof Function) {
          originMethods[key] = HTMLMediaElement.prototype[key];
        }
      } catch (e) {}
    });

    mediaCheckerHandler = mediaCheckerHandler instanceof Function ? mediaCheckerHandler : function () {};
    mediaChecker(mediaCheckerHandler);

    hasMediaCoreInit = true;
    return true
  }

  return {
    init,
    mediaPlus,
    mediaChecker,
    originDescriptors,
    originMethods,
    mediaElementList
  }
})();

/*!
 * @name utils.js
 * @description Data type related methods
 * @version 0.0.1
 * @author Blaze
 * @date 22/03/2019 22:46
 * @github https://github.com/xxxily
 */

/**
 * To accurately obtain the specific type of the object, see: https://www.talkingcoder.com/article/6333557442705696719
 * @param obj { all } -Required object to be judged
 * @returns {*} Returns the specific type of judgment
 */
function getType (obj) {
  if (obj == null) {
    return String(obj)
  }
  return typeof obj === 'object' || typeof obj === 'function'
    ? (obj.constructor && obj.constructor.name && obj.constructor.name.toLowerCase()) ||
    /function\s(.+?)\(/.exec(obj.constructor)[1].toLowerCase()
    : typeof obj
}

const isType = (obj, typeName) => getType(obj) === typeName;
const isObj$1 = obj => isType(obj, 'object');

/*!
 * @name object.js
 * @description Related methods for object operations
 * @version 0.0.1
 * @author Blaze
 * @date 21/03/2019 23:10
 * @github https://github.com/xxxily
 */

/**
 * Make a deep copy of an object
 * @source - required (Object|Array) the object or array to be copied
 */
function clone (source) {
  var result = {};

  if (typeof source !== 'object') {
    return source
  }
  if (Object.prototype.toString.call(source) === '[object Array]') {
    result = [];
  }
  if (Object.prototype.toString.call(source) === '[object Null]') {
    result = null;
  }
  for (var key in source) {
    result[key] = (typeof source[key] === 'object') ? clone(source[key]) : source[key];
  }
  return result
}

/* Traverse the object, but do not include the properties on its prototype chain*/
function forIn (obj, fn) {
  fn = fn || function () {};
  for (var key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
      fn(key, obj[key]);
    }
  }
}

/**
 * Deeply merge two enumerable objects
 * @param objA {object} - required object A
 * @param objB {object} - required object B
 * @param concatArr {boolean} - Optional merging of arrays. By default, when an array is encountered, the current array is directly replaced with another array. If this is set to true, when an array is encountered, it will be merged instead of directly replaced.
 * @returns {*|void}
 */
function mergeObj (objA, objB, concatArr) {
  function isObj (obj) {
    return Object.prototype.toString.call(obj) === '[object Object]'
  }
  function isArr (arr) {
    return Object.prototype.toString.call(arr) === '[object Array]'
  }
  if (!isObj(objA) || !isObj(objB)) return objA
  function deepMerge (objA, objB) {
    forIn(objB, function (key) {
      const subItemA = objA[key];
      const subItemB = objB[key];
      if (typeof subItemA === 'undefined') {
        objA[key] = subItemB;
      } else {
        if (isObj(subItemA) && isObj(subItemB)) {
          /* Perform deep merge*/
          objA[key] = deepMerge(subItemA, subItemB);
        } else {
          if (concatArr && isArr(subItemA) && isArr(subItemB)) {
            objA[key] = subItemA.concat(subItemB);
          } else {
            objA[key] = subItemB;
          }
        }
      }
    });
    return objA
  }
  return deepMerge(objA, objB)
}

/**
 * Get the value in the object based on the text path. If you need to support arrays, please use the get method of lodash
 * @param obj {Object} - required object to be operated on
 * @param path {String} - required path information
 * @returns {*}
 */
function getValByPath$1 (obj, path) {
  path = path || '';
  const pathArr = path.split('.');
  let result = obj;

  /* Recursively extract the result value*/
  for (let i = 0; i < pathArr.length; i++) {
    if (!result) break
    result = result[pathArr[i]];
  }

  return result
}

/**
 * Set the value in the object based on the text path. If you need to support arrays, please use the set method of lodash.
 * @param obj {Object} - required object to be operated on
 * @param path {String} - required path information
 * @param val {Any} - required If this parameter is not passed, the final result will be set to undefined
 * @returns {Boolean} Returns true to indicate successful setting, otherwise setting fails
 */
function setValByPath (obj, path, val) {
  if (!obj || !path || typeof path !== 'string') {
    return false
  }

  let result = obj;
  const pathArr = path.split('.');

  for (let i = 0; i < pathArr.length; i++) {
    if (!result) break

    if (i === pathArr.length - 1) {
      result[pathArr[i]] = val;
      return Number.isNaN(val) ? Number.isNaN(result[pathArr[i]]) : result[pathArr[i]] === val
    }

    result = result[pathArr[i]];
  }

  return false
}

const quickSort = function (arr) {
  if (arr.length <= 1) { return arr }
  var pivotIndex = Math.floor(arr.length / 2);
  var pivot = arr.splice(pivotIndex, 1)[0];
  var left = [];
  var right = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat([pivot], quickSort(right))
};

function hideDom (selector, delay) {
  setTimeout(function () {
    const dom = document.querySelector(selector);
    if (dom) {
      dom.style.opacity = 0;
    }
  }, delay || 1000 * 5);
}

/**
 * Search upward operation
 * @param dom {Element} - required initial dom element
 * @param fn {function} - The callback operation of each level of ParentNode is required
 * If the function returns true, it means to stop the upward search action
 */
function eachParentNode (dom, fn) {
  let parent = dom.parentNode;
  while (parent) {
    const isEnd = fn(parent, dom);
    parent = parent.parentNode;
    if (isEnd) {
      break
    }
  }
}

/**
 * Dynamically load css content
 * @param cssText {String} - Text content of required style
 * @param id {String} - optionally specifies the id number of the style text. If the corresponding id number already exists, it will not be inserted again.
 * @param insetTo {Dom} - optionally specifies where to insert
 * @returns {HTMLStyleElement}
 */
function loadCSSText (cssText, id, insetTo) {
  if (id && document.getElementById(id)) {
    return false
  }

  const style = document.createElement('style');
  const head = insetTo || document.head || document.getElementsByTagName('head')[0];
  style.appendChild(document.createTextNode(cssText));
  head.appendChild(style);

  if (id) {
    style.setAttribute('id', id);
  }

  return style
}

/**
 * Determine whether the current element is an editable element
 * @param target
 * @returnsBoolean
 */
function isEditableTarget (target) {
  const isEditable = target.getAttribute && target.getAttribute('contenteditable') === 'true';
  const isInputDom = /INPUT|TEXTAREA|SELECT|LABEL/.test(target.nodeName);
  return isEditable || isInputDom
}

/**
 * Determine whether an element is inside shadowDom
 * Reference: https://www.coder.work/article/299700
 * @param node
 * @returns {boolean}
 */
function isInShadow (node, returnShadowRoot) {
  for (; node; node = node.parentNode) {
    if (node.toString() === '[object ShadowRoot]') {
      if (returnShadowRoot) {
        return node
      } else {
        return true
      }
    }
  }
  return false
}

/**
 * Determine whether an element is in the visible area. It is suitable for passive calling. If high performance is required, please use IntersectionObserver.
 * Reference: https://github.com/febobo/web-interview/issues/84
 * @param element
 * @returns {boolean}
 */
function isInViewPort (element) {
  const viewWidth = window.innerWidth || document.documentElement.clientWidth;
  const viewHeight = window.innerHeight || document.documentElement.clientHeight;
  const {
    top,
    right,
    bottom,
    left
  } = element.getBoundingClientRect();

  return (
    top >= 0 &&
    left >= 0 &&
    right <= viewWidth &&
    bottom <= viewHeight
  )
}

/**
 * Judgment of visible area based on IntersectionObserver
 * @param { Function } callback
 * @param { Element } element
 * @returns { IntersectionObserver }
 */
function observeVisibility (callback, element) {
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        /* The element is within the visible area*/
        callback(entry, observer);
      } else {
        /* The element is not within the visible area*/
        callback(null, observer);
      }
    });
  });

  if (element) {
    observer.observe(element);
  }

  /* Return the observation object so that the outside can cancel the observation: observer.disconnect(), or add a new observation object: observer.observe(element) */
  return observer
}

// Usage example:
// const temp1 = document.querySelector('#temp1')
// var observer = observeVisibility(function (entry, observer) {
// if (entry) {
// console.log('[entry]', entry)
// } else {
// console.log('[entry]', 'null')
// }
// }, temp1)

/**
 * Determine whether the element is invisible, mainly used to determine whether it has left the document flow or is set to display:none.
 * @param {*} element
 * @returns
 */
function isOutOfDocument (element) {
  if (!element || element.offsetParent === null) {
    return true
  }

  const {
    top,
    right,
    bottom,
    left,
    width,
    height
  } = element.getBoundingClientRect();

  return (
    top === 0 &&
    right === 0 &&
    bottom === 0 &&
    left === 0 &&
    width === 0 &&
    height === 0
  )
}

/**
 * Determine whether the coordinates are within the element
 */
function isCoordinateInElement (x, y, element) {
  if (!element || !element.getBoundingClientRect) { return false }

  const rect = element.getBoundingClientRect();

  if (x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom) {
    return true
  } else {
    return false
  }
}

/**
 * Some websites enable CSP, which will prevent innerHTML from being used, so trustedTypes needs to be used.
 * https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/trusted-types
 * @param { String } htmlString - required HTML string
 * @returns
 */
function createTrustedHTML (htmlString) {
  if (window.trustedTypes && window.trustedTypes.createPolicy) {
    /* Check whether the default policy already exists before creating it*/
    let policy = window.trustedTypes.defaultPolicy || null;
    if (!policy) {
      policy = window.trustedTypes.createPolicy('default', {
        createHTML: (string) => string
      });
    }

    const trustedHTML = policy.createHTML(htmlString);

    return trustedHTML
  } else {
    returnhtmlString
  }
}

/**
 * Parse HTML string and return DOM node array
 * @param { String } -required htmlString HTML string
 * @param { HTMLElement } - optional targetElement target element, if passed in, the parsed node will be added to the element
 * @returns {Array} DOM node array
 */
function parseHTML (htmlString, targetElement) {
  if (typeof htmlString !== 'string') {
    throw new Error('[parseHTML] Input must be a string')
  }

  const trustedHTML = createTrustedHTML(htmlString);

  const parser = new DOMParser();
  const doc = parser.parseFromString(trustedHTML, 'text/html');
  const nodes = doc.body.childNodes;
  const result = [];

  if (targetElement && targetElement.appendChild) {
    nodes.forEach(node ​​=> {
      const targetNode = node.cloneNode(true);
      try {
        /* Some websites will rewrite appendChild due to business needs, which may cause appendChild to report an error, so try catch is needed here */
        targetElement.appendChild(targetNode);
      } catch (e) {
        console.error('[parseHTML] appendChild error', e, targetElement, targetNode);
      }
      result.push(targetNode);
    });
  }

  return result.length ? result : nodes
}

/**
 * Convert inline styles into object form
 * @param {string} inlineStyle - required, for example: position: relative; opacity: 1; visibility: hidden; transform: scale(0.1) rotate(180deg);
 * @returns {Object}
 */

function inlineStyleToObj (inlineStyle) {
  if (typeof inlineStyle !== 'string') {
    return {}
  }

  const result = {};
  const styArr = inlineStyle.split(';');
  styArr.forEach(item => {
    const tmpArr = item.split(':');
    if (tmpArr. length === 2) {
      result[tmpArr[0].trim()] = tmpArr[1].trim();
    }
  });

  return result
}

function objToInlineStyle (obj) {
  if (Object.prototype.toString.call(obj) !== '[object Object]') {
    return ''
  }

  const styleArr = [];
  Object.keys(obj).forEach(key => {
    styleArr.push(`${key}: ${obj[key]}`);
  });

  return styleArr.join('; ')
}

/* ua information disguised */
function fakeUA (ua) {
  // Object.defineProperty(navigator, 'userAgent', {
  // value: ua,
  // writable: false,
  // configurable: false,
  // enumerable: true
  // })

  const desc = Object.getOwnPropertyDescriptor(Navigator.prototype, 'userAgent');
  Object.defineProperty(Navigator.prototype, 'userAgent', { ...desc, get: function () { return ua } });
}

/* ua information source: https://developers.whatismybrowser.com */
const userAgentMap = {
  android: {
    chrome: 'Mozilla/5.0 (Linux; Android 9; SM-G960F Build/PPR1.180610.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/74.0.3729.157 Mobile Safari/537.36',
    firefox: 'Mozilla/5.0 (Android 7.0; Mobile; rv:57.0) Gecko/57.0 Firefox/57.0'
  },
  iPhone: {
    safari: 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/111.0.0.0 Mobile/15E148 Safari/604.1',
    chrome: 'Mozilla/5.0 (iPhone; CPU iPhone OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/74.0.3729.121 Mobile/15E148 Safari/605.1'
  },
  iPad: {
    safari: 'Mozilla/5.0 (iPad; CPU OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.1 Mobile/15E148 Safari/604.1',
    chrome: 'Mozilla/5.0 (iPad; CPU OS 12_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/74.0.3729.155 Mobile/15E148 Safari/605.1'
  },
  mac: {
    safari: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.1.1 Safari/605.1.15',
    chrome: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/537.36 (KHTML, like Firefox) Chrome/74.0.3729.157 Safari/537.36'
  }
};

/**
 * Determine whether it is in an Iframe
 * @returns {boolean}
 */
function isInIframe () {
  return window !== window.top
}

/**
 * Determine whether it is in a cross-domain restricted Iframe
 * @returns {boolean}
 */
function isInCrossOriginFrame () {
  let result = true;
  try {
    if (window.top.localStorage || window.top.location.href) {
      result = false;
    }
  } catch (e) {
    result = true;
  }
  return result
}

/**
 * Simple throttling function
 * @param fn
 * @param interval
 * @returns {Function}
 */
function throttle (fn, interval = 80) {
  let timeout = null;
  return function () {
    if (timeout) return false
    timeout = setTimeout(() => {
      timeout = null;
    }, interval);
    fn.apply(this, arguments);
  }
}

/*!
 * @name url.js
 * @description Related methods for parsing urls
 * @version 0.0.1
 * @author Blaze
 * @date 27/03/2019 15:52
 * @github https://github.com/xxxily
 */

/**
 * Reference example:
 * https://segmentfault.com/a/1190000006215495
 * Note: This method must rely on the browser's DOM object
 */

function parseURL (url) {
  var a = document.createElement('a');
  a.href = url || window.location.href;
  return {
    source: url,
    protocol: a.protocol.replace(':', ''),
    host: a.hostname,
    port: a.port,
    origin: a.origin,
    search: a.search,
    query: a.search,
    file: (a.pathname.match(/\/([^/?#]+)$/i) || ['', ''])[1],
    hash: a.hash.replace('#', ''),
    path: a.pathname.replace(/^([^/])/, '/$1'),
    relative: (a.href.match(/tps?:\/\/[^/]+(.+)/) || ['', ''])[1],
    params: (function () {
      var ret = {};
      var segment = [];
      var paramArr = a.search.replace(/^\?/, '').split('&');

      for (var i = 0; i < paramArr.length; i++) {
        var item = paramArr[i];
        if (item !== '' && item.indexOf('=')) {
          seg.push(item);
        }
      }

      for (var j = 0; j < seg.length; j++) {
        var param = seg[j];
        var idx = param.indexOf('=');
        var key = param.substring(0, idx);
        var val = param.substring(idx + 1);
        if (!key) {
          ret[val] = null;
        } else {
          ret[key] = val;
        }
      }
      return ret
    })()
  }
}

/**
 * Convert params object into string pattern
 * @param params {Object} - required params object
 * @returns {string}
 */
function stringifyParams (params) {
  var strArr = [];

  if (!Object.prototype.toString.call(params) === '[object Object]') {
    return ''
  }

  for (var key in params) {
    if (Object.hasOwnProperty.call(params, key)) {
      var val = params[key];
      var valType = Object.prototype.toString.call(val);

      if (val === '' || valType === '[object Undefined]') continue

      if (val === null) {
        strArr.push(key);
      } else if (valType === '[object Array]') {
        strArr.push(key + '=' + val.join(','));
      } else {
        val = (JSON.stringify(val) || '' + val).replace(/(^"|"$)/g, '');
        strArr.push(key + '=' + val);
      }
    }
  }
  return strArr.join('&')
}

/**
 * Restore the url object parsed by parseURL into the url address
 * Mainly used to reorganize the url link after the query parameters are dynamically modified.
 * @param obj {Object} - required parseURL to parse the url object
 */
function stringifyToUrl (urlObj) {
  var query = stringifyParams(urlObj.params) || '';
  if (query) { query = '?' + query; }
  var hash = urlObj.hash ? '#' + urlObj.hash : '';
  return urlObj.origin + urlObj.path + query + hash
}

/* Currently used shortcut keys */
const hasUseKey = {
  keyCodeList: [13, 16, 17, 18, 27, 32, 37, 38, 39, 40, 49, 50, 51, 52, 67, 68, 69, 70, 73, 74, 75, 77, 78, 79 , 80, 81, 82, 83, 84, 85, 87, 88, 89, 90, 97, 98, 99, 100, 220],
  keyList: ['enter', 'shift', 'control', 'alt', 'escape', ' ', 'arrowleft', 'arrowright', 'arrowup', 'arrowdown', '1', '2', '3', '4', 'c', 'd', 'e', ​​'f', 'i', 'j', 'k', 'n', 'o', 'p', 'q ', 'r', 's', 't', 'u', 'w', 'x', 'y', 'z', '\\', '|'],
  keyMap: {
    enter: 13,
    shift: 16,
    ctrl: 17,
    alt: 18,
    esc: 27,
    space: 32,
    '←': 37,
    '↑': 38,
    '→': 39,
    '↓': 40,
    1:49,
    2:50,
    3:51,
    4:52,
    c: 67,
    d: 68,
    e: 69,
    f: 70,
    i: 73,
    j: 74,
    k: 75,
    m: 77,
    n: 78,
    o: 79,
    p: 80,
    q: 81,
    r: 82,
    s: 83,
    t: 84,
    u: 85,
    w: 87,
    x: 88,
    y: 89,
    z: 90,
    pad1: 97,
    pad2: 98,
    pad3: 99,
    pad4: 100,
    '\\': 220
  }
};

/**
 * Determine whether the current button is registered as a required button
 * Used to reduce interference with other keys
 */
function isRegisterKey (event) {
  const keyCode = event.keyCode;
  const key = event.key.toLowerCase();
  return hasUseKey.keyCodeList.includes(keyCode) ||
    hasUseKey.keyList.includes(key)
}

/**
 * Since tampermonkey encapsulates the window object, the window we actually access is not the real window of the page.
 * This means that if we need to mount certain objects to the window of the page for debugging, we cannot mount them.
 * Therefore, special means must be used to access the real window object of the page, so the following function is created
 * @returns {Promise}
 */
async function getPageWindow () {
  return new Promise(function (resolve, reject) {
    if (window._pageWindow) {
      return resolve(window._pageWindow)
    }

    /* Try to obtain pageWindow through synchronization */
    try {
      const pageWin = getPageWindowSync();
      if (pageWin && pageWin.document && pageWin.XMLHttpRequest) {
        window._pageWindow = pageWin;
        resolve(pageWin);
        return pageWin
      }
    } catch (e) {}

    /* The following method of asynchronously obtaining pagewindow is invalid in the latest chrome browser*/

    const listenEventList = ['load', 'mousemove', 'scroll', 'get-page-window-event'];

    function getWin (event) {
      window._pageWindow = this;
      // debug.log('getPageWindow succeed', event)
      listenEventList.forEach(eventType => {
        window.removeEventListener(eventType, getWin, true);
      });
      resolve(window._pageWindow);
    }

    listenEventList.forEach(eventType => {
      window.addEventListener(eventType, getWin, true);
    });

    /* Dispatch events by yourself to obtain the pageWindow object in the shortest possible time*/
    window.dispatchEvent(new window.Event('get-page-window-event'));
  })
}
getPageWindow();

/**
 * Get pageWindow through synchronization
 * Note that the synchronous acquisition method requires writing the script into the head. Some websites may fail to obtain due to security policies and cannot obtain them normally.
 * @returns {*}
 */
function getPageWindowSync (rawFunction) {
  if (window.unsafeWindow) return window.unsafeWindow
  if (document._win_) return document._win_

  try {
    rawFunction = rawFunction || window.__rawFunction__ || Function.prototype.constructor;
    // return rawFunction('return window')()
    // Function('return (function(){}.constructor("return this")());')
    return rawFunction('return (function(){}.constructor("var getPageWindowSync=1; return this")());')()
  } catch (e) {
    console.error('getPageWindowSync error', e);

    const head = document.head || document.querySelector('head');
    const script = document.createElement('script');
    script.appendChild(document.createTextNode('document._win_ = window'));
    head.appendChild(script);

    return document._win_
  }
}

function openInTab (url, opts, referer) {
  if (referer) {
    const urlObj = parseURL(url);
    if (!urlObj.params.referer) {
      urlObj.params.referer = encodeURIComponent(window.location.href);
      url = stringifyToUrl(urlObj);
    }
  }

  if (window.GM_openInTab) {
    window.GM_openInTab(url, opts || {
      active: true,
      insert: true,
      setParent: true
    });
  } else {
    // Create a new a tag and simulate a click
    const a = document.createElement('a');
    a.href = url;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    a.style.display = 'inline-block';
    a.style.width = '1px';
    a.style.height = '1px';
    a.style.opcity = 0;
    document.body.appendChild(a);
    a.click();
    setTimeout(() => { document.body.removeChild(a); }, 300);
  }
}

/* Make sure the number is positive */
function numUp (num) {
  if (typeof num === 'number' && num < 0) {
    num = Math.abs(num);
  }
  return num
}

/* Make sure the number is negative */
function numDown (num) {
  if (typeof num === 'number' && num > 0) {
    num = -num;
  }
  return num
}

function isMediaElement (element) {
  return element && (element instanceof HTMLMediaElement || element.HTMLMediaElement || element.HTMLVideoElement || element.HTMLAudioElement)
}

function isVideoElement (element) {
  return element && (element instanceof HTMLVideoElement || element.HTMLVideoElement)
}

function isAudioElement (element) {
  return element && (element instanceof HTMLAudioElement || element.HTMLAudioElement)
}

/*!
 * configManager parse localStorage error * @name configManager.ts
 * @description Configure unified management script
 * @version 0.0.1
 * @author xxxily
 * @date 2023/03/06 14:29
 * @github https://github.com/xxxily
 */


/**
 * Determine whether localStorage is available
 * localStorage does not guarantee 100% availability, so judgment must be made before use, otherwise it will cause script exceptions on some websites.
 * https://stackoverflow.com/questions/30481516/iframe-in-chrome-error-failed-to-read-localstorage-from-window-access-deni
 * https://cloud.tencent.com/developer/article/1803097 (When localStorage cannot be used, window.localStorage is null, not undefined as in the article)
 */
function isLocalStorageUsable () {
  return window.localStorage && window.localStorage.getItem instanceof Function && window.localStorage.setItem instanceof Function
}

/**
 * Determine whether GlobalStorage is available. The currently used GlobalStorage is based on the relevant API provided by tampermonkey
 * https://www.tampermonkey.net/documentation.php?ext=dhdg#GM_setValue
 */
function isGlobalStorageUsable () {
  return window.GM_setValue && window.GM_getValue && window.GM_deleteValue && window.GM_listValues ​​instanceof Function
}

/**
 * Store clean localStorage related methods
 * Prevent the method under the localStorage object from being overwritten, resulting in different reading and writing rules.
 */
const rawLocalStorage = (function getRawLocalStorage () {
  const localStorageApis = ['getItem', 'setItem', 'removeItem', 'clear', 'key'];

  const rawLocalStorage = {};

  localStorageApis.forEach((apiKey) => {
    if (isLocalStorageUsable()) {
      rawLocalStorage[`_${apiKey}_`] = localStorage[apiKey];
      rawLocalStorage[apiKey] = function () {
        return rawLocalStorage[`_${apiKey}_`].apply(localStorage, arguments)
      };
    } else {
      rawLocalStorage[apiKey] = function () {
        console.error('localStorage unavailable');
      };
    }
  });

  return rawLocalStorage
})();

class ConfigManager {
  constructor (opts) {
    this.opts = opts;
  }

  isLocalStorageUsable = isLocalStorageUsable
  isGlobalStorageUsable = isGlobalStorageUsable

  /**
   * Convert confPath to the key name eventually stored in localStorage or globalStorage
   * @param {String} confPath - required, configure path information: for example: 'enhance.blockSetPlaybackRate'
   * @returns {keyName}
   */
  getConfKeyName (confPath = '') {
    return this.opts.prefix + confPath.replace(/\./g, '_')
  }

  /**
   * Convert the key name stored in localStorage or globalStorage into the confPath when actually called
   * @param {String} keyName - The key name must be stored in localStorage or globalStorage, for example: '_h5player_enhance_blockSetPlaybackRate'
   * @returns {confPath}
   */
  getConfPath (keyName = '') {
    return keyName.replace(this.opts.prefix, '').replace(/_/g, '.')
  }

  getConfPathList (config) {
    const confPathList = [];

    /* Recursively obtain the paths of all configuration items*/
    function getConfPathList (config, path = '') {
      Object.keys(config).forEach((key) => {
        const pathKey = path ? `${path}.${key}` : key;
        if (Object.prototype.toString.call(config[key]) === '[object Object]') {
          getConfPathList(config[key], pathKey);
        } else {
          confPathList.push(pathKey);
        }
      });
    }
    getConfPathList(config);

    return confPathList
  }

  /**
   * Obtain relevant configuration information based on the given configuration path
   * Acquisition order: LocalStorage > GlobalStorage > defConfig > null
   * @param {String} confPath - required, configure path information: for example: 'enhance.blockSetPlaybackRate'
   * @returns {*} If null is returned, it means that the relevant configuration information was not obtained
   */
  get (confPath) {
    if (typeof confPath !== 'string') {
      return null
    }

    /* By default, the local localStorage configuration is preferred*/
    const localConf = this.getLocalStorage(confPath);
    if (localConf !== null && localConf !== undefined) {
      return localConf
    }

    /* If localStorage does not have relevant configuration, try to use GlobalStorage configuration */
    const globalConf = this.getGlobalStorage(confPath);
    if (globalConf !== null && globalConf !== undefined) {
      return globalConf
    }

    /* If neither localStorage nor GlobalStorage configuration is found, try to get the relevant configuration information from the default configuration table*/
    return this.getMemoryStorage(confPath)
  }

  /**
   * Write the configuration results to localStorage or GlobalStorage
   * Writing order: LocalStorage > GlobalStorage
   * Regardless of whether the writing is successful or not, the result will be updated to the corresponding configuration item in defConfig.
   * @param {String} confPath
   * @param {*} val
   * @returns {Boolean}
   */
  set (confPath, val) {
    if (typeof confPath !== 'string' || typeof val === 'undefined' || val === null) {
      return false
    }

    setValByPath(this.opts.config, confPath, val);

    let sucStatus = false;

    sucStatus = this.setLocalStorage(confPath, val);

    if (!sucStatus) {
      sucStatus = this.setGlobalStorage(confPath, val);
    }

    return sucStatus
  }

  /* Get and list all currently set configuration items*/
  list () {
    const result = {
      localConf: this.listLocalStorage(),
      globalConf: this.listGlobalStorage(),
      defConfig: this.opts.config
    };
    return result
  }

  /* Clear configuration items that have been written to local storage*/
  clear () {
    this.clearLocalStorage();
    this.clearGlobalStorage();
  }

  getMemoryStorage (confPath) {
    if (typeof confPath !== 'string') { return null }

    const config = this.getConfObj();
    const val = getValByPath$1(config, confPath);
    if (typeof val !== 'undefined' && val !== null) {
      return val
    } else {
      return null
    }
  }

  /**
   * According to the given configuration path, obtain the configuration information defined under LocalStorage
   * @param {String} confPath - required, configure path information
   * @returns
   */
  getLocalStorage (confPath) {
    if (typeof confPath !== 'string') {
      return null
    }

    const key = this.getConfKeyName(confPath);

    if (isLocalStorageUsable()) {
      let localConf = rawLocalStorage.getItem(key);
      if (localConf !== null && localConf !== undefined) {
        try {
          localConf = JSON.parse(localConf);
        } catch (e) {
          console.error('configManager parse localStorage error:', key, localConf);
        }

        return localConf
      } else {
        return this.getMemoryStorage(confPath)
      }
    }

    return null
  }

  /**
   * According to the given configuration path, obtain the configuration information defined under GlobalStorage
   * @param {String} confPath - required, configure path information
   * @returns
   */
  getGlobalStorage (confPath) {
    if (typeof confPath !== 'string') {
      return null
    }

    const key = this.getConfKeyName(confPath);

    if (isGlobalStorageUsable()) {
      const globalConf = window.GM_getValue(key);
      if (globalConf !== null && globalConf !== undefined) {
        return globalConf
      } else {
        return this.getMemoryStorage(confPath)
      }
    } else {
      /* Non-oil monkey environment, fall back to localStorage */
      return this.getLocalStorage(confPath)
    }
  }

  setMemoryStorage (confPath, val) {
    if (typeof confPath !== 'string' || typeof val === 'undefined' || val === null) {
      return false
    } else {
      setValByPath(this.opts.config, confPath, val);
      return true
    }
  }

  /**
   * Write the configuration results to localStorage
   * @param {String} confPath
   * @param {*} val
   * @returns {Boolean}
   */
  setLocalStorage (confPath, val) {
    if (typeof confPath !== 'string' || typeof val === 'undefined' || val === null) {
      return false
    }

    setValByPath(this.opts.config, confPath, val);

    const key = this.getConfKeyName(confPath);

    if (isLocalStorageUsable()) {
      try {
        if (Object.prototype.toString.call(val) === '[object Object]' || Array.isArray(val)) {
          val = JSON.stringify(val);
        }

        rawLocalStorage.setItem(key, val);

        return true
      } catch (e) {
        console.error('configManager set localStorage error:', key, val, e);
        return false
      }
    } else {
      return false
    }
  }

  /**
   * Write the configuration results into globalStorage
   * @param {String} confPath
   * @param {*} val
   * @returns {Boolean}
   */
  setGlobalStorage (confPath, val) {
    if (typeof confPath !== 'string' || typeof val === 'undefined' || val === null) {
      return false
    }

    setValByPath(this.opts.config, confPath, val);

    const key = this.getConfKeyName(confPath);

    if (isGlobalStorageUsable()) {
      try {
        window.GM_setValue(key, val);
        return true
      } catch (e) {
        console.error('configManager set globalStorage error:', key, val, e);
        return false
      }
    } else {
      /* Non-oil monkey environment, fall back to localStorage */
      return this.setLocalStorage(confPath, val)
    }
  }

  listLocalStorage () {
    if (isLocalStorageUsable()) {
      const result = {};
      Object.keys(localStorage).forEach((key) => {
        if (key.startsWith(this.opts.prefix)) {
          const confPath = this.getConfPath(key);
          result[confPath] = this.getLocalStorage(confPath);
        }
      });
      return result
    } else {
      return {}
    }
  }

  listGlobalStorage () {
    if (isGlobalStorageUsable()) {
      const result = {};
      const globalStorage = window.GM_listValues();
      globalStorage.forEach((key) => {
        if (key.startsWith(this.opts.prefix)) {
          const confPath = this.getConfPath(key);
          result[confPath] = this.getGlobalStorage(confPath);
        }
      });
      return result
    } else {
      return {}
    }
  }

  getConfObj () {
    const confList = this.list();

    /* Synchronize global configuration to this.opts.config */
    Object.keys(confList.globalConf).forEach((confPath) => {
      setValByPath(this.opts.config, confPath, confList.globalConf[confPath]);
    });

    /* Synchronize local configuration to this.opts.config */
    Object.keys(confList.localConf).forEach((confPath) => {
      setValByPath(this.opts.config, confPath, confList.localConf[confPath]);
    });

    return this.opts.config
  }

  setLocalStorageByObj (config) {
    const oldConfig = this.getConfObj();
    const confPathList = this.getConfPathList(config);
    confPathList.forEach((confPath) => {
      const oldVal = getValByPath$1(oldConfig, confPath);
      const val = getValByPath$1(config, confPath);

      /* Skip identical values ​​or values ​​that do not exist in the old configuration */
      if (oldVal === val || oldVal === undefined) {
        return
      }

      this.setLocalStorage(confPath, val);
    });
  }

  setGlobalStorageByObj (config) {
    const oldConfig = this.getConfObj();
    const confPathList = this.getConfPathList(config);
    confPathList.forEach((confPath) => {
      const oldVal = getValByPath$1(oldConfig, confPath);
      const val = getValByPath$1(config, confPath);

      /* Skip identical values ​​or values ​​that do not exist in the old configuration */

      if (oldVal === val || oldVal === undefined) {
        return
      }

      // console.log('setGlobalStorageByObj', confPath, val)

      this.setGlobalStorage(confPath, val);
    });
  }

  clearLocalStorage () {
    if (isLocalStorageUsable()) {
      Object.keys(localStorage).forEach((key) => {
        if (key.startsWith(this.opts.prefix)) {
          rawLocalStorage.removeItem(key);
        }
      });
    }
  }

  clearGlobalStorage () {
    if (isGlobalStorageUsable()) {
      const globalStorage = window.GM_listValues();
      globalStorage.forEach((key) => {
        if (key.startsWith(this.opts.prefix)) {
          window.GM_deleteValue(key);
        }
      });
    }
  }

  mergeDefConf (conf) {
    return mergeObj(this.opts.config, conf)
  }
}

/* Usage example: */
// const myConfig = new ConfigManager({
// prefix: '_myConfig_',
//config: {
// hotkeys: [
// {
// desc: 'test',
// key: 'v',
// command: 'toggleVisible',
// /* To disable shortcut keys, set disabled to true */
// disabled: false,
// },
// ],
// enable: true,
// debug: false,
// },
// })
// myConfig.set('enable', false)
// /* For arrays, direct modification of array elements is not currently supported. You need to obtain the array first, then modify the array elements, and then rewrite it */
// const hotkeys = myConfig.get('hotkeys')
// hotkeys[0].disabled = true
// myConfig.set('hotkeys', hotkeys)

const configManager = new ConfigManager({
  prefix: '_h5player_',
  config: {
    enable: true,
    media: {
      autoPlay: false,
      playbackRate: 1,
      volume: 1,

      /* The last set playback speed, default 1.5 */
      lastPlaybackRate: 1.5,

      /* Whether to allow storage of playback progress*/
      allowRestorePlayProgress: {

      },
      /*Video playback progress mapping table*/
      progress: {}
    },
    enableHotkeys: true,
    hotkeys: [
      {
        desc: 'Web page full screen',
        key: 'shift+enter',
        command: 'setWebFullScreen',
        /* To disable shortcut keys, set disabled to true */
        disabled: false
      },
      {
        desc: 'full screen',
        key: 'enter',
        command: 'setFullScreen'
      },
      {
        desc: 'Switch picture-in-picture mode',
        key: 'shift+p',
        command: 'togglePictureInPicture'
      },
      {
        desc: 'Video screenshot',
        key: 'shift+s',
        command: 'capture'
      },
      {
        desc: 'Enable or disable the automatic resume playback progress function',
        key: 'shift+r',
        command: 'switchRestorePlayProgressStatus'
      },
      {
        desc: 'Vertical mirror flip',
        key: 'shift+m',
        command: 'setMirror',
        args: [true]
      },
      {
        desc: 'Horizontal mirror flip',
        key: 'm',
        command: 'setMirror'
      },
      {
        desc: 'Download audio and video files (experimental feature)',
        key: 'shift+d',
        command: 'mediaDownload'
      },
      {
        desc: 'Reduce the video screen -0.05',
        key: 'shift+x',
        command: 'setScaleDown',
        args: -0.05
      },
      {
        desc: 'Enlarge the video screen +0.05',
        key: 'shift+c',
        command: 'setScaleUp',
        args: 0.05
      },
      {
        desc: 'Restore video screen',
        key: 'shift+z',
        command: 'resetTransform'
      },
      {
        desc: 'Move the screen 10px to the right',
        key: 'shift+arrowright',
        command: 'setTranslateRight',
        args: 10
      },
      {
        desc: 'Move the screen 10px to the left',
        key: 'shift+arrowleft',
        command: 'setTranslateLeft',
        args: -10
      },
      {
        desc: 'Move the screen up 10px',
        key: 'shift+arrowup',
        command: 'setTranslateUp',
        args: 10
      },
      {
        desc: 'Move the screen down 10px',
        key: 'shift+arrowdown',
        command: 'setTranslateDown',
        args: -10
      },
      {
        desc: 'Go forward 5 seconds',
        key: 'arrowright',
        command: 'setCurrentTimeUp',
        args: 5
      },
      {
        desc: 'Go back 5 seconds',
        key: 'arrowleft',
        command: 'setCurrentTimeDown',
        args: -5
      },
      {
        desc: 'advance 30 seconds',
        key: 'ctrl+arrowright',
        command: 'setCurrentTimeUp',
        args: [30]
      },
      {
        desc: 'Go back 30 seconds',
        key: 'ctrl+arrowleft',
        command: 'setCurrentTimeDown',
        args: [-30]
      },
      {
        desc: 'Volume increased by 5%',
        key: 'arrowup',
        command: 'setVolumeUp',
        args: [0.05]
      },
      {
        desc: 'Volume reduced by 5%',
        key: 'arrowdown',
        command: 'setVolumeDown',
        args: [-0.05]
      },
      {
        desc: 'Volume increased by 20%',
        key: 'ctrl+arrowup',
        command: 'setVolumeUp',
        args: [0.2]
      },
      {
        desc: 'Volume reduced by 20%',
        key: 'ctrl+arrowdown',
        command: 'setVolumeDown',
        args: [-0.2]
      },
      {
        desc: 'Switch pause/play',
        key: 'space',
        command: 'switchPlayStatus'
      },
      {
        desc: 'Slow down playback',
        key: 'x',
        command: 'setPlaybackRateDown',
        args: -0.1
      },
      {
        desc: 'Accelerate playback',
        key: 'c',
        command: 'setPlaybackRateUp',
        args: 0.1
      },
      {
        desc: 'Play at normal speed',
        key: 'z',
        command: 'resetPlaybackRate'
      },
      {
        desc: 'Set 1x playback speed',
        key: 'Digit1',
        command: 'setPlaybackRatePlus',
        args: 1
      },
      {
        desc: 'Set 1x playback speed',
        key: 'Numpad1',
        command: 'setPlaybackRatePlus',
        args: 1
      },
      {
        desc: 'Set 2x playback speed',
        key: 'Digit2',
        command: 'setPlaybackRatePlus',
        args: 2
      },
      {
        desc: 'Set 2x playback speed',
        key: 'Numpad2',
        command: 'setPlaybackRatePlus',
        args: 2
      },
      {
        desc: 'Set 3x playback speed',
        key: 'Digit3',
        command: 'setPlaybackRatePlus',
        args: 3
      },
      {
        desc: 'Set 3x playback speed',
        key: 'Numpad3',
        command: 'setPlaybackRatePlus',
        args: 3
      },
      {
        desc: 'Set 4x playback speed',
        key: 'Digit4',
        command: 'setPlaybackRatePlus',
        args: 4
      },
      {
        desc: 'Set 4x playback speed',
        key: 'Numpad4',
        command: 'setPlaybackRatePlus',
        args: 4
      },
      {
        desc: 'next frame',
        key: 'F',
        command: 'freezeFrame',
        args: 1
      },
      {
        desc: 'previous frame',
        key: 'D',
        command: 'freezeFrame',
        args: -1
      },
      {
        desc: 'Increase brightness',
        key: 'E',
        command: 'setBrightnessUp'
      },
      {
        desc: 'Reduce brightness',
        key: 'W',
        command: 'setBrightnessDown'
      },
      {
        desc: 'Increase contrast',
        key: 'T',
        command: 'setContrastUp'
      },
      {
        desc: 'Reduce contrast',
        key: 'R',
        command: 'setContrastDown'
      },
      {
        desc: 'Increase saturation',
        key: 'U',
        command: 'setSaturationUp'
      },
      {
        desc: 'Reduce saturation',
        key: 'Y',
        command: 'setSaturationDown'
      },
      {
        desc: 'Add hue',
        key: 'O',
        command: 'setHueUp'
      },
      {
        desc: 'Reduce hue',
        key: 'I',
        command: 'setHueDown'
      },
      {
        desc: 'Blur increased by 1 px',
        key: 'K',
        command: 'setBlurUp'
      },
      {
        desc: 'Blur reduced by 1 px',
        key: 'J',
        command: 'setBlurDown'
      },
      {
        desc: 'image reset',
        key: 'Q',
        command: 'resetFilterAndTransform'
      },
      {
        desc: 'Rotate the screen 90 degrees',
        key: 'S',
        command: 'setRotate'
      },
      {
        desc: 'Play next episode',
        key: 'N',
        command: 'setNextVideo'
      },
      {
        desc: 'Insert debugger breakpoint',
        key: 'ctrl+shift+alt+d',
        command: 'debuggerNow'
      },
      {
        desc: 'Execute JS script',
        key: 'ctrl+j ctrl+s',
        command: () => {
          alert('custom JS script');
        },
        when: ''
      }
    ],
    mouse: {
      enable: false,
      /* How long to respond to mouse long press events*/
      longPressTime: 600
    },
    ui: {
      enable: true,
      alwaysShow: false
    },
    download: {
      enable: true
    },
    enhance: {
    /* If the default speed adjustment logic is not disabled, the speed will be easily reset when switching between multiple videos, so this option is enabled by default */
      blockSetPlaybackRate: true,

      blockSetCurrentTime: false,
      blockSetVolume: false,
      allowExperimentFeatures: false,
      allowExternalCustomConfiguration: false,
      /* Whether to enable the volume gain function */
      allowAcousticGain: false,
      /* Whether to enable cross-domain control*/
      allowCrossOriginControl: true,
      unfoldMenu: false
    },
    language: 'auto',
    debug: false,
    blacklist: {
      /**
       * URL blacklist, it is forbidden to run h5player scripts under these URLs
       * To adapt to the situation where some pages are difficult to troubleshoot or are difficult to be compatible with, but you do not want to disable the entire website
       * For example: Home page of station B
       */
      urls: [
        'https://www.bilibili.com/'
      ],
      domains: [
        'challenges.cloudflare.com'
      ]
    }
  }
});

async function initUiConfigManager () {
  const isUiConfigPage = location.href.indexOf('h5player.anzz.top/tools/json-editor') > -1 || location.href.indexOf('ankvps.gitee.io/h5player/tools/json-editor') > -1;
  const isUiConfigMode = location.href.indexOf('saveHandlerName=saveH5PlayerConfig') > -1;
  if (!isUiConfigPage || !isUiConfigMode) return

  function init (pageWindow) {
    const config = JSON.parse(JSON.stringify(configManager.getConfObj()));
    delete config.recommendList;
    if (Array.isArray(config.hotkeys)) {
      /* Add the disabled option to each item of hotkeys so that an item can be quickly disabled or enabled on the interface side */
      config.hotkeys.forEach(item => {
        if (item.disabled === undefined) {
          item.disabled = false;
        }
      });
    }

    pageWindow.jsonEditor.set(config);

    // pageWindow.jsonEditor.collapseAll()
    pageWindow.jsonEditor.expandAll && pageWindow.jsonEditor.expandAll();

    pageWindow.saveH5PlayerConfig = function (editor) {
      try {
        const defConfig = configManager.getConfObj();
        const newConfig = editor.get();
        newConfig.recommendList = defConfig.recommendList || [];
        configManager.setGlobalStorageByObj(newConfig);
        alert('Configuration has been updated');
      } catch (e) {
        alert(`Configuration format is abnormal, saving failed: ${e}`);
      }
    };
  }

  let checkCount = 0;
  function checkJSONEditor (pageWindow) {
    if (!pageWindow.JSONEditor) {
      if (checkCount < 30) {
        setTimeout(() => {
          checkCount++;
          checkJSONEditor(pageWindow);
        }, 200);
      }

      return
    }

    init(pageWindow);
  }

  const pageWindow = await getPageWindow();

  if (!pageWindow) {
    return
  }

  checkJSONEditor(pageWindow);
}
initUiConfigManager();

/**
 * Task Control Center
 * Used to configure all tasks that cannot be processed universally. For example, different websites have different full-screen methods. The full-screen logic of the website itself must be called to ensure that subtitles, barrages, etc. work properly.
 **/

let TCC$1 = class TCC {
  constructor (taskConf, doTaskFunc) {
    this.conf = taskConf || {
      /**
       * Configuration example
       * The parent key name corresponds to the first-level domain name.
       * The related function name corresponding to the child key name, the click selector to be triggered by the key value or the related function to be called.
       * All child key values ​​support triggering using selectors or function calls
       * If a child is configured, use the child configuration logic to operate, otherwise use the default logic
       * Note: Except for the two child key names include and exclude, these two are used for URL range matching.
       * */
      'demo.demo': {
        fullScreen: '.fullscreen-btn',
        exitFullScreen: '.exit-fullscreen-btn',
        webFullScreen: function () {},
        exitWebFullScreen: '.exit-fullscreen-btn',
        autoPlay: '.player-start-btn',
        pause: '.player-pause',
        play: '.player-play',
        switchPlayStatus: '.player-play',
        playbackRate: function () {},
        currentTime: function () {},
        addCurrentTime: '.add-currenttime',
        subtractCurrentTime: '.subtract-currenttime',
        // Customize the execution method of shortcut keys. If it is a key combination, it must be in the order ctrl-->shift-->alt. If there is no shortcut key, it can be ignored. The key name must be all lowercase.
        shortcuts: {
          /* Register shortcut keys to perform custom callback operations*/
          register: [
            'ctrl+shift+alt+c',
            'ctrl+shift+c',
            'ctrl+alt+c',
            'ctrl+c',
            'c'
          ],
          /* Custom shortcut key callback operation */
          callback: function (h5Player, taskConf, data) {
            const { event, player } = data;
            console.log(event, player);
          }
        },
        /* The path information that needs to be included in the current domain name. By default, all paths available in the entire domain name must be regular */
        include: /^.*/,
        /* Path information that needs to be excluded under the current domain name. By default, any path is not excluded and must be regular */
        exclude: /\t/
      }
    };

    // Define how to configure the task to be executed through the doTaskFunc callback
    this.doTaskFunc = doTaskFunc instanceof Function ? doTaskFunc : function () {};
  }

  setTaskConf (taskConf) { this.conf = taskConf; }

  /**
   * Obtaining domain names, the current implementation method is not good and needs to be modified. It does not support regional domain names (such as com.cn), third-level and above domain names.
   * */
  getDomain () {
    const host = window.location.host;
    let domain = host;
    const tmpArr = host.split('.');
    if (tmpArr. length > 2) {
      tmpArr.shift();
      domain = tmpArr.join('.');
    }
    return domain
  }

  /**
   * Format configuration tasks
   * @param isAll { boolean } - Optional. By default, only the configuration tasks under the current domain name or host will be formatted. If true is passed in, all task configurations under the domain name will be formatted.
   */
  formatTCC (isAll) {
    const t = this;
    const keys = Object.keys(t.conf);
    const domain = t.getDomain();
    const host = window.location.host;

    function formatter (item) {
      const defObj = {
        include: /^.*/,
        exclude: /\t/
      };
      item.include = item.include || defObj.include;
      item.exclude = item.exclude || defObj.exclude;
      return item
    }

    const result = {};
    keys.forEach(function (key) {
      let item = t[key];
      if (isObj$1(item)) {
        if (isAll) {
          item = formatter(item);
          result[key] = item;
        } else {
          if (key === host || key === domain) {
            item = formatter(item);
            result[key] = item;
          }
        }
      }
    });
    return result
  }

  /* Determine whether the provided configuration task is applicable to the current URL */
  isMatch (taskConf) {
    const url = window.location.href;
    let isMatch = false;
    if (!taskConf.include && !taskConf.exclude) {
      isMatch = true;
    } else {
      if (taskConf.include && taskConf.include.test(url)) {
        isMatch = true;
      }
      if (taskConf.exclude && taskConf.exclude.test(url)) {
        isMatch = false;
      }
    }
    return isMatch
  }

  /**
   * Get task configuration, only the task configuration information under the current domain name can be obtained
   * @param taskName {string} - optionally specifies a specific task, and returns all types of task configurations by default
   */
  getTaskConfig () {
    const t = this;
    if (!t._hasFormatTCC_) {
      t.formatTCC();
      t._hasFormatTCC_ = true;
    }
    const domain = t.getDomain();
    const taskConf = t.conf[window.location.host] || t.conf[domain];

    if (taskConf && t.isMatch(taskConf)) {
      return taskConf
    }

    return {}
  }

  /**
   * Execute the corresponding tasks under the current page
   * @param taskName {object|string} - required, you can directly pass in the task configuration object, or you can use the string information of the task name to find out whether there is a task that needs to be executed.
   * @param data {object} - optional, data passed to the callback function
   */
  doTask (taskName, data) {
    const t = this;
    let isDo = false;
    if (!taskName) return isDo
    const taskConf = isObj$1(taskName) ? taskName : t.getTaskConfig();

    if (!isObj$1(taskConf) || !taskConf[taskName]) return isDo

    const task = taskConf[taskName];

    if (task) {
      isDo = t.doTaskFunc(taskName, taskConf, data);
    }

    return isDo
  }
};

class Debug {
  constructor (config = {}) {
    this.config = {
      msg: '[Debug Msg]',
      /* Display call stack information */
      trace: false,
      /* Whether to put the call stack information and the information to be printed in a group and fold it. If it is output directly, it will look very messy when there is a large amount of information, so the default is true */
      traceGroup: true,
      printTime: false,

      /* Uniformly set font color, background color, other styles, etc. */
      color: '#000000',
      backgroundColor: 'transparent',
      style: '',

      ...config,

      /* Set different font colors, background colors, other styles, etc. for different debugging methods */
      colorMap: {
        info: '#2274A5',
        log: '#95B46A',
        warn: '#F5A623',
        error: '#D33F49',
        ...config.colorMap || {}
      },
      backgroundColorMap: {
        info: '',
        log: '',
        warn: '',
        error: '',
        ...config.backgroundColorMap || {}
      },
      styleMap: {
        info: '',
        log: '',
        warn: '',
        error: '',
        ...config.styleMap || {}
      }
    };

    const debugMethodList = ['log', 'error', 'info', 'warn'];
    debugMethodList.forEach((name) => {
      this[name] = this.createDebugMethod(name);
    });
  }

  create (msg) {
    return newDebug(msg)
  }

  createDebugMethod (name) {
    name = name || 'info';

    const { msg, color, colorMap, backgroundColor, backgroundColorMap, style, styleMap, printTime, trace, traceGroup } = this.config;
    const textColor = colorMap[name] || color;
    const bgColor = backgroundColorMap[name] || backgroundColor;
    const customStyle = styleMap[name] || style;

    return function () {
      if (!window._debugMode_) {
        return false
      }

      const arg = Array.from(arguments);
      const arg0 = arg[0];
      arg.unshift(`color: ${textColor}; background-color: ${bgColor}; ${customStyle}`);

      let timeStr = '';

      if (printTime) {
        const curTime = new Date();
        const H = curTime.getHours();
        const M = curTime.getMinutes();
        const S = curTime.getSeconds();
        timeStr = `[${H}:${M}:${S}] `;
      }

      arg.unshift(`%c ${timeStr}${msg} `);

      if (trace) {
        if (traceGroup) {
          const arg1Str = typeof arg0 === 'string' ? arg0 : Object.prototype.toString.call(arg0);
          console.groupCollapsed(`%c ${timeStr}${msg} ${arg1Str}`, `color: ${textColor}; background-color: ${bgColor}; ${customStyle}`);
          window.console[name].apply(console, arg);
          console.trace();
          console.groupEnd();
        } else {
          window.console[name].apply(console, arg);
          console.trace();
        }
      } else {
        window.console[name].apply(window.console, arg);
      }
    }
  }

  isDebugMode () {
    return Boolean(window._debugMode_)
  }
}

// function demo () {
// window._debugMode_ = true
// window.debug = new Debug({
// msg: '[Debug Message]',
// colorMap: {
// info: '#FFFFFF',
// log: '#FFFFFF'
// },
// backgroundColorMap: {
// info: '#2274A5',
// log: '#95B46A'
// },
// style: 'font-size: 22px; font-weight: bold; padding: 2px 4px; border-radius: 2px;',
// trace: true,
// traceGroup: true,
// printTime: true
// })

// window.debug.log('debug mode is on', window.debug)
// window.debug.info('debug mode is on', window.debug)
// window.debug.warn('debug mode is on', window.debug)
// window.debug.error('debug mode is on', window.debug)
// }
// demo()

var Debug$1 = new Debug();

var debug = Debug$1.create({
  msg: '[H5player Msg]',
  trace: false,
  traceGroup: true,
  printTime: false
});

const $q = function (str) { return document.querySelector(str) };

/**
 * Task Control Center
 * Used to configure all tasks that cannot be processed universally. For example, different websites have different full-screen methods. The full-screen logic of the website itself must be called to ensure that subtitles, barrages, etc. work properly.
 * */

const taskConf = {
  /**
   * Configuration example
   * The parent key name corresponds to the first-level domain name.
   * The related function name corresponding to the child key name, the click selector to be triggered by the key value or the related function to be called.
   * All child key values ​​support triggering using selectors or function calls
   * If a child is configured, use the child configuration logic to operate, otherwise use the default logic
   * Note: Except for the two child key names include and exclude, these two are used for URL range matching.
   * */
  'demo.demo': {
    // disable: true, // Disable all functions of the plug-in under this domain name
    init: function (h5Player, taskConf) {},
    fullScreen: '.fullscreen-btn',
    exitFullScreen: '.exit-fullscreen-btn',
    webFullScreen: function () {},
    exitWebFullScreen: '.exit-fullscreen-btn',
    autoPlay: '.player-start-btn',
    // pause: ['.player-pause', '.player-pause02'], //When multiple situations correspond to different selectors, you can use an array. The plug-in will traverse the selectors until it finds one that is available.
    pause: '.player-pause',
    play: '.player-play',
    afterPlay: function (h5Player, taskConf) {},
    afterPause: function (h5Player, taskConf) {},
    switchPlayStatus: '.player-play',
    playbackRate: function () {},
    // playbackRate: true, // When setting true for a function, it means using the website's own capabilities to control the video and ignoring the capabilities of the plug-in.
    currentTime: function () {},
    addCurrentTime: '.add-currenttime',
    subtractCurrentTime: '.subtract-currenttime',
    // Customize the execution method of shortcut keys. If it is a key combination, it must be in the order ctrl-->shift-->alt. If there is no shortcut key, it can be ignored. The key name must be all lowercase.
    shortcuts: {
      /* Register shortcut keys to perform custom callback operations*/
      register: [
        'ctrl+shift+alt+c',
        'ctrl+shift+c',
        'ctrl+alt+c',
        'ctrl+c',
        'c'
      ],
      /* Custom shortcut key callback operation */
      callback: function (h5Player, taskConf, data) {
        const { event, player } = data;
        console.log(event, player);
      }
    },

    /* Prevent the website’s own speed regulation behavior and enhance the ability to break through speed regulation restrictions*/
    blockSetPlaybackRate: true,
    /* Prevent the website’s own playback progress control logic and enhance the ability to break through progress control restrictions*/
    blockSetCurrentTime: true,
    /* Prevent the website’s own volume control logic and eliminate the website’s own tuning interference*/
    blockSetVolume: true,

    /* The path information that needs to be included in the current domain name. By default, all paths available in the entire domain name must be regular */
    include: /^.*/,
    /* Path information that needs to be excluded under the current domain name. By default, any path is not excluded and must be regular */
    exclude: /\t/
  },
  'youtube.com': {
    init: function (h5Player, taskConf) {
      if (h5Player.hasBindSkipAdEvents) { return }
      const startTime = new Date().getTime();
      let skipCount = 0;

      const skipHandler = (element) => {
        const endTime = new Date().getTime();
        const time = endTime - startTime;
        /* Premature triggering will result in ads that cannot be skipped*/
        if (time < 3000) {
          return false
        }

        /* Does not trigger when the page is invisible*/
        if (document. hidden) {
          return false
        }

        element.click();
        skipCount++;

        debug.log('youtube.com ad skip count', skipCount);
      };

      ready('.ytp-ad-skip-button', function (element) {
        skipHandler(element);
      });

      ready('.ytp-ad-skip-button-modern', function (element) {
        skipHandler(element);
      });

      setInterval(function () {
        const adSkipBtn = document.querySelector('.ytp-ad-skip-button');
        const adSkipBtnModern = document.querySelector('.ytp-ad-skip-button-modern');
        adSkipBtn && skipHandler(adSkipBtn);
        adSkipBtnModern && skipHandler(adSkipBtnModern);
      }, 1000);

      h5Player.hasBindSkipAdEvents = true;
    },
    webFullScreen: 'button.ytp-size-button',
    fullScreen: 'button.ytp-fullscreen-button',
    next: '.ytp-next-button',
    afterPlay: function (h5Player, taskConf) {
      /* Solve the problem of subtitle display stagnation */
      setTimeout(() => { h5Player.setCurrentTimeUp(0.01, true); }, 0);

      /* Solve the problem of the loading icon remaining after shortcut keys are paused and played */
      const player = h5Player.player();
      const playerwWrap = player.closest('.html5-video-player');

      if (!playerwWrap) {
        return
      }

      playerwWrap.classList.add('ytp-autohide', 'playing-mode');
      clearTimeout(playerwWrap.autohideTimer);
      playerwWrap.autohideTimer = setTimeout(() => {
        playerwWrap.classList.add('ytp-autohide', 'playing-mode');
      }, 1000);

      if (!playerwWrap.hasBindCustomEvents) {
        const mousemoveHander = (event) => {
          playerwWrap.classList.remove('ytp-autohide', 'ytp-hide-info-bar');

          clearTimeout(playerwWrap.mousemoveTimer);
          playerwWrap.mousemoveTimer = setTimeout(() => {
            if (!player.paused) {
              playerwWrap.classList.add('ytp-autohide', 'ytp-hide-info-bar');
            }
          }, 1000 * 2);
        };

        const clickHander = (event) => {
          h5Player.switchPlayStatus();
          mousemoveHander();
        };

        player.addEventListener('mousemove', mousemoveHander);
        player.addEventListener('click', clickHander);

        playerwWrap.hasBindCustomEvents = true;
      }

      const spinner = playerwWrap.querySelector('.ytp-spinner');

      if (spinner) {
        const hiddenSpinner = () => { spinner && (spinner.style.visibility = 'hidden'); };
        const visibleSpinner = () => { spinner && (spinner.style.visibility = 'visible'); };

        /* Immediately hide the spinner when clicking play */
        hiddenSpinner();

        clearTimeout(playerwWrap.spinnerTimer);
        playerwWrap.spinnerTimer = setTimeout(() => {
          /* Set the spinner to none after 1 second and restore the visible state of the spinner so that other logic can still correctly control the visible and hidden state of the spinner*/
          spinner.style.display = 'none';
          visibleSpinner();
        }, 1000);
      }
    },
    afterPause: function (h5Player, taskConf) {
      const player = h5Player.player();
      const playerwWrap = player.closest('.html5-video-player');

      if (!playerwWrap) return

      playerwWrap.classList.remove('ytp-autohide', 'playing-mode');
      playerwWrap.classList.add('paused-mode');
      clearTimeout(playerwWrap.autohideTimer);
    },
    shortcuts: {
      register: [
        'escape'
      ],
      callback: function (h5Player, taskConf, data) {
        const { event } = data;
        if (event.keyCode === 27) {
          /* Cancel playing the next recommended video*/
          if (document.querySelector('.ytp-upnext').style.display !== 'none') {
            document.querySelector('.ytp-upnext-cancel-button').click();
          }
        }
      }
    }
  },
  'netflix.com': {
    // Stop using all plug-in functions under Netflix
    // disable: true,
    fullScreen: 'button.button-nfplayerFullscreen',
    addCurrentTime: 'button.button-nfplayerFastForward',
    subtractCurrentTime: 'button.button-nfplayerBackTen',
    /**
     * Use Netflix's own speed adjustment, because currently the plug-in cannot solve the service interruption problem caused by speed adjustment
     * https://github.com/xxxily/h5player/issues/234
     * https://github.com/xxxily/h5player/issues/317
     * https://github.com/xxxily/h5player/issues/381
     * https://github.com/xxxily/h5player/issues/179
     * https://github.com/xxxily/h5player/issues/147
     */
    playbackRate: true,
    shortcuts: {
      /**
       *TODO
       * Some netflix users are accustomed to using the F key for full screen, so the next frame function of the F key is blocked here.
       * After the custom configuration capability is opened in the future, users can decide whether to block it.
       */
      register: [
        'f'
      ],
      callback: function (h5Player, taskConf, data) {
        return true
      }
    }
  },
  'bilibili.com': {
    fullScreen: function () {
      const fullScreen = $q('.bpx-player-ctrl-full') || $q('.squirtle-video-fullscreen') || $q('.bilibili-player-video-btn-fullscreen');
      if (fullScreen) {
        fullScreen.click();
        return true
      }
    },
    webFullScreen: function () {
      const oldWebFullscreen = $q('.bilibili-player-video-web-fullscreen');
      const webFullscreenEnter = $q('.bpx-player-ctrl-web-enter') || $q('.squirtle-pagefullscreen-inactive');
      const webFullscreenLeave = $q('.bpx-player-ctrl-web-leave') || $q('.squirtle-pagefullscreen-active');
      if (oldWebFullscreen || (webFullscreenEnter && webFullscreenLeave)) {
        const webFullscreen = oldWebFullscreen || (getComputedStyle(webFullscreenLeave).display === 'none' ? webFullscreenEnter : webFullscreenLeave);
        webFullscreen.click();

        /* Cancel the focus of the barrage frame, interfering with the operation of shortcut keys*/
        setTimeout(function () {
          const danmaku = $q('.bpx-player-dm-input') || $q('.bilibili-player-video-danmaku-input');
          danmaku && danmaku.blur();
        }, 1000 * 0.1);

        return true
      }
    },
    autoPlay: ['.bpx-player-ctrl-play', '.squirtle-video-start', '.bilibili-player-video-btn-start'],
    switchPlayStatus: ['.bpx-player-ctrl-play', '.squirtle-video-start', '.bilibili-player-video-btn-start'],
    next: ['.bpx-player-ctrl-next', '.squirtle-video-next', '.bilibili-player-video-btn-next', '.bpx-player-ctrl-btn[aria-label= "Next"]'],
    init: function (h5Player, taskConf) {},
    shortcuts: {
      register: [
        'escape'
      ],
      callback: function (h5Player, taskConf, data) {
        const { event } = data;
        if (event.keyCode === 27) {
          /* Exit the full screen page*/
          const oldWebFullscreen = $q('.bilibili-player-video-web-fullscreen');
          if (oldWebFullscreen && oldWebFullscreen.classList.contains('closed')) {
            oldWebFullscreen.click();
          } else {
            const webFullscreenLeave = $q('.bpx-player-ctrl-web-leave') || $q('.squirtle-pagefullscreen-active');
            if (getComputedStyle(webFullscreenLeave).display !== 'none') {
              webFullscreenLeave.click();
            }
          }
        }
      }
    }
  },
  't.bilibili.com': {
    fullScreen: 'button[name="fullscreen-button"]'
  },
  'live.bilibili.com': {
    init: function () {
      if (!JSON._stringifySource_) {
        JSON._stringifySource_ = JSON.stringify;

        JSON.stringify = function (arg1) {
          try {
            return JSON._stringifySource_.apply(this, arguments)
          } catch (e) {
            console.error('JSON.stringify interpretation error:', e, arg1);
          }
        };
      }
    },
    fullScreen: '.bilibili-live-player-video-controller-fullscreen-btn button',
    webFullScreen: '.bilibili-live-player-video-controller-web-fullscreen-btn button',
    switchPlayStatus: '.bilibili-live-player-video-controller-start-btn button'
  },
  'acfun.cn': {
    fullScreen: '[data-bind-key="screenTip"]',
    webFullScreen: '[data-bind-key="webTip"]',
    switchPlayStatus: function (h5player) {
      /* Unable to seize control, had to delay judgment on whether to intervene*/
      const player = h5player.player();
      const status = player.paused;
      setTimeout(function () {
        if (status === player.paused) {
          if (player.paused) {
            player.play();
          } else {
            player.pause();
          }
        }
      }, 200);
    }
  },
  'ixigua.com': {
    fullScreen: ['xg-fullscreen.xgplayer-fullscreen', '.xgplayer-control-item__entry[aria-label="full screen"]', '.xgplayer-control-item__entry[aria-label="Exit full screen"]'] ,
    webFullScreen: ['xg-cssfullscreen.xgplayer-cssfullscreen', '.xgplayer-control-item__entry[aria-label="Theatre Mode"]', '.xgplayer-control-item__entry[aria-label="Exit Theater Mode"] ']
  },
  'tv.sohu.com': {
    fullScreen: 'button[data-title="Web page full screen"]',
    webFullScreen: 'button[data-title="Full screen"]'
  },
  'iqiyi.com': {
    fullScreen: '.iqp-btn-fullscreen',
    webFullScreen: '.iqp-btn-webscreen',
    next: '.iqp-btn-next',
    init: function (h5Player, taskConf) {
      //Hide watermark
      hideDom('.iqp-logo-box');
      // Remove paused ads
      window.GM_addStyle(`
          div[templatetype="common_pause"]{ display:none }
          .iqp-logo-box{ display:none !important }
      `);
    }
  },
  'youku.com': {
    fullScreen: '.control-fullscreen-icon',
    next: '.control-next-video',
    init: function (h5Player, taskConf) {
      //Hide watermark
      hideDom('.youku-layer-logo');
    }
  },
  'ted.com': {
    fullScreen: 'button.Fullscreen'
  },
  'qq.com': {
    pause: '.container_inner .txp-shadow-mod',
    play: '.container_inner .txp-shadow-mod',
    shortcuts: {
      register: ['c', 'x', 'z', '1', '2', '3', '4'],
      callback: function (h5Player, taskConf, data) {
        const { event } = data;
        const key = event.key.toLowerCase();
        const keyName = 'customShortcuts_' + key;

        if (!h5Player[keyName]) {
          /* Press the shortcut key for the first time to use the default logic to adjust the speed */
          h5Player[keyName] = {
            time: Date.now(),
            playbackRate: h5Player.playbackRate
          };
          return false
        } else {
          /* Operations within 200ms after the first operation are speed-regulated by default logic*/
          if (Date.now() - h5Player[keyName].time < 200) {
            return false
          }

          /* Determine whether downgrade processing is required and use sessionStorage for speed adjustment*/
          if (h5Player[keyName] === h5Player.playbackRate || h5Player[keyName] === true) {
            if (window.sessionStorage.playbackRate && /(c|x|z|1|2|3|4)/.test(key)) {
              const curSpeed ​​= Number(window.sessionStorage.playbackRate);
              const perSpeed ​​= curSpeed ​​- 0.1 >= 0 ? curSpeed ​​- 0.1 : 0.1;
              const nextSpeed ​​= curSpeed ​​+ 0.1 <= 4 ? curSpeed ​​+ 0.1 : 4;
              let targetSpeed ​​= curSpeed;
              switch (key) {
                case 'z' :
                  targetSpeed ​​= 1;
                  break
                case 'c' :
                  targetSpeed ​​= nextSpeed;
                  break
                case 'x' :
                  targetSpeed ​​= perSpeed;
                  break
                default :
                  targetSpeed ​​= Number(key);
                  break
              }

              window.sessionStorage.playbackRate = targetSpeed;
              h5Player.setCurrentTimeUp(0.01, true);
              h5Player.setPlaybackRate(targetSpeed, true);
              return true
            }

            /* Indicates that the default speed adjustment scheme is invalid and the sessionStorage speed adjustment scheme needs to be enabled*/
            h5Player[keyName] = true;
          } else {
            /* Marks the default speed adjustment scheme as taking effect*/
            h5Player[keyName] = false;
          }
        }
      }
    },
    fullScreen: 'txpdiv[data-report="window-fullscreen"]',
    webFullScreen: 'txpdiv[data-report="browser-fullscreen"]',
    next: 'txpdiv[data-report="play-next"]',
    init: function (h5Player, taskConf) {
      //Hide watermark
      hideDom('.txp-watermark');
      hideDom('.txp-watermark-action');
    },
    include: /(v.qq|sports.qq)/
  },
  'pan.baidu.com': {
    fullScreen: function (h5Player, taskConf) {
      h5Player.player().parentNode.querySelector('.vjs-fullscreen-control').click();
    }
  },
  // 'pornhub.com': {
  // fullScreen: 'div[class*="icon-fullscreen"]',
  // webFullScreen: 'div[class*="icon-size-large"]'
  // },
  'facebook.com': {
    fullScreen: function (h5Player, taskConf) {
      const actionBtn = h5Player.player().parentNode.querySelectorAll('button');
      if (actionBtn && actionBtn.length > 3) {
        /* Simulate clicking the second to last button */
        actionBtn[actionBtn.length - 2].click();
        return true
      }
    },
    webFullScreen: function (h5Player, taskConf) {
      const actionBtn = h5Player.player().parentNode.querySelectorAll('button');
      if (actionBtn && actionBtn.length > 3) {
        /* Simulate clicking the second to last button */
        actionBtn[actionBtn.length - 2].click();
        return true
      }
    },
    shortcuts: {
      /* Press the esc key in video mode to automatically return to the previous interface*/
      register: [
        'escape'
      ],
      /* Custom shortcut key callback operation */
      callback: function (h5Player, taskConf, data) {
        eachParentNode(h5Player.player(), function (parentNode) {
          if (parentNode.getAttribute('data-fullscreen-container') === 'true') {
            const goBackBtn = parentNode.parentNode.querySelector('div>a>i>u');
            if (goBackBtn) {
              goBackBtn.parentNode.parentNode.click();
            }
            return true
          }
        });
      }
    }
  },
  'douyu.com': {
    fullScreen: function (h5Player, taskConf) {
      const player = h5Player.player();
      const container = player._fullScreen_.getContainer();
      if (player._isFullScreen_) {
        container.querySelector('div[title="Exit window full screen"]').click();
      } else {
        container.querySelector('div[title="Window full screen"]').click();
      }
      player._isFullScreen_ = !player._isFullScreen_;
      return true
    },
    webFullScreen: function (h5Player, taskConf) {
      const player = h5Player.player();
      const container = player._fullScreen_.getContainer();
      if (player._isWebFullScreen_) {
        container.querySelector('div[title="Exit full screen web page"]').click();
      } else {
        container.querySelector('div[title="Web page full screen"]').click();
      }
      player._isWebFullScreen_ = !player._isWebFullScreen_;
      return true
    }
  },
  'open.163.com': {
    init: function (h5Player, taskConf) {
      const player = h5Player.player();
      /**
       * Do not set the CORS flag so that cross-domain screenshots can be taken
       * https://developer.mozilla.org/zh-CN/docs/Web/HTML/CORS_enabled_image
       * https://developer.mozilla.org/zh-CN/docs/Web/HTML/CORS_settings_attributes
       */
      player.setAttribute('crossOrigin', 'anonymous');
    }
  },
  'agefans.tv': {
    init: function (h5Player, taskConf) {
      h5Player.player().setAttribute('crossOrigin', 'anonymous');
    }
  },
  'chaoxing.com': {
    fullScreen: '.vjs-fullscreen-control'
  },
  'yixi.tv': {
    init: function (h5Player, taskConf) {
      h5Player.player().setAttribute('crossOrigin', 'anonymous');
    }
  },
  'douyin.com': {
    fullScreen: '.xgplayer-fullscreen',
    webFullScreen: '.xgplayer-page-full-screen',
    next: ['.xgplayer-playswitch-next'],
    init: function (h5Player, taskConf) {
      h5Player.player().setAttribute('crossOrigin', 'anonymous');

      const player = h5Player.player();
      const wrapEl = player.closest('div[data-e2e="feed-item"]');

      const setVideoTitle = () => {
        if (wrapEl && wrapEl.querySelector('.video-info-detail')) {
          const videoInfo = wrapEl.querySelector('.video-info-detail');
          const accountNameEL = videoInfo.querySelector('.account-name');
          /* Remove the @ symbol in front of accountName*/
          const accountName = accountNameEL.innerText.replace(/^@*/, '');

          const titleEl = videoInfo.querySelector('.title');
          const titleText = titleEl.innerText.trim();
          const title = `${titleText} - ${accountName}`.replace(/[\\/:*?"<>|]/g, '-');

          wrapEl.setAttribute('data-title', title);
          player.setAttribute('data-title', title);
          document.title = title;
          wrapEl.removeEventListener('mouseover', setVideoTitle);
        }
      };

      wrapEl && wrapEl.addEventListener('mouseover', setVideoTitle);
      setTimeout(setVideoTitle, 1200);
    }
  },
  'live.douyin.com': {
    fullScreen: '.xgplayer-fullscreen',
    webFullScreen: '.xgplayer-page-full-screen',
    next: ['.xgplayer-playswitch-next'],
    init: function (h5Player, taskConf) {
      h5Player.player().setAttribute('crossOrigin', 'anonymous');
    }
  },
  'zhihu.com': {
    fullScreen: ['button[aria-label="Full Screen"]', 'button[aria-label="Exit Full Screen"]'],
    play: function (h5Player, taskConf, data) {
      const player = h5Player.player();
      if (player && player.parentNode && player.parentNode.parentNode) {
        const maskWrap = player.parentNode.parentNode.querySelector('div~div:nth-child(3)');
        if (maskWrap) {
          const mask = maskWrap.querySelector('div');
          if (mask && mask.innerText === '') {
            mask.click();
          }
        }
      }
    },
    init: function (h5Player, taskConf) {
      h5Player.player().setAttribute('crossOrigin', 'anonymous');
    }
  },
  'weibo.com': {
    fullScreen: ['button.wbpv-fullscreen-control'],
    // webFullScreen: ['div[title="Close pop-up layer"]', 'div.wbpv-open-layer-button']
    webFullScreen: ['div.wbpv-open-layer-button']
  },
  'twitter.com': {
    init: function (h5Player, taskConf) {
      const player = h5Player.player();
      const wrapEl = player.closest('article[data-testid="tweet"]');

      const setVideoTitle = () => {
        if (wrapEl && !wrapEl.getAttribute('data-title') && wrapEl.querySelector('div[data-testid="tweetText"]')) {
          const titleEl = wrapEl.querySelector('div[data-testid="tweetText"]');
          const titleText = titleEl.innerText.trim();
          const title = `${titleText}`.replace(/[\\/:*?"<>|]/g, '-');

          wrapEl.setAttribute('data-title', title);
          player.setAttribute('data-title', title);
          wrapEl.removeEventListener('mouseover', setVideoTitle);
        }
      };

      wrapEl && wrapEl.addEventListener('mouseover', setVideoTitle);
      setTimeout(setVideoTitle, 600);
    }
  }
};

function h5PlayerTccInit (h5Player) {
  return new TCC$1(taskConf, function (taskName, taskConf, data) {
    try {
      const task = taskConf[taskName];
      const wrapDom = h5Player.getPlayerWrapDom();

      if (!task) { return }

      if (taskName === 'shortcuts') {
        if (isObj$1(task) && task.callback instanceof Function) {
          return task.callback(h5Player, taskConf, data)
        }
      } else if (task instanceof Function) {
        try {
          return task(h5Player, taskConf, data)
        } catch (e) {
          debug.error('The execution of the custom function in the task configuration center failed:', taskName, taskConf, data, e);
          return false
        }
      } else if (typeof task === 'boolean') {
        return task
      } else {
        const selectorList = Array.isArray(task) ? task : [task];
        for (let i = 0; i < selectorList.length; i++) {
          const selector = selectorList[i];

          /* Trigger click event on selector*/
          if (wrapDom && wrapDom.querySelector(selector)) {
          // Search in the parent element of the video to be as compatible with the logic of multiple instances as possible
            wrapDom.querySelector(selector).click();
            return true
          } else if (document.querySelector(selector)) {
            document.querySelector(selector).click();
            return true
          }
        }
      }
    } catch (e) {
      debug.error('The custom task execution in the task configuration center failed:', taskName, taskConf, data, e);
      return false
    }
  })
}

function mergeTaskConf (config) {
  return mergeObj(taskConf, config)
}

/* ua camouflage configuration */
const fakeConfig = {
  // 'tv.cctv.com': userAgentMap.iPhone.chrome,
  // 'v.qq.com': userAgentMap.iPad.chrome,
  'open.163.com': userAgentMap.iPhone.chrome,
  'm.open.163.com': userAgentMap.iPhone.chrome,
  /* Non-members of Baidu Disk will use their own dedicated players, making it impossible to use h5player, so they need to solve this problem by disguising ua*/
  'pan.baidu.com': userAgentMap.iPhone.safari
};

function setFakeUA (ua) {
  const host = window.location.host;
  ua = ua || fakeConfig[host];

  /**
   * Dynamically determine whether ua disguise is required
   *The following plans are temporarily unavailable
   * Due to inconsistent domain names after some websites jump to mobile terminals, cross-domain problems occur.
   * As a result, the camouflage configuration cannot be synchronized and jumps continuously in an infinite loop.
   *eg. open.163.com
   * */
  // let customUA = window.localStorage.getItem('_h5_player_user_agent_')
  // debug.log(customUA, window.location.href, window.navigator.userAgent, document.referrer)
  // if (customUA) {
  // fakeUA(customUA)
  // alert(customUA)
  // } else {
  // alert('ua false')
  // }

  ua && fakeUA(ua);
}

/**
 * Element full screen API, also compatible with web page full screen
 */

hackAttachShadow();
class FullScreen {
  constructor (dom, pageMode) {
    this.dom = dom;
    this.shadowRoot = null;
    this.fullStatus = false;
    //Default full-screen mode, if pageMode is passed in, it means that the page is in full-screen operation.
    this.pageMode = pageMode || false;
    const fullPageStyle = `
      ._webfullscreen_box_size_ {
				width: 100% !important;
				height: 100% !important;
			}
      ._webfullscreen_ {
        display: block !important;
				position: fixed !important;
				width: 100% !important;
				height: 100% !important;
				top: 0 !important;
				left: 0 !important;
				background: #000 !important;
				z-index: 999999 !important;
			}
			._webfullscreen_zindex_ {
				z-index: 999999 !important;
			}
		`;
    /* Insert the style into the global page */
    if (!window._hasInitFullPageStyle_ && window.GM_addStyle) {
      window.GM_addStyle(fullPageStyle);
      window._hasInitFullPageStyle_ = true;
    }

    /* Insert styles into shadowRoot*/
    const shadowRoot = isInShadow(dom, true);
    if (shadowRoot) {
      this.shadowRoot = shadowRoot;
      loadCSSText(fullPageStyle, 'fullPageStyle', shadowRoot);
    }

    const t = this;
    window.addEventListener('keyup', (event) => {
      const key = event.key.toLowerCase();
      if (key === 'escape') {
        if (t.isFull()) {
          t.exit();
        } else if (t.isFullScreen()) {
          t.exitFullScreen();
        }
      }
    }, true);

    this.getContainer();
  }

  eachParentNode (dom, fn) {
    let parent = dom.parentNode;
    while (parent && parent.classList) {
      const isEnd = fn(parent, dom);
      parent = parent.parentNode;
      if (isEnd) {
        break
      }
    }
  }

  getContainer () {
    const t = this;
    if (t._container_) return t._container_

    const d = t.dom;
    const domBox = d.getBoundingClientRect();
    let container = d;
    t.eachParentNode(d, function (parentNode) {
      const noParentNode = !parentNode || !parentNode.getBoundingClientRect;
      if (noParentNode || parentNode.getAttribute('data-fullscreen-container')) {
        container = parentNode;
        return true
      }

      const parentBox = parentNode.getBoundingClientRect();
      const isInsideTheBox = parentBox.width <= domBox.width && parentBox.height <= domBox.height;
      if (isInsideTheBox) {
        container = parentNode;
      } else {
        return true
      }
    });

    container.setAttribute('data-fullscreen-container', 'true');
    t._container_ = container;
    return container
  }

  isFull () {
    return this.dom.classList.contains('_webfullscreen_') || this.fullStatus
  }

  isFullScreen () {
    const d = document;
    return !!(d.fullscreen || d.webkitIsFullScreen || d.mozFullScreen ||
      d.fullscreenElement || d.webkitFullscreenElement || d.mozFullScreenElement)
  }

  enterFullScreen () {
    const c = this.getContainer();
    const enterFn = c.requestFullscreen || c.webkitRequestFullScreen || c.mozRequestFullScreen || c.msRequestFullScreen;
    enterFn && enterFn.call(c);
  }

  enter () {
    const t = this;
    if (t.isFull()) return
    const container = t.getContainer();
    let needSetIndex = false;
    if (t.dom === container) {
      needSetIndex = true;
    }

    function addFullscreenStyleToParentNode (node) {
      t.eachParentNode(node, function (parentNode) {
        parentNode.classList.add('_webfullscreen_');
        if (container === parentNode || needSetIndex) {
          needSetIndex = true;
          parentNode.classList.add('_webfullscreen_zindex_');
        }
      });
    }
    addFullscreenStyleToParentNode(t.dom);

    /* Determine whether the dom itself needs to be added with the webfullscreen style*/
    if (t.dom.parentNode) {
      const domBox = t.dom.getBoundingClientRect();
      const domParentBox = t.dom.parentNode.getBoundingClientRect();
      if (domParentBox.width - domBox.width >= 5) {
        t.dom.classList.add('_webfullscreen_');
      }

      if (t.shadowRoot && t.shadowRoot._shadowHost) {
        const shadowHost = t.shadowRoot._shadowHost;
        const shadowHostBox = shadowHost.getBoundingClientRect();
        if (shadowHostBox.width <= domBox.width) {
          shadowHost.classList.add('_webfullscreen_');
          addFullscreenStyleToParentNode(shadowHost);
        }
      }
    }

    const fullScreenMode = !t.pageMode;
    if (fullScreenMode) {
      t.enterFullScreen();
    }

    this.fullStatus = true;
  }

  exitFullScreen () {
    const d = document;
    const exitFn = d.exitFullscreen || d.webkitExitFullscreen || d.mozCancelFullScreen || d.msExitFullscreen;
    exitFn && exitFn.call(d);
  }

  exit () {
    const t = this;

    function removeFullscreenStyleToParentNode (node) {
      t.eachParentNode(node, function (parentNode) {
        parentNode.classList.remove('_webfullscreen_');
        parentNode.classList.remove('_webfullscreen_zindex_');
      });
    }
    removeFullscreenStyleToParentNode(t.dom);

    t.dom.classList.remove('_webfullscreen_');

    if (t.shadowRoot && t.shadowRoot._shadowHost) {
      const shadowHost = t.shadowRoot._shadowHost;
      shadowHost.classList.remove('_webfullscreen_');
      removeFullscreenStyleToParentNode(shadowHost);
    }

    const fullScreenMode = !t.pageMode;
    if (fullScreenMode || t.isFullScreen()) {
      t.exitFullScreen();
    }
    this.fullStatus = false;
  }

  toggle () {
    this.isFull() ? this.exit() : this.enter();
  }
}

/*!
 * @name videoCapturer.js
 * @version 0.0.1
 * @author Blaze
 * @date 2019/9/21 12:03
 * @github https://github.com/xxxily
 */

async function setClipboard (blob) {
  if (navigator.clipboard) {
    navigator.clipboard.write([
      // eslint-disable-next-line no-undef
      new ClipboardItem({
        [blob.type]: blob
      })
    ]).then(() => {
      console.info('[setClipboard] clipboard suc', blob.type);
    }).catch((e) => {
      console.error('[setClipboard] clipboard err', blob.type, e);
    });
  } else {
    console.error('The current website does not support writing data to the clipboard, see:\n https://developer.mozilla.org/en-US/docs/Web/API/Clipboard');
  }
}

var videoCapturer = {
  /**
   * Take screenshots
   * @param video {dom} - required video dom tag
   * @returns {boolean}
   */
  capture (video, download, title) {
    if (!video) return false
    const t = this;
    const currentTime = `${Math.floor(video.currentTime / 60)}'${(video.currentTime % 60).toFixed(3)}''`;
    const captureTitle = title || `${document.title}_${currentTime}`;

    /* Screenshot core logic*/
    video.setAttribute('crossorigin', 'anonymous');
    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const context = canvas.getContext('2d');
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    if (download) {
      t.download(canvas, captureTitle, video);
    } else {
      t.previe(canvas, captureTitle);
    }

    return canvas
  },
  /**
   * Preview the captured screen content
   * @param canvas
   */
  preview (canvas, title) {
    canvas.style = 'max-width:100%';
    const previewPage = window.open('', '_blank');
    previewPage.document.title = `capture preview - ${title || 'Untitled'}`;
    previewPage.document.body.style.textAlign = 'center';
    previewPage.document.body.style.background = '#000';
    previewPage.document.body.appendChild(canvas);
  },
  /**
   * canvas downloads the intercepted content
   * @param canvas
   */
  download (canvas, title, video) {
    title = title || 'videoCapturer_' + Date.now();

    try {
      /**
       * Try copying to clipboard
       * Note that some browsers do not support writing 'image/jpeg' type data to the clipboard. Image/jpg can, but the result of toBlob will be png data.
       * So here is a new 'image/png' to try to copy to the clipboard, instead of putting setClipboard(blob) in the try below
       * In addition, since the automatic downloading of the screenshot below will cause the page to be out of focus, it will also cause the copy to the clipboard to fail, so here we copy it to the clipboard first and then download it.
       */
      canvas.toBlob(function (blob) {
        setClipboard(blob);
      }, 'image/png', 0.99);
    } catch (e) {
      console.error('Unable to copy screenshot to clipboard.', e);
    }

    try {
      canvas.toBlob(function (blob) {
        const el = document.createElement('a');
        el.download = `${title}.jpg`;
        el.href = URL.createObjectURL(blob);
        el.click();
      }, 'image/jpeg', 0.99);
    } catch (e) {
      videoCapturer.previe(canvas, title);
      console.error('Video source is restricted by CORS logo, screenshots cannot be downloaded directly, see:\n https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS');
      console.error(video, e);
    }
  }
};

/**
 * Mouse event observation object
 * Used to implement penetrating response to mouse events, different from pointer-events:none
 * pointer-events:none is to set the current layer to allow penetration
 * And MouseObserver is: even if you don’t know how many layers of occlusion exist on the target, you can still respond to mouse events.
 */

class MouseObserver {
  constructor (observeOpt) {
    // eslint-disable-next-line no-undef
    this.observer = new IntersectionObserver((infoList) => {
      infoList.forEach((info) => {
        info.target.IntersectionObserverEntry = info;
      });
    }, observeOpt || {});

    this.observeList = [];
  }

  _observe (target) {
    let hasObserve = false;
    for (let i = 0; i < this.observeList.length; i++) {
      const el = this.observeList[i];
      if (target === el) {
        hasObserve = true;
        break
      }
    }

    if (!hasObserve) {
      this.observer.observe(target);
      this.observeList.push(target);
    }
  }

  _unobserve (target) {
    this.observer.unobserve(target);
    const newObserveList = [];
    this.observeList.forEach((el) => {
      if (el !== target) {
        newObserveList.push(el);
      }
    });
    this.observeList = newObserveList;
  }

  /**
   * Add event binding
   * @param target {element} -required DOM object to be bound to the event
   * @param type {string} -Required event to be bound, only mouse events are supported
   * @param listener {function} -required response function when meeting trigger conditions
   */
  on (target, type, listener, options) {
    const t = this;
    t._observe(target);

    if (!target.MouseObserverEvent) {
      target.MouseObserverEvent = {};
    }
    target.MouseObserverEvent[type] = true;

    if (!t._mouseObserver_) {
      t._mouseObserver_ = {};
    }

    if (!t._mouseObserver_[type]) {
      t._mouseObserver_[type] = [];

      window.addEventListener(type, (event) => {
        t.observeList.forEach((target) => {
          const isVisibility = target.IntersectionObserverEntry && target.IntersectionObserverEntry.intersectionRatio > 0;
          const isReg = target.MouseObserverEvent[event.type] === true;
          if (isVisibility && isReg) {
            /* Determine whether the conditions for triggering the listener event are met*/
            const bound = target.getBoundingClientRect();
            const offsetX = event.x - bound.x;
            const offsetY = event.y - bound.y;
            const isNeedTap = offsetX <= bound.width && offsetX >= 0 && offsetY <= bound.height && offsetY >= 0;

            if (isNeedTap) {
              /* Execute monitoring callback*/
              const listenerList = t._mouseObserver_[type];
              listenerList.forEach((listener) => {
                if (listener instanceof Function) {
                  listener.call(t, event, {
                    x: offsetX,
                    y: offsetY
                  }, target);
                }
              });
            }
          }
        });
      }, options);
    }

    /* Add the listening callback to the event queue */
    if (listener instanceof Function) {
      t._mouseObserver_[type].push(listener);
    }
  }

  /**
   * Unbind event
   * @param target {element} - required DOM object to release the event
   * @param type {string} -Required event to be released, only mouse events are supported
   * @param listener {function} -response function when binding events is required
   * @returns {boolean}
   */
  off (target, type, listener) {
    const t = this;
    if (!target || !type || !listener || !t._mouseObserver_ || !t._mouseObserver_[type] || !target.MouseObserverEvent || !target.MouseObserverEvent[type]) return false

    const newListenerList = [];
    const listenerList = t._mouseObserver_[type];
    let isMatch = false;
    listenerList.forEach((listenerItem) => {
      if (listenerItem === listener) {
        isMatch = true;
      } else {
        newListenerList.push(listenerItem);
      }
    });

    if (isMatch) {
      t._mouseObserver_[type] = newListenerList;

      /* The listener has been completely removed*/
      if (newListenerList.length === 0) {
        delete target.MouseObserverEvent[type];
      }

      /* Remove the observation object when MouseObserverEvent is an empty object*/
      if (JSON.stringify(target.MouseObserverEvent [type]) === '{}') {
        t._unobserve(target);
      }
    }
  }
}

/**
 * Simple i18n library
 */

class I18n {
  constructor (config) {
    this._languages ​​= {};
    this._locale = this.getClientLang();
    this._defaultLanguage = '';
    this.init(config);
  }

  init (config) {
    if (!config) return false

    const t = this;
    t._locale = config.locale || t._locale;
    /* Specify the current locale to be used, no need to specify by default, it will be read automatically */
    t._languages ​​= config.languages ​​|| t._languages;
    t._defaultLanguage = config.defaultLanguage || t._defaultLanguage;
  }

  use () {}

  t (path) {
    const t = this;
    let result = t.getValByPath(t._languages[t._locale] || {}, path);

    /* Version rollback*/
    if (!result && t._locale !== t._defaultLanguage) {
      result = t.getValByPath(t._languages[t._defaultLanguage] || {}, path);
    }

    return result || ''
  }

  /*Current language value*/
  language () {
    return this._locale
  }

  languages ​​() {
    return this._languages
  }

  changeLanguage (locale) {
    if (this._languages[locale]) {
      this._locale = locale;
      return locale
    } else {
      return false
    }
  }

  /**
   * Give a specific locale and determine whether it matches the currently set locale.
   * @param {String | Array} lang - required locale
   */
  isMatchCurLang (lang) {
    const curLang = this.language() || '';

    /* Compatible with various possible language configuration writing methods. If the current setting is: zh-CN, then the given lang contains zh-CN, zhCN, zh_CN, and zh, which are all considered to be matching */
    const curLang2 = curLang.replace('-', '');
    const curLang3 = curLang.replace('-', '_');
    const curLang4 = curLang.split('-')[0];

    if (lang && !Array.isArray(lang)) { lang = [lang]; }
    return lang.includes(curLang) || lang.includes(curLang2) || lang.includes(curLang3) || lang.includes(curLang4)
  }

  /**
   * Get the value in the object based on the text path
   * @param obj {Object} - required object to be operated on
   * @param path {String} - required path information
   * @returns {*}
   */
  getValByPath (obj, path) {
    path = path || '';
    const pathArr = path.split('.');
    let result = obj;

    /* Recursively extract the result value*/
    for (let i = 0; i < pathArr.length; i++) {
      if (!result) break
      result = result[pathArr[i]];
    }

    return result
  }

  /* Get the current locale of the client*/
  getClientLang () {
    return navigator.languages ​​? navigator.languages[0] : navigator.language
  }
}

var zhCN = {
  website: '🏠script official website',
  about: 'about',
  issues: 'issue feedback',
  faq: 'Frequently Asked Questions',
  setting: 'setting',
  hotkeys: 'shortcut keys',
  keyboardControl: 'Keyboard control',
  mouseControl: 'Mouse control',
  hotkeysDocs: 'Hotkeys documentation',
  enable: 'enable',
  disable: 'disable',
  toggleStates: 'enable/disable',
  disableHotkeysTemporarily: 'Temporarily disable hotkeys',
  toggleHotkeysTemporarily: 'Temporarily enable/disable hotkeys',
  enableHotkeys: 'Enable hotkeys',
  disableHotkeys: 'Disable hotkeys',
  enableMouseControl: 'Enable mouse control',
  disableMouseControl: 'Disable mouse control',
  donate: '👍Please give the author a cup of coffee',
  aboutDonate: 'How much reward will there be for a work with 1 million installs? ',
  aboutAuthor: 'About the author',
  recommend: '❤️ Free ChatGPT-4 ❤️',
  enableScript: 'Enable script',
  disableScript: 'Disable script',
  disableCurrentInstanceGUI: 'Close the current graphical user interface',
  disableGUITemporarily: 'Temporarily disable the graphical user interface',
  enableGUI: 'Enable graphical user interface',
  disableGUI: 'Disable graphical user interface',
  graphicalInterface: 'graphical interface',
  alwaysShowGraphicalInterface: 'Always show the graphical interface',
  openCrossOriginFramePage: 'Open cross-domain pages separately',
  disableInitAutoPlay: 'Disable automatic playback of videos on this website',
  enableInitAutoPlay: 'Allow automatic playback of videos on this website',
  restoreConfiguration: 'Restore global default configuration',
  blockSetPlaybackRate: 'Disable default speed adjustment logic',
  blockSetCurrentTime: 'Disable default playback progress control logic',
  blockSetVolume: 'Disable default volume control logic',
  unblockSetPlaybackRate: 'Allow default speed adjustment logic',
  unblockSetCurrentTime: 'Allow default playback progress control logic',
  unblockSetVolume: 'Allow default volume control logic',
  allowAcousticGain: 'Enable volume gain capability',
  notAllowAcousticGain: 'Disable volume gain capability',
  allowCrossOriginControl: 'Enable cross-domain control capability',
  notAllowCrossOriginControl: 'Disable cross-domain control capability',
  allowExperimentFeatures: 'Turn on experimental features',
  notAllowExperimentFeatures: 'Disable experimental features',
  experimentFeaturesWarning: 'Experimental features can easily cause some uncertain problems, please enable them with caution',
  useMediaDownloadTips: 'To use the download function, you need to enable the experimental function.\nExperimental functions can easily cause some uncertain problems. Are you sure you want to enable it? ',
  allowExternalCustomConfiguration: 'Enable external customization capabilities',
  notAllowExternalCustomConfiguration: 'Turn off external customization capabilities',
  changeLog: 'Update log',
  currentVersion: 'current version',
  checkVersion: 'Check if there is a new version? ',
  configFail: 'Configuration failed',
  globalSetting: 'Global Setting',
  openCustomConfigurationEditor: 'Open custom configuration editor',
  localSetting: 'For this website only',
  openDebugMode: 'Turn on debug mode',
  closeDebugMode: 'Close debug mode',
  unfoldMenu: 'Expand menu',
  foldMenu: 'fold menu',
  addGroupChat: '💬Add group chat',
  speed: 'double speed',
  capture: 'Screenshot',
  download: 'Download',
  mediaDownload: {
    enable: 'Enable media download',
    disable: 'Turn off media download',
    downloadOptions: 'Download options',
    downloading: 'The file is being downloaded. Are you sure you want to repeat this operation? ',
    hasDownload: 'The file has been downloaded. Are you sure you want to repeat this operation? ',
    confirmTitle: 'Please enter the file name',
    notSupport: 'The current media file cannot be downloaded, and the download function needs to be optimized and improved',
    notEndOfStream: 'The media data is not completely ready yet. Are you sure you want to download it? ',
    cancelAutoDownload: 'Do you want to cancel automatic download? ',
    autoDownload: 'After the media data is completely ready, will it be downloaded automatically? ',
    notFoundMediaSource: 'The corresponding media stream data was not found. The data may have been cleaned or the media elements have been removed. It is recommended to refresh the page and try again'
  },
  menu: 'menu',
  more: 'more',
  moreActions: 'More actions',
  videoFilter: 'Picture filter',
  resetFilterAndTransform: 'Image reset',
  brightnessUp: 'Increase brightness',
  brightnessDown: 'Reduce brightness',
  contrastUp: 'Increase contrast',
  contrastDown: 'Reduce contrast',
  saturationUp: 'Increase saturation',
  saturationDown: 'Reduce saturation',
  hueUp: 'Increase hue',
  hueDown: 'Reduce hue',
  blurUp: 'Increase blur',
  blurDown: 'Reduce blur',
  rotateAndMirror: 'Rotate mirror',
  rotate90: 'Rotate the screen 90 degrees',
  horizontalMirror: 'Screen horizontal mirror flip',
  verticalMirror: 'Screen vertical mirror flip',
  videoTransform: 'Screen displacement',
  translateRight: 'Move the screen to the right',
  translateLeft: 'Move the screen to the left',
  translateUp: 'Move the screen up',
  translateDown: 'Move the screen down',
  languageSettings: 'Language settings',
  default: 'default',
  autoChoose: 'Automatic selection',
  comingSoon: 'More features are being improved, so stay tuned',
  ffmpegScript: 'Audio and video merging/conversion script',
  autoGotoBufferedTime: 'Automatically follow the jump to buffer time',
  disableAutoGotoBufferedTime: 'Disable automatic following jump to buffer time',
  mouse: {
    enable: 'Enable mouse control',
    disable: 'Disable mouse control',
    longPressTime: 'How long does it take to respond to the mouse long press event'
  },
  tipsMsg: {
    playspeed: 'Play speed:',
    forward: 'Forward:',
    backward: 'Backward:',
    seconds: 'seconds',
    volume: 'Volume:',
    nextframe: 'Position: next frame',
    previousframe: 'Position: previous frame',
    stopframe: 'Stop frame:',
    play: 'play',
    pause: 'pause',
    arpl: 'Allow automatic resumption of playback progress',
    drpl: 'Disable automatic resumption of playback progress',
    brightness: 'Image brightness:',
    contrast: 'Image contrast:',
    saturation: 'Image saturation:',
    hue: 'Image hue:',
    blur: 'Image blur:',
    imgattrreset: 'Image attributes: reset',
    imgrotate: 'Screen rotation:',
    onplugin: 'Enable h5Player plug-in',
    offplugin: 'Disable h5Player plug-in',
    globalmode: 'Global mode:',
    playbackrestored: 'Restore the last playback progress for you',
    playbackrestoreoff: 'Restore playback progress function is disabled, press SHIFT+R to enable this function',
    horizontal: 'Horizontal displacement:',
    vertical: 'Vertical displacement:',
    horizontalMirror: 'horizontal mirror',
    verticalMirror: 'vertical mirror',
    videozoom: 'Video zoom ratio:'
  },
  faqList: {
    //
  }
};

var enUS = {
  website: '🏠Script Homepage',
  about: 'About',
  issues: 'Issues',
  faq: 'FAQ',
  setting: 'Setting',
  hotkeys: 'Hotkeys',
  keyboardControl: 'Keyboard Control',
  mouseControl: 'Mouse Control',
  hotkeysDocs: 'Hotkeys Docs',
  enable: 'Enable',
  disable: 'Disable',
  toggleStates: 'Enable/Disable',
  disableHotkeysTemporarily: 'Disable hotkeys temporarily',
  toggleHotkeysTemporarily: 'Toggle hotkeys temporarily',
  enableHotkeys: 'Enable hotkeys',
  disableHotkeys: 'Disable hotkeys',
  donate: '👍Donate',
  aboutDonate: 'How much the author has received?',
  aboutAuthor: 'About the author',
  enableScript: 'Enable script',
  disableScript: 'Disable script',
  disableCurrentInstanceGUI: 'Close the current graphical user interface',
  disableGUITemporarily: 'Temporarily disable the graphical interface',
  enableGUI: 'Enable Graphical User Interface',
  disableGUI: 'Disable Graphical User Interface',
  graphicalInterface: 'GraphicalInterface',
  alwaysShowGraphicalInterface: 'Always show graphical interface',
  openCrossOriginFramePage: 'Open cross-domain pages alone',
  disableInitAutoPlay: 'Prohibit autoplay of videos on this site',
  enableInitAutoPlay: 'Allow autoplay videos on this site',
  restoreConfiguration: 'Restore the global default configuration',
  blockSetPlaybackRate: 'Disable default speed regulation logic',
  blockSetCurrentTime: 'Disable default playback progress control logic',
  blockSetVolume: 'Disable default volume control logic',
  unblockSetPlaybackRate: 'Allow default speed adjustment logic',
  unblockSetCurrentTime: 'Allow default playback progress control logic',
  unblockSetVolume: 'Allow default volume control logic',
  allowAcousticGain: 'Turn on volume boost',
  notAllowAcousticGain: 'Disable volume boost ability',
  allowCrossOriginControl: 'Enable cross-domain control capability',
  notAllowCrossOriginControl: 'Disable cross-domain control capabilities',
  allowExperimentFeatures: 'Turn on experimental features',
  notAllowExperimentFeatures: 'Disable experimental features',
  experimentFeaturesWarning: 'Experimental features are likely to cause some uncertain problems, please turn on with caution',
  useMediaDownloadTips: 'To use the download capability, you need to enable experimental features.\nExperimental features can easily cause some uncertain problems. Are you sure you want to enable it?',
  allowExternalCustomConfiguration: 'Enable external customization capabilities',
  notAllowExternalCustomConfiguration: 'Turn off external customization capabilities',
  changeLog: 'Change log',
  currentVersion: 'Current version',
  checkVersion: 'Check for new version ?',
  configFail: 'Configuration failed',
  globalSetting: 'Global Settings',
  openCustomConfigurationEditor: 'Open custom configuration editor',
  localSetting: 'For this site only',
  openDebugMode: 'Enable debug mode',
  closeDebugMode: 'Turn off debug mode',
  unfoldMenu: 'Expand menu',
  foldMenu: 'Collapse menu',
  addGroupChat: '💬Add chat group',
  speed: 'Speed',
  capture: 'Capture',
  download: 'Download',
  mediaDownload: {
    enable: 'Enable media download',
    disable: 'Disable media download',
    downloadOptions: 'Download options',
    downloading: 'The file is being downloaded. Are you sure you want to execute this operation again?',
    hasDownload: 'The file has been downloaded. Are you sure you want to execute this operation again?',
    confirmTitle: 'Please enter the file name',
    notSupport: 'The current media file cannot be downloaded. The download function needs to be optimized and improved',
    notEndOfStream: 'The media data is not fully ready, are you sure you want to download it?',
    cancelAutoDownload: 'Cancel automatic download?',
    autoDownload: 'The media data is not fully ready, do you want to automatically download it when it is ready?',
    notFoundMediaSource: 'The corresponding media stream data was not found, the data may have been cleared or the media element has been removed, it is recommended to refresh the page and try again'
  },
  menu: 'Menu',
  more: 'More',
  moreActions: 'More actions',
  videoFilter: 'Video filter',
  resetFilterAndTransform: 'Reset filter and transform',
  brightnessUp: 'Increase brightness',
  brightnessDown: 'Decrease brightness',
  contrastUp: 'Increase contrast',
  contrastDown: 'Decrease contrast',
  saturationUp: 'Increase saturation',
  saturationDown: 'Decrease saturation',
  hueUp: 'Increase hue',
  hueDown: 'Decrease hue',
  blurUp: 'Increase blur',
  blurDown: 'Decrease blur',
  rotateAndMirror: 'Rotate and mirror',
  rotate90: 'Rotate 90 degrees',
  horizontalMirror: 'Horizontal mirror flip',
  verticalMirror: 'Vertical mirror flip',
  videoTransform: 'Video displacement',
  translateRight: 'Move the screen to the right',
  translateLeft: 'Move the screen to the left',
  translateUp: 'Move the screen up',
  translateDown: 'Move the screen down',
  languageSettings: 'Language settings',
  default: 'Default',
  autoChoose: 'Auto choose',
  comingSoon: 'More features are being improved, stay tuned',
  ffmpegScript: 'Audio and video merge/convert script',
  autoGotoBufferedTime: 'Automatically jump to the buffered time',
  disableAutoGotoBufferedTime: 'Disable automatic jump to the buffered time',
  mouse: {
    enable: 'Enable mouse control',
    disable: 'Disable mouse control',
    longPressTime: 'How long to respond to mouse long press events'
  },
  tipsMsg: {
    playspeed: 'Speed: ',
    forward: 'Forward: ',
    backward: 'Backward: ',
    seconds: 'sec',
    volume: 'Volume: ',
    nextframe: 'Next frame',
    previousframe: 'Previous frame',
    stopframe: 'Stopframe: ',
    play: 'Play',
    pause: 'Pause',
    arpl: 'Allow auto resume playback progress',
    drpl: 'Disable auto resume playback progress',
    brightness: 'Brightness: ',
    contrast: 'Contrast: ',
    saturation: 'Saturation: ',
    hue: 'HUE: ',
    blur: 'Blur: ',
    imgattrreset: 'Attributes: reset',
    imgrotate: 'Picture rotation: ',
    onplugin: 'ON h5Player plugin',
    offplugin: 'OFF h5Player plugin',
    globalmode: 'Global mode: ',
    playbackrestored: 'Restored the last playback progress for you',
    playbackrestoreoff: 'The function of restoring the playback progress is disabled. Press SHIFT+R to turn on the function',
    horizontal: 'Horizontal displacement: ',
    vertical: 'Vertical displacement: ',
    horizontalMirror: 'Horizontal mirror',
    verticalMirror: 'vertical mirror',
    videozoom: 'Video zoom: '
  },
  demo: 'demo-test'
};

var ru = {
  website: '🏠официальный сайт скрипта',
  about: 'около',
  issues: 'обратная связь',
  faq: 'часто задаваемые вопросы',
  setting: 'установка',
  hotkeys: 'горячие клавиши',
  keyboardControl: 'управление клавиатурой',
  mouseControl: 'управление мышью',
  hotkeysDocs: 'документы горячих клавиш',
  enable: 'включить',
  disable: 'отключить',
  toggleStates: 'включить/отключить',
  disableHotkeysTemporarily: 'временно отключить горячие клавиши',
  toggleHotkeysTemporarily: 'временно включить/отключить горячие клавиши',
  enableHotkeys: 'включить горячие клавиши',
  disableHotkeys: 'отключить горячие клавиши',
  donate: '👍пожертвовать',
  aboutDonate: 'Сколько автор получил?',
  aboutAuthor: 'о авторе',
  enableScript: 'включить скрипт',
  disableScript: 'отключить скрипт',
  disableCurrentInstanceGUI: 'отключить текущий графический интерфейс пользователя',
  disableGUITemporarily: 'Временно отключить графический интерфейс пользователя',
  enableGUI: 'Включить графический интерфейс пользователя',
  disableGUI: 'Отключить графический интерфейс пользователя',
  graphicalInterface: 'Графический интерфейс',
  alwaysShowGraphicalInterface: 'Всегда показывать графический интерфейс',
  openCrossOriginFramePage: 'Открывать только междоменные страницы',
  disableInitAutoPlay: 'Запретить автовоспроизведение видео на этом сайте',
  enableInitAutoPlay: 'Разрешить автоматическое воспроизведение видео на этом сайте',
  restoreConfiguration: 'Восстановить глобальную конфигурацию по умолчанию',
  blockSetPlaybackRate: 'Отключить логику регулирования скорости по умолчанию',
  blockSetCurrentTime: 'Отключить логику управления ходом воспроизведения по умолчанию',
  blockSetVolume: 'Отключить логику управления громкостью по умолчанию',
  unblockSetPlaybackRate: 'Разрешить логику регулировки скорости по умолчанию',
  unblockSetCurrentTime: 'Разрешить логику управления ходом воспроизведения по умолчанию',
  unblockSetVolume: 'Разрешить логику управления громкостью по умолчанию',
  allowAcousticGain: 'Включите усиление громкости',
  notAllowAcousticGain: 'Отключить возможность увеличения громкости',
  allowCrossOriginControl: 'Включить возможность междоменного контроля',
  notAllowCrossOriginControl: 'Отключить возможности междоменного контроля',
  allowExperimentFeatures: 'Включить экспериментальные функции',
  notAllowExperimentFeatures: 'Отключить экспериментальные функции',
  experimentFeaturesWarning: 'Экспериментальные функции могут вызвать определенные проблемы, включайте их с осторожность ю.',
  useMediaDownloadTips: 'Чтобы использовать функцию загрузки, вам необходимо включить экспериментальную функцию.\nЭкспериментальные функции могут легко вызвать некоторые неопределенные проблемы. Вы уверены, что хотите включить ее?',
  allowExternalCustomConfiguration: 'Включить возможности внешней настройки',
  notAllowExternalCustomConfiguration: 'Отключить возможности внешней настройки',
  changeLog: 'Журнал изменений',
  currentVersion: 'Текущая версия',
  checkVersion: 'Проверить наличие новой версии ?',
  configFail: 'Ошибка конфигурации',
  globalSetting: 'Глобальные настройки',
  openCustomConfigurationEditor: 'Открыть редактор пользовательской конфигурации',
  localSetting: 'только для этого сайта',
  openDebugMode: 'Включить режим отладки',
  closeDebugMode: 'отключить режим отладки',
  unfoldMenu: 'развернуть меню',
  foldMenu: 'свернуть меню',
  addGroupChat: '💬Добавить группу чата',
  speed: 'Скорость',
  capture: 'Захват',
  download: 'Скачать',
  mediaDownload: {
    enable: 'Включить загрузку медиафайлов',
    disable: 'Отключить загрузку медиафайлов',
    downloadOptions: 'Опции загрузки',
    downloading: 'Идет скачивание файла. Вы уверены, что хотите повторить эту операцию?',
    hasDownload: 'Файл скачан. Вы уверены, что хотите повторить эту операцию?',
    confirmTitle: 'Пожалуйста, введите имя файла',
    notSupport: 'Текущий медиафайл невозможно загрузить, а функцию загрузки необходимо оптимизировать и улучшить.',
    notEndOfStream: 'Медиаданные еще не полностью готовы. Вы уверены, что хотите их скачать?',
    cancelAutoDownload: 'Отменить автоматическую загрузку?',
    autoDownload: 'Будут ли медиаданные загружаться автоматически после их полной готовности?',
    notFoundMediaSource: 'Соответствующие данные медиапотока не найдены. Возможно, данные были очищены или медиа-элементы удалены. Рекомендуется обновить страницу и повторить попытку.'
  },
  menu: 'Меню',
  more: 'Больше',
  moreActions: 'Дополнительные действия',
  videoFilter: 'Видеофильтр',
  resetFilterAndTransform: 'Сбросить фильтр и трансформацию',
  brightnessUp: 'Увеличить яркость',
  brightnessDown: 'Уменьшить яркость',
  contrastUp: 'Увеличить контраст',
  contrastDown: 'Уменьшить контраст',
  saturationUp: 'Увеличить насыщенность',
  saturationDown: 'Уменьшить насыщенность',
  hueUp: 'Увеличить оттенок',
  hueDown: 'Уменьшить оттенок',
  blurUp: 'Увеличить размытие',
  blurDown: 'Уменьшить размытие',
  rotateAndMirror: 'Повернуть и отразить',
  rotate90: 'Повернуть изображение на 90 градусов',
  horizontalMirror: 'Горизонтальное отражение изображения',
  verticalMirror: 'Вертикальное отражение изображения',
  videoTransform: 'Видео трансформация',
  translateRight: 'Сдвинуть экран вправо',
  translateLeft: 'Сдвинуть экран влево',
  translateUp: 'Сдвинуть экран вверх',
  translateDown: 'Сдвинуть экран вниз',
  languageSettings: 'Настройки языка',
  default: 'По умолчанию',
  autoChoose: 'Автоматический выбор',
  comingSoon: 'Больше функций находится в процессе улучшения, следите за обновлениями',
  ffmpegScript: 'Скрипт слияния/преобразования аудио и видео',
  autoGotoBufferedTime: 'Автоматически перейти к времени буфера',
  disableAutoGotoBufferedTime: 'Отключить автоматический переход к времени буфера',
  mouse: {
    enable: 'Включить управление мышью',
    disable: 'Отключить управление мышью',
    longPressTime: 'Как долго реагировать на долгие нажатия мыши'
  },
  tipsMsg: {
    playspeed: 'Скорость: ',
    forward: 'Вперёд: ',
    backward: 'Назад: ',
    seconds: 'сек',
    volume: 'Громкость: ',
    nextframe: 'Следующий кадр',
    previousframe: 'Предыдущий кадр',
    stopframe: 'Стоп-кадр: ',
    play: 'Запуск',
    pause: 'Пауза',
    arpl: 'Разрешить автоматическое возобновление прогресса воспроизведения',
    drpl: 'Запретить автоматическое возобновление прогресса воспроизведения',
    brightness: 'Яркость: ',
    contrast: 'Контраст: ',
    saturation: 'Насыщенность: ',
    hue: 'Оттенок: ',
    blur: 'Размытие: ',
    imgattrreset: 'Атрибуты: сброс',
    imgrotate: 'Поворот изображения: ',
    onplugin: 'ВКЛ: плагин воспроизведения',
    offplugin: 'ВЫКЛ: плагин воспроизведения',
    globalmode: 'Глобальный режим:',
    playbackrestored: 'Восстановлен последний прогресс воспроизведения',
    playbackrestoreoff: 'Функция восстановления прогресса воспроизведения отключена. цию',
    horizontal: 'Горизонтальное смещение: ',
    vertical: 'Вертикальное смещение: ',
    horizontalMirror: 'Горизонтальное зеркало',
    verticalMirror: 'вертикальное зеркало',
    videozoom: 'Увеличить видео: '
  }
};

var zhTW = {
  website: '🏠script official website',
  about: 'about',
  issues: 'Feedback',
  faq: 'Frequently Asked Questions',
  setting: 'setting',
  hotkeys: 'shortcut keys',
  keyboardControl: 'Keyboard control',
  mouseControl: 'Mouse control',
  hotkeysDocs: 'Hotkeys documentation',
  enable: 'enable',
  disable: 'disable',
  toggleStates: 'enable/disable',
  disableHotkeysTemporarily: 'Temporarily disable hotkeys',
  toggleHotkeysTemporarily: 'Temporarily enable/disable hotkeys',
  enableHotkeys: 'Enable hotkeys',
  disableHotkeys: 'Disable hotkeys',
  donate: '👍appreciation',
  aboutDonate: 'How much reward will there be for a work with 1 million installs? ',
  aboutAuthor: 'About the author',
  enableScript: 'Enable script',
  disableScript: 'Disable script',
  disableCurrentInstanceGUI: 'Close the current graphical user interface',
  disableGUITemporarily: 'Temporarily disable the graphical user interface',
  enableGUI: 'Enable graphical user interface',
  disableGUI: 'Disable graphical user interface',
  graphicalInterface: 'graphical interface',
  alwaysShowGraphicalInterface: 'Always show the graphical interface',
  openCrossOriginFramePage: 'Open cross-domain pages separately',
  disableInitAutoPlay: 'Disable automatic playback of videos on this website',
  enableInitAutoPlay: 'Allow automatic playback of videos on this website',
  restoreConfiguration: 'Restore global default configuration',
  blockSetPlaybackRate: 'Disable default speed adjustment logic',
  blockSetCurrentTime: 'Disable default playback progress control logic',
  blockSetVolume: 'Disable default volume control logic',
  unblockSetPlaybackRate: 'Allow default speed adjustment logic',
  unblockSetCurrentTime: 'Allow default playback progress control logic',
  unblockSetVolume: 'Allow default volume control logic',
  allowAcousticGain: 'Enable volume gain capability',
  notAllowAcousticGain: 'Disable volume gain capability',
  allowCrossOriginControl: 'Enable cross-domain control capability',
  notAllowCrossOriginControl: 'Disable cross-domain control capability',
  allowExperimentFeatures: 'Turn on experimental features',
  notAllowExperimentFeatures: 'Disable experimental features',
  experimentFeaturesWarning: 'Experimental features can easily cause some uncertain problems, please enable them with caution',
  useMediaDownloadTips: 'To use the download function, you need to enable the experimental function. \nThe experimental function can easily cause some uncertain problems. Are you sure you want to enable it? ',
  allowExternalCustomConfiguration: 'Enable external customization capabilities',
  notAllowExternalCustomConfiguration: 'Turn off external customization capabilities',
  changeLog: 'Update log',
  currentVersion: 'current version',
  checkVersion: 'Check if there is a new version? ',
  configFail: 'Configuration failed',
  globalSetting: 'Global Setting',
  openCustomConfigurationEditor: 'Open custom configuration editor',
  localSetting: 'For this website only',
  openDebugMode: 'Turn on debug mode',
  closeDebugMode: 'Close debug mode',
  unfoldMenu: 'Expand menu',
  foldMenu: 'fold menu',
  addGroupChat: '💬Add new group chat',
  speed: 'double speed',
  capture: 'Screenshot',
  download: 'Download',
  mediaDownload: {
    enable: 'Enable media download',
    disable: 'Turn off media download',
    downloadOptions: 'Download options',
    downloading: 'The file is being downloaded. Are you sure you want to repeat this operation? ',
    hasDownload: 'The file has been downloaded. Are you sure you want to repeat this operation? ',
    confirmTitle: 'Please enter the file name',
    notSupport: 'Currently media files cannot be downloaded, and the download function needs to be optimized and improved',
    notEndOfStream: 'The media data is not completely ready yet. Are you sure you want to download it? ',
    cancelAutoDownload: 'Do you want to cancel automatic download? ',
    autoDownload: 'After the media data is completely ready, will it be downloaded automatically? ',
    notFoundMediaSource: 'The corresponding media stream data was not found. The data may have been cleaned or the media elements have been removed. It is recommended to refresh the page and try again'
  },
  menu: 'menu',
  more: 'more',
  moreActions: 'More actions',
  videoFilter: 'Video filter',
  resetFilterAndTransform: 'Image reset',
  brightnessUp: 'Increase brightness',
  brightnessDown: 'Reduce brightness',
  contrastUp: 'Increase contrast',
  contrastDown: 'Reduce contrast',
  saturationUp: 'Increase saturation',
  saturationDown: 'Reduce saturation',
  hueUp: 'Increase hue',
  hueDown: 'Reduce hue',
  blurUp: 'Increase blur',
  blurDown: 'Reduce blur',
  rotateAndMirror: 'Rotate and mirror',
  rotate90: 'Rotate the screen 90 degrees',
  horizontalMirror: 'Screen horizontal mirror flip',
  verticalMirror: 'Screen vertical mirror flip',
  videoTransform: 'Screen displacement',
  translateRight: 'Move the screen to the right',
  translateLeft: 'Move the screen to the left',
  translateUp: 'Move the screen up',
  translateDown: 'Move the screen down',
  languageSettings: 'Language settings',
  default: 'default',
  autoChoose: 'Automatic selection',
  comingSoon: 'More features are being improved, so stay tuned',
  ffmpegScript: 'Audio and video merging/conversion script',
  autoGotoBufferedTime: 'Automatically follow the jump to buffer time',
  disableAutoGotoBufferedTime: 'Disable automatic following jump to buffer time',
  mouse: {
    enable: 'Enable mouse control',
    disable: 'Disable mouse control',
    longPressTime: 'How long does it take to respond to the mouse long press event'
  },
  tipsMsg: {
    playspeed: 'Play speed:',
    forward: 'Forward:',
    backward: 'Backwards:',
    seconds: 'seconds',
    volume: 'Volume:',
    nextframe: 'Position: next frame',
    previousframe: 'Position: previous frame',
    stopframe: 'Stop frame:',
    play: 'play',
    pause: 'pause',
    arpl: 'Allow automatic resumption of playback progress',
    drpl: 'Disable automatic resumption of playback progress',
    brightness: 'Image brightness:',
    contrast: 'Image contrast:',
    saturation: 'Image saturation:',
    hue: 'Image hue:',
    blur: 'Image blur:',
    imgattrreset: 'Image attributes: reset',
    imgrotate: 'Screen rotation:',
    onplugin: 'Enable h5Player plug-in',
    offplugin: 'Disable h5Player plug-in',
    globalmode: 'Global mode:',
    playbackrestored: 'Restore the last playback progress for you',
    playbackrestoreoff: 'Restore playback progress function is disabled, press SHIFT+R to enable this function',
    horizontal: 'Horizontal displacement:',
    vertical: 'Vertical displacement:',
    horizontalMirror: 'horizontal mirror',
    verticalMirror: 'vertical mirror',
    videozoom: 'Video zoom ratio:'
  }
};

const messages = {
  'zh-CN': zhCN,
  zh: zhCN,
  'zh-HK': zhTW,
  'zh-TW': zhTW,
  'en-US': enUS,
  en: enUS,
  ru
};

const i18n = new I18n({
  defaultLanguage: 'en',
  /* Specify the current locale to be used, no need to specify by default, it will be read automatically */
  // locale: 'zh-TW',
  languages: messages
});

const lang = configManager.get('language');
lang && i18n.changeLanguage(lang);

/* Used to obtain a globally unique id */
let __globalId__ = 0;
function getId () {
  if (window.GM_getValue && window.GM_setValue) {
    let gID = window.GM_getValue('_global_id_');
    if (!gID) gID = 0;
    gID = Number(gID) + 1;
    window.GM_setValue('_global_id_', gID);
    return gID
  } else {
    /* If it is not under the Oil Monkey plug-in, the id is the unique id of the page */
    __globalId__ = Number(__globalId__) + 1;
    return __globalId__
  }
}

let curTabId = null;

/**
 * Get the Id number of the current TAB label, which can be used in iframe to determine whether it is under the same TAB label
 * @returns {Promise
    }
 */
function getTabId () {
  return new Promise((resolve, reject) => {
    if (window.GM_getTab instanceof Function) {
      window.GM_getTab(function (obj) {
        if (!obj.tabId) {
          obj.tabId = getId();
          window.GM_saveTab(obj);
        }
        /* Update the current Tab’s ID number each time it is obtained*/
        curTabId = obj.tabId;
        resolve(obj.tabId);
      });
    } else {
      /* Without the Oil Monkey plug-in, it is impossible to determine whether the iframe is under the same tab*/
      resolve(Date.now());
    }
  })
}

/* Initialize curTabId at the beginning, so that there is no need to obtain Tabid asynchronously later, which is required in some scenarios */
getTabId();

/*!
 * @name monkeyMsg.js
 * @version 0.0.1
 * @author Blaze
 * @date 2019/9/21 14:22
 */
// import debug from './debug'

/**
 * Extract the value that can be stored in GM_setValue from the object data
 * @param obj {objcet} - required object data to be stored
 * @param deep {number} -optional If the object level is very deep, the recursive level must be limited. The default cannot exceed level 3.
 * @returns {{}}
 */
function extractDatafromOb (obj, deep) {
  deep = deep || 1;
  if (deep > 3) return {}

  const result = {};
  if (typeof obj === 'object') {
    for (const key in obj) {
      const val = obj[key];
      const valType = typeof val;
      if (valType === 'number' || valType === 'string' || valType === 'boolean') {
        Object.defineProperty(result, key, {
          value: val,
          writable: true,
          configurable: true,
          enumerable: true
        });
      } else if (valType === 'object' && Object.prototype.propertyIsEnumerable.call(obj, key)) {
        /* Perform recursive extraction*/
        result[key] = extractDatafromOb(val, deep + 1);
      } else if (valType === 'array') {
        result[key] = val;
      } else;
    }
  }
  return result
}

const monkeyMsg = {
  /**
   * When sending messages, in addition to sending information normally, various necessary information will also be added
   * @param name {string} - Required to select the field to be sent to. It must be consistent when receiving to monitor correctly.
   * @param data {Any} - required data to be sent
   * @param throttleInterval - Optional, because there will be inexplicable repeated sending situations. In order to eliminate the side effects caused by repeated sending, throttling limit logic is introduced, that is, it can only be sent once within a certain time interval, and the excess times will be automatically Discard, default 80ms
   * @returns {Promise
     }
   */
  send (name, data, throttleInterval = 80) {
    if (!window.GM_getValue || !window.GM_setValue) {
      return false
    }

    /* Prevent frequent modification events from being sent */
    const oldMsg = window.GM_getValue(name);
    if (oldMsg && oldMsg.updateTime) {
      const interval = Math.abs(Date.now() - oldMsg.updateTime);
      if (interval < throttleInterval) {
        return false
      }
    }

    const msg = {
      /* Data sent */
      data,
      /* Supplementary tag ID, used to determine whether they are under the same tab label */
      tabId: curTabId || 'undefined',
      /* Supplement the title information of the page source of the message */
      title: document.title,
      /* Supplementary message page source information */
      referrer: extractDatafromOb(window.location),
      /* The time when the data was last updated*/
      updateTime: Date.now()
    };
    if (typeof data === 'object') {
      msg.data = extractDatafromOb(data);
    }
    window.GM_setValue(name, msg);

    // debug.info(`[monkeyMsg-send][${name}]`, msg)
  },
  set: (name, data) => monkeyMsg.send(name, data),
  get: (name) => window.GM_getValue && window.GM_getValue(name),
  on: (name, fn) => window.GM_addValueChangeListener && window.GM_addValueChangeListener(name, function (name, oldVal, newVal, remote) {
    // debug.info(`[monkeyMsg-on][${name}]`, oldVal, newVal, remote)

    /* Supplement the judgment field of whether the source of the message comes from the same Tab */
    newVal.originTab = newVal.tabId === curTabId;

    fn instanceof Function && fn.apply(null, arguments);
  }),
  off: (listenerId) => window.GM_removeValueChangeListener && window.GM_removeValueChangeListener(listenerId),

  /**
   * Perform monkeyMsg message broadcast, which is sent every two seconds. Any other page can update some variable information through the received broadcast information.
   * Mainly used to solve the problem that the variable status cannot be updated correctly due to setInterval or setTimeout due to the page's visual status and performance policy causing the page not to run or the execution frequency to be abnormal.
   * See: https://developer.mozilla.org/zh-CN/docs/Web/API/Page_Visibility_API
   * Broadcasting cannot be 100% guaranteed not to be affected by performance policies, but as long as there is a web page running in the foreground, it will work normally
   * @param handler {Function} - required callback function when receiving broadcast information
   * @returns
   */
  broadcast (handler) {
    const broadcastName = '__monkeyMsgBroadcast__';
    monkeyMsg._monkeyMsgBroadcastHandler_ = monkeyMsg._monkeyMsgBroadcastHandler_ || [];
    handler instanceof Function && monkeyMsg._monkeyMsgBroadcastHandler_.push(handler);

    if (monkeyMsg._hasMonkeyMsgBroadcast_) {
      return broadcastName
    }

    monkeyMsg.on(broadcastName, function () {
      monkeyMsg._monkeyMsgBroadcastHandler_.forEach(handler => {
        handler.apply(null, arguments);
      });
    });

    setInterval(function () {
      /* Prevent multiple pages from initiating broadcast information in batches by limiting the time interval*/
      const data = monkeyMsg.get(broadcastName);
      if (data && Date.now() - data.updateTime < 1000 * 2) {
        return false
      }

      monkeyMsg.send(broadcastName, {});
    }, 1000 * 2);

    return broadcastName
  }
};

/*!
 * @name crossTabCtl.js
 * @description Cross-Tab control script logic
 * @version 0.0.1
 * @author Blaze
 * @date 2019/11/21 11:56 am
 * @github https://github.com/xxxily
 */


const crossTabCtl = {
  /* When performing cross-Tab control, exclude forwarded shortcut keys to reduce interference with important shortcut keys*/
  excludeShortcuts (event) {
    if (!event || typeof event.keyCode === 'undefined') {
      return false
    }

    const excludeKeyCode = ['c', 'v', 'f', 'd'];

    if (event.ctrlKey || event.metaKey) {
      const key = event.key.toLowerCase();
      if (excludeKeyCode.includes(key)) {
        return true
      } else {
        return false
      }
    } else {
      return false
    }
  },
  /* When exiting unexpectedly, the leavepictureinpicture event will not be called, so the picture-in-picture information can only be updated through polling*/
  updatePictureInPictureInfo () {
    setInterval(function () {
      if (document.pictureInPictureElement) {
        monkeyMsg.send('globalPictureInPictureInfo', {
          usePictureInPicture: true
        });
      }
    }, 1000 * 1.5);

    /**
     * Updating globalPictureInPictureInfo through setInterval will not be updated due to the impact of page visibility and performance policies.
     * See: https://developer.mozilla.org/zh-CN/docs/Web/API/Page_Visibility_API
     * So calibrate globalPictureInPictureInfo status by adding monkeyMsg broadcast mechanism
     */
    monkeyMsg.broadcast(function () {
      // console.log('[monkeyMsg][broadcast]', ...arguments)
      if (document.pictureInPictureElement) {
        monkeyMsg.send('globalPictureInPictureInfo', {
          usePictureInPicture: true
        });
      }
    });
  },
  /* Determine whether the picture-in-picture function is currently enabled*/
  hasOpenPictureInPicture () {
    const data = monkeyMsg.get('globalPictureInPictureInfo');

    /* Only when the global information update time difference of picture-in-picture is within 3 seconds, the picture-in-picture mode is considered to be currently turned on. Otherwise, it may exit unexpectedly without modifying the value of usePictureInPicture, resulting in misjudgment*/
    if (data && data.data) {
      if (data.data.usePictureInPicture) {
        return Math.abs(Date.now() - data.updateTime) < 1000 * 3
      } else {
        /**
         * If it is detected that picture-in-picture has been turned off, but it has not been turned off for a long time, a short period of time will be allowed for the user to control the video across TABs.
         * For example: Pause video playback
         */
        return Math.abs(Date.now() - data.updateTime) < 1000 * 15
      }
    }

    return false
  },
  /**
   * Determine whether cross-Tab control key information needs to be sent
   */
  isNeedSendCrossTabCtlEvent () {
    const t = crossTabCtl;

    /* After picture-in-picture is turned on, the event will be sent only when it is judged that the tab is not in the same tab*/
    const data = monkeyMsg.get('globalPictureInPictureInfo');
    if (t.hasOpenPictureInPicture() && data.tabId !== curTabId) {
      return true
    } else {
      return false
    }
  },
  crossTabKeydownEvent (event) {
    const t = crossTabCtl;
    /* No shortcut keys are executed in editable elements*/
    const target = event.composedPath ? event.composedPath()[0] || event.target : event.target;
    if (isEditableTarget(target)) return
    if (t.isNeedSendCrossTabCtlEvent() && isRegisterKey(event) && !t.excludeShortcuts(event)) {
      // Prevent event bubbling and default events
      event.stopPropagation();
      event.preventDefault();

      /* Broadcast key messages for cross-Tab control*/
      // keydownEvent already contains the globalKeydownEvent event
      // monkeyMsg.send('globalKeydownEvent', event)

      return true
    }
  },
  bindCrossTabEvent () {
    const t = crossTabCtl;
    if (t._hasBindEvent_) return
    document.removeEventListener('keydown', t.crossTabKeydownEvent);
    document.addEventListener('keydown', t.crossTabKeydownEvent, true);
    t._hasBindEvent_ = true;
  },
  init () {
    const t = crossTabCtl;
    t.updatePictureInPictureInfo();
    t.bindCrossTabEvent();
  }
};

/*!
 * @name index.js
 * @description hookJs JS AOP aspect programming auxiliary library
 * @version 0.0.1
 * @author Blaze
 * @date 2020/10/22 17:40
 * @github https://github.com/xxxily
 */

const win = typeof window === 'undefined' ? global : window;
const toStr = Function.prototype.call.bind(Object.prototype.toString);
/* In special scenarios, if Boolean is also hooked, it can easily lead to call overflow, so native Boolean needs to be used */
const toBoolean = Boolean.originMethod ? Boolean.originMethod : Boolean;
const util = {
  toStr,
  isObj: obj => toStr(obj) === '[object Object]',
  /* Determine whether it is a reference type, used in wider scenarios*/
  isRef: obj => typeof obj === 'object',
  isReg: obj => toStr(obj) === '[object RegExp]',
  isFn: obj => obj instanceof Function,
  isAsyncFn: fn => toStr(fn) === '[object AsyncFunction]',
  isPromise: obj => toStr(obj) === '[object Promise]',
  firstUpperCase: str => str.replace(/^\S/, s => s.toUpperCase()),
  toArr: arg => Array.from(Array.isArray(arg) ? arg : [arg]),

  debug: {
    log () {
      let log = win.console.log;
      /* If the log is also hooked, use the log function before it is hooked*/
      if (log.originMethod) { log = log.originMethod; }
      if (win._debugMode_) {
        log.apply(win.console, arguments);
      }
    }
  },
  /* Get the key name including itself, inheritance, enumerable, and non-enumerable */
  getAllKeys (obj) {
    const tmpArr = [];
    for (const key in obj) { tmpArr.push(key); }
    const allKeys = Array.from(new Set(tmpArr.concat(Reflect.ownKeys(obj))));
    return allKeys
  }
};

class HookJs {
  constructor (useProxy) {
    this.useProxy = useProxy || false;
    this.hookPropertiesKeyName = '_hookProperties' + Date.now();
  }

  hookJsPro () {
    return new HookJs(true)
  }

  _addHook (hookMethod, fn, type, classHook) {
    const hookKeyName = type + 'Hooks';
    const hookMethodProperties = hookMethod[this.hookPropertiesKeyName];
    if (!hookMethodProperties[hookKeyName]) {
      hookMethodProperties[hookKeyName] = [];
    }

    /* Register (store) the hook function to be called while preventing repeated registration*/
    let hasSameHook = false;
    for (let i = 0; i < hookMethodProperties[hookKeyName].length; i++) {
      if (fn === hookMethodProperties[hookKeyName][i]) {
        hasSameHook = true;
        break
      }
    }

    if (!hasSameHook) {
      fn.classHook = classHook || false;
      hookMethodProperties[hookKeyName].push(fn);
    }
  }

  _runHooks (parentObj, methodName, originMethod, hookMethod, target, ctx, args, classHook, hookPropertiesKeyName) {
    const hookMethodProperties = hookMethod[hookPropertiesKeyName];
    const beforeHooks = hookMethodProperties.beforeHooks || [];
    const afterHooks = hookMethodProperties.afterHooks || [];
    const errorHooks = hookMethodProperties.errorHooks || [];
    const hangUpHooks = hookMethodProperties.hangUpHooks || [];
    const replaceHooks = hookMethodProperties.replaceHooks || [];
    const execInfo = {
      result: null,
      error: null,
      args: args,
      type: ''
    };

    function runHooks (hooks, type) {
      let hookResult = null;
      execInfo.type = type || '';
      if (Array.isArray(hooks)) {
        hooks.forEach(fn => {
          if (util.isFn(fn) && classHook === fn.classHook) {
            hookResult = fn(args, parentObj, methodName, originMethod, execInfo, ctx);
          }
        });
      }
      return hookResult
    }

    const runTarget = (function () {
      if (classHook) {
        return function () {
          // eslint-disable-next-line new-cap
          return new target(...args)
        }
      } else {
        return function () {
          return target.apply(ctx, args)
        }
      }
    })();

    const beforeHooksResult = runHooks(beforeHooks, 'before');
    /* Support instructions to terminate subsequent calls*/
    if (beforeHooksResult && beforeHooksResult === 'STOP-INVOKE') {
      return beforeHooksResult
    }

    if (hangUpHooks.length || replaceHooks.length) {
      /**
       * When hangUpHooks or replaceHooks exist, the original function will not be triggered.
       * Essentially, hangUpHooks and replaceHooks are the same, except that the external definitions, descriptions and classifications are inconsistent.
       */
      runHooks(hangUpHooks, 'hangUp');
      runHooks(replaceHooks, 'replace');
    } else {
      if (errorHooks.length) {
        try {
          execInfo.result = runTarget();
        } catch (err) {
          execInfo.error = err;
          const errorHooksResult = runHooks(errorHooks, 'error');
          /* Support instructions that do not throw exceptions after executing errors*/
          if (errorHooksResult && errorHooksResult === 'SKIP-ERROR') ; else {
            throw err
          }
        }
      } else {
        execInfo.result = runTarget();
      }
    }

    /**
     * Execute afterHooks. If Promise is returned, further subdivision processing should be carried out in theory.
     * However, after adding the subdivision processing logic, I found that the performance dropped significantly and various exceptions were prone to occur, so I decided not to handle the Promise situation in the hook.
     * The following is the original Promise processing logic. After adding it, the following websites will become stuck or inaccessible:
     * wenku.baidu.com
     * https://pubs.rsc.org/en/content/articlelanding/2021/sc/d1sc01881g#!divAbstract
     * https://www.elsevier.com/connect/coronavirus-information-center
     */
    // if (execInfo.result && execInfo.result.then && util.isPromise(execInfo.result)) {
    // execInfo.result.then(function (data) {
    // execInfo.result = data
    // runHooks(afterHooks, 'after')
    // return Promise.resolve.apply(ctx, arguments)
    // }).catch(function (err) {
    //execInfo.error = err
    // runHooks(errorHooks, 'error')
    // return Promise.reject.apply(ctx, arguments)
    // })
    // }

    runHooks(afterHooks, 'after');

    return execInfo.result
  }

  _proxyMethodcGenerator (parentObj, methodName, originMethod, classHook, context, proxyHandler) {
    const t = this;
    const useProxy = t.useProxy;
    let hookMethod = null;

    /* If cache exists, use cached hookMethod */
    if (t.isHook(originMethod)) {
      hookMethod = originMethod;
    } else if (originMethod[t.hookPropertiesKeyName] && t.isHook(originMethod[t.hookPropertiesKeyName].hookMethod)) {
      hookMethod = originMethod[t.hookPropertiesKeyName].hookMethod;
    }

    if (hookMethod) {
      if (!hookMethod[t.hookPropertiesKeyName].isHook) {
        /* Remark the hooked status */
        hookMethod[t.hookPropertiesKeyName].isHook = true;
        util.debug.log(`[hook method] ${util.toStr(parentObj)} ${methodName}`);
      }
      return hookMethod
    }

    /* Using Proxy mode for hooking can get more features, but the performance will be slightly worse*/
    if (useProxy && Proxy) {
      /* Note: When using Proxy proxy, hookMethod and originMethod will share the same object */
      const handler = { ...proxyHandler };

      /* The following writing method determines that proxyHandler cannot override the construct and apply operations*/
      if (classHook) {
        handler.construct = function (target, args, newTarget) {
          context = context || this;
          return t._runHooks(parentObj, methodName, originMethod, hookMethod, target, context, args, true, t.hookPropertiesKeyName)
        };
      } else {
        handler.apply = function (target, ctx, args) {
          ctx = context || ctx;
          return t._runHooks(parentObj, methodName, originMethod, hookMethod, target, ctx, args, false, t.hookPropertiesKeyName)
        };
      }

      hookMethod = new Proxy(originMethod, handler);
    } else {
      hookMethod = function () {
        /**
         * Note that context = context || this cannot be used here
         * Then pass the context as ctx
         * This will cause ctx reference errors
         */
        const ctx = context || this;
        return t._runHooks(parentObj, methodName, originMethod, hookMethod, originMethod, ctx, arguments, classHook, t.hookPropertiesKeyName)
      };

      /* Ensure that child objects and prototype chains are consistent with originMethod */
      const keys = Reflect.ownKeys(originMethod);
      keys.forEach(keyName => {
        try {
          Object.defineProperty(hookMethod, keyName, {
            get: function () {
              return originMethod[keyName]
            },
            set: function (val) {
              originMethod[keyName] = val;
            }
          });
        } catch (err) {
          // An exception occurs when setting defineProperty, which may cause some functions of hookMethod to be missing, or it may not be affected.
          util.debug.log(`[proxyMethodcGenerator] hookMethod defineProperty abnormal. hookMethod:${methodName}, definePropertyName:${keyName}`, err);
        }
      });
      hookMethod.prototype = originMethod.prototype;
    }

    const hookMethodProperties = hookMethod[t.hookPropertiesKeyName] = {};

    hookMethodProperties.originMethod = originMethod;
    hookMethodProperties.hookMethod = hookMethod;
    hookMethodProperties.isHook = true;
    hookMethodProperties.classHook = classHook;

    util.debug.log(`[hook method] ${util.toStr(parentObj)} ${methodName}`);

    return hookMethod
  }

  _getObjKeysByRule (obj, rule) {
    let excludeRule = null;
    let result = rule;

    if (util.isObj(rule) && rule.include) {
      excludeRule = rule.exclude;
      rule = rule.include;
      result = rule;
    }

    /**
     * For the difference between for in, Object.keys and Reflect.ownKeys, see:
     * https://es6.ruanyifeng.com/#docs/object#%E5%B1%9E%E6%80%A7%E7%9A%84%E9%81%8D%E5%8E%86
     */
    if (rule === '*') {
      result = Object.keys(obj);
    } else if (rule === '**') {
      result = Reflect.ownKeys(obj);
    } else if (rule === '***') {
      result = util.getAllKeys(obj);
    } else if (util.isReg(rule)) {
      result = util.getAllKeys(obj).filter(keyName => rule.test(keyName));
    }

    /* If there is an exclusion rule, it needs to be excluded */
    if (excludeRule) {
      result = Array.isArray(result) ? result : [result];
      if (util.isReg(excludeRule)) {
        result = result.filter(keyName => !excludeRule.test(keyName));
      } else if (Array.isArray(excludeRule)) {
        result = result.filter(keyName => !excludeRule.includes(keyName));
      } else {
        result = result.filter(keyName => excludeRule !== keyName);
      }
    }

    return util.toArr(result)
  }

  /**
   * Determine whether a function has been hooked
   * @param fn {Function} - required function to be judged
   * @returns {boolean}
   */
  isHook (fn) {
    if (!fn || !fn[this.hookPropertiesKeyName]) {
      return false
    }
    const hookMethodProperties = fn[this.hookPropertiesKeyName];
    return util.isFn(hookMethodProperties.originMethod) && fn !== hookMethodProperties.originMethod
  }

  /**
   * Determine whether a value under the object meets the conditions for hooking
   * Note: Having hook conditions and being able to directly modify the value are two different things.
   * When hooking, also check whether descriptor.writable is false.
   * If it is false, it must be changed to true to make the hook successful.
   * @param parentObj
   * @param keyName
   * @returns {boolean}
   */
  isAllowHook (parentObj, keyName) {
    /* Some objects will set a getter to throw an error when reading the value, so try catch is needed to determine whether the attribute can be read normally*/
    try { if (!parentObj[keyName]) return false } catch (e) { return false }
    const descriptor = Object.getOwnPropertyDescriptor(parentObj, keyName);
    return !(descriptor && descriptor.configurable === false)
  }

  /**
   * hook core function
   * @param parentObj {Object} - must select the parent object that the hook function depends on
   * @param hookMethods {Object|Array|RegExp|string} - The function name of the hooked function or the matching rule of the function name is required
   * @param fn {Function} - the callback method after the required hook
   * @param type {String} - optional default before, specifies the time to run the hook function callback, optional strings: before, after, replace, error, hangUp
   * @param classHook {Boolean} - optional default false, specifies whether it is a hook for new (class) operation
   * @param context {Object} - optionally specifies the context object when running the hooked function
   * @param proxyHandler {Object} - Optional is only valid when using Proxy for hooking. By default, Proxy's apply handler is used for hooking. If you have special needs, you can also configure your own handler to implement more complex functions.
   * Note: Not using Proxy for hooking can achieve higher performance, but it also means less versatility. Hooking non-instance functions in objects such as HTMLElement.prototype and EventTarget.prototype will often fail and lead to being hooked. Function execution error
   * @returns {boolean}
   */
  hook (parentObj, hookMethods, fn, type, classHook, context, proxyHandler) {
    /* Support parameter passing in object form*/
    const opts = arguments[0];
    if (util.isObj(opts) && opts.parentObj && opts.hookMethods) {
      parentObj = opts.parentObj;
      hookMethods = opts.hookMethods;
      fn = opts.fn;
      type = opts.type;
      classHook = opts.classHook;
      context = opts.context;
      proxyHandler = opts.proxyHandler;
    }

    classHook = toBoolean(classHook);
    type = type || 'before';

    if ((!util.isRef(parentObj) && !util.isFn(parentObj)) || !util.isFn(fn) || !hookMethods) {
      return false
    }

    const t = this;

    hookMethods = t._getObjKeysByRule(parentObj, hookMethods);
    hookMethods.forEach(methodName => {
      if (!t.isAllowHook(parentObj, methodName)) {
        util.debug.log(`${util.toStr(parentObj)} [${methodName}] does not support modification`);
        return false
      }

      const descriptor = Object.getOwnPropertyDescriptor(parentObj, methodName);
      if (descriptor && descriptor.writable === false) {
        Object.defineProperty(parentObj, methodName, { writable: true });
      }

      const originMethod = parentObj[methodName];
      let hookMethod = null;

      /* Non-functions cannot perform hook operations*/
      if (!util.isFn(originMethod)) {
        return false
      }

      hookMethod = t._proxyMethodcGenerator(parentObj, methodName, originMethod, classHook, context, proxyHandler);

      const hookMethodProperties = hookMethod[t.hookPropertiesKeyName];
      if (hookMethodProperties.classHook !== classHook) {
        util.debug.log(`${util.toStr(parentObj)} [${methodName}] Cannot support functions hook and classes hook at the same time `);
        return false
      }

      /* Use hookMethod to take over the method that needs to be hooked*/
      if (parentObj[methodName] !== hookMethod) {
        parentObj[methodName] = hookMethod;
      }

      t._addHook(hookMethod, fn, type, classHook);
    });
  }

  /* A hook specifically for the new operation is essentially an alias for the hook function. You can pass less classHook parameter and have clear semantics */
  hookClass (parentObj, hookMethods, fn, type, context, proxyHandler) {
    return this.hook(parentObj, hookMethods, fn, type, true, context, proxyHandler)
  }

  /**
   * Cancel the hook of a certain function
   * @param parentObj {Object} - required to cancel the parent object that the hook function depends on
   * @param hookMethods {Object|Array|RegExp|string} - Required to cancel the function name of the hooked function or the matching rule of the function name
   * @param type {String} - optional default before, specifies the hook type to be canceled, optional string: before, after, replace, error, hangUp, if this option is not specified, all callbacks under all types will be canceled
   * @param fn {Function} - Required to cancel the specified hook callback function. If this option is not specified, all callbacks under the corresponding type will be canceled.
   * @returns {boolean}
   */
  unHook (parentObj, hookMethods, type, fn) {
    if (!util.isRef(parentObj) || !hookMethods) {
      return false
    }

    const t = this;
    hookMethods = t._getObjKeysByRule(parentObj, hookMethods);
    hookMethods.forEach(methodName => {
      if (!t.isAllowHook(parentObj, methodName)) {
        return false
      }

      const hookMethod = parentObj[methodName];

      if (!t.isHook(hookMethod)) {
        return false
      }

      const hookMethodProperties = hookMethod[t.hookPropertiesKeyName];
      const originMethod = hookMethodProperties.originMethod;

      if (type) {
        const hookKeyName = type + 'Hooks';
        const hooks = hookMethodProperties[hookKeyName] || [];

        if (fn) {
          /* Delete the specified hook function under the specified type */
          for (let i = 0; i < hooks.length; i++) {
            if (fn === hooks[i]) {
              hookMethodProperties[hookKeyName].splice(i, 1);
              util.debug.log(`[unHook ${hookKeyName} func] ${util.toStr(parentObj)} ${methodName}`, fn);
              break
            }
          }
        } else {
          /* Delete all hook functions under the specified type */
          if (Array.isArray(hookMethodProperties[hookKeyName])) {
            hookMethodProperties[hookKeyName] = [];
            util.debug.log(`[unHook all ${hookKeyName}] ${util.toStr(parentObj)} ${methodName}`);
          }
        }
      } else {
        /* Completely restore the hooked function*/
        if (util.isFn(originMethod)) {
          parentObj[methodName] = originMethod;
          delete parentObj[methodName][t.hookPropertiesKeyName];

          // Object.keys(hookMethod).forEach(keyName => {
          // if (/Hooks$/.test(keyName) && Array.isArray(hookMethod[keyName])) {
          // hookMethod[keyName] = []
          // }
          // })
          //
          // hookMethod.isHook = false
          // parentObj[methodName] = originMethod
          // delete parentObj[methodName].originMethod
          // delete parentObj[methodName].hookMethod
          // delete parentObj[methodName].isHook
          // delete parentObj[methodName].isClassHook

          util.debug.log(`[unHook method] ${util.toStr(parentObj)} ${methodName}`);
        }
      }
    });
  }

  _hook (args, type) {
    const t = this;
    return function (obj, hookMethods, fn, classHook, context, proxyHandler) {
      const opts = args[0];
      if (util.isObj(opts) && opts.parentObj && opts.hookMethods) {
        opts.type = type;
      }
      return t.hook.apply(t, args)
    }
  }

  /* Hook before running the source function */
  before (obj, hookMethods, fn, classHook, context, proxyHandler) {
    return this.hook(obj, hookMethods, fn, 'before', classHook, context, proxyHandler)
  }

  /* Hook after the source function is run */
  after (obj, hookMethods, fn, classHook, context, proxyHandler) {
    return this.hook(obj, hookMethods, fn, 'after', classHook, context, proxyHandler)
  }

  /* Replace the function to be hooked, no longer run the source function, and replace it with running other logic*/
  replace (obj, hookMethods, fn, classHook, context, proxyHandler) {
    return this.hook(obj, hookMethods, fn, 'replace', classHook, context, proxyHandler)
  }

  /* Hook when the source function runs incorrectly */
  error (obj, hookMethods, fn, classHook, context, proxyHandler) {
    return this.hook(obj, hookMethods, fn, 'error', classHook, context, proxyHandler)
  }

  /* The underlying implementation logic is the same as replace. It replaces the function to be hooked and no longer runs the source function. This is just to clarify the semantics. The source function is suspended and no longer executed. In principle, other logic is no longer executed. If To perform other logic please use replace hook */
  hangUp (obj, hookMethods, fn, classHook, context, proxyHandler) {
    return this.hook(obj, hookMethods, fn, 'hangUp', classHook, context, proxyHandler)
  }
}

const hookJs = new HookJs(true);

/**
 * Disable locking of playbackRate
 * Some players will prevent playbackRate from being modified
 * Use hackDefineProperty to prevent modification of playbackRate
 * Reference: https://greasyfork.org/zh-CN/scripts/372673
 */

function hackDefineProperCore (target, key, option) {
  if (option && target && target instanceof Element && typeof key === 'string' && key.indexOf('on') >= 0) {
    option.configurable = true;
  }

  if (target instanceof HTMLVideoElement) {
    const unLockProperties = ['playbackRate', 'currentTime', 'volume', 'muted'];
    if (unLockProperties.includes(key)) {
      try {
        debug.log(`Prohibit locking ${key}`);
        option.configurable = true;
        key = key + '_hack';
      } catch (e) {
        debug.error(`Failed to prohibit locking ${key}!`, e);
      }
    }
  }

  return [target, key, option]
}

function hackDefineProperOnError (args, parentObj, methodName, originMethod, execInfo, ctx) {
  debug.error(`${methodName} error:`, execInfo.error);

  /* Ignore execution exceptions */
  return 'SKIP-ERROR'
}

function hackDefineProperty () {
  hookJs.before(Object, 'defineProperty', function (args, parentObj, methodName, originMethod, execInfo, ctx) {
    const option = args[2];
    const ele = args[0];
    const key = args[1];
    const afterArgs = hackDefineProperCore(ele, key, option);
    afterArgs.forEach((arg, i) => {
      args[i] = arg;
    });
  });

  hookJs.before(Object, 'defineProperties', function (args, parentObj, methodName, originMethod, execInfo, ctx) {
    const properties = args[1];
    const ele = args[0];
    if (ele && ele instanceof Element) {
      Object.keys(properties).forEach(key => {
        const option = properties[key];
        const afterArgs = hackDefineProperCore(ele, key, option);
        args[0] = afterArgs[0];
        delete properties[key];
        properties[afterArgs[1]] = afterArgs[2];
      });
    }
  });

  hookJs.error(Object, 'defineProperty', hackDefineProperOnError);
  hookJs.error(Object, 'defineProperties', hackDefineProperOnError);
}

/*!
 * @name menuCommand.js
 * @version 0.0.1
 * @author Blaze
 * @date 2019/9/21 14:22
 */

const monkeyMenu = {
  menuIds: {},
  on (title, fn, accessKey) {
    if (title instanceof Function) {
      title = title();
    }

    if (window.GM_registerMenuCommand) {
      const menuId = window.GM_registerMenuCommand(title, fn, accessKey);

      this.menuIds[menuId] = {
        title,
        fn,
        accessKey
      };

      return menuId
    }
  },

  off (id) {
    if (window.GM_unregisterMenuCommand) {
      delete this.menuIds[id];

      /**
       * When removing registered buttons in batches, the menu residue of the digital title will be left on some machines with poor performance.
       * It should be a BUG caused by the plug-in itself, which cannot be solved for the time being.
       * Therefore, the menu will not be removed here for the time being. Tampermonkey will automatically merge the menus with the same name.
       */
      // return window.GM_unregisterMenuCommand(id)
    }
  },

  clear () {
    Object.keys(this.menuIds).forEach(id => {
      this.off(id);
    });
  },

  /**
   * Batch registration through menu configuration, all previously registered menus will be cleared before registration
   * @param {array|function} menuOpts menu configuration, if it is a function, the function will be called to obtain the menu configuration, and when the menu is clicked, the menu will be re-created to achieve dynamic updating of the menu
   */
  build (menuOpts) {
    this.clear();

    if (Array.isArray(menuOpts)) {
      menuOpts.forEach(menu => {
        if (menu.disable === true) { return }
        this.on(menu.title, menu.fn, menu.accessKey);
      });
    } else if (menuOpts instanceof Function) {
      const menuList = menuOpts();
      if (Array.isArray(menuList)) {
        this._menuBuilder_ = menuOpts;

        menuList.forEach(menu => {
          if (menu.disable === true) { return }

          const menuFn = () => {
            try {
              menu.fn.apply(menu, arguments);
            } catch (e) {
              console.error('[monkeyMenu]', menu.title, e);
            }

            // After each menu click, re-register the menu to ensure that the status of the menu is up to date.
            setTimeout(() => {
              // console.log('[monkeyMenu rebuild]', menu.title)
              this.build(this._menuBuilder_);
            }, 100);
          };

          this.on(menu.title, menuFn, menu.accessKey);
        });
      } else {
        console.error('monkeyMenu build error, no menuList return', menuOpts);
      }
    }
  }
};

const version = '4.2.7';

function refreshPage (msg) {
  msg = msg || 'The configuration has been changed. Refresh the page immediately for the configuration to take effect? ';
  const status = confirm(msg);
  if (status) {
    window.location.reload();
  }
}

const isChinese = () => i18n.language().indexOf('zh') > -1;

function getHomePage () {
  const homePageLinks = [
    'https://h5player.anzz.top/zh/',
    'https://h5player.anzz.top'
  ];

  /* Randomly select a link from homePageLinks and return it */
  return isChinese() ? homePageLinks[0] : homePageLinks[1]
}

function openDocsByPath (path) {
  if (typeof path !== 'string' || path.startsWith('http') === true) {
    return false
  }

  if (!path.startsWith('/')) {
    path = '/' + path;
  }

  const chinese = isChinese();
  const basePath = chinese ? 'https://h5player.anzz.top' : 'https://h5player.anzz.top';
  let url = basePath + path;

  /* Determine whether it is a Chinese environment, and the link does not start with /zh, then the /zh prefix is ​​automatically added*/
  if (chinese && !path.startsWith('/zh')) {
    url = basePath + '/zh' + path;
  }

  openInTab(url);
}

/**
 * Globally callable functions will be provided to monkeyMenu and related locations in the UI interface.
 * In order to facilitate calling and orchestration, we use objects for management.
 */
const globalFunctional = {
  openInTab,
  getHomePageLink: {
    title: i18n.t('website'),
    desc: i18n.t('website'),
    fn: () => getHomePage()
  },

  /*Open the official website*/
  openWebsite: {
    title: i18n.t('website'),
    desc: i18n.t('website'),
    fn: () => openInTab(getHomePage())
  },
  openAuthorHomePage: {
    title: i18n.t('aboutAuthor'),
    desc: i18n.t('aboutAuthor'),
    fn: () => { openInTab('https://u.anzz.top/xxxily'); }
  },
  openHotkeysPage: {
    title: i18n.t('hotkeysDocs'),
    desc: i18n.t('hotkeysDocs'),
    fn: () => {
      const hotkeysDocs = [
        'https://h5player.anzz.top/zh/home/quickStart#%E5%BF%AB%E6%8D%B7%E9%94%AE%E5%88%97%E8%A1%A8',
        'https://h5player.anzz.top/home/quickStart#shortcut-key-list'
      ];
      openInTab(isChinese() ? hotkeysDocs[0] : hotkeysDocs[1]);
    }
  },
  openProjectGithub: {
    title: 'GitHub',
    desc: 'GitHub',
    fn: () => openInTab('https://github.com/xxxily/h5player')
  },
  openIssuesPage: {
    title: i18n.t('issues'),
    desc: i18n.t('issues'),
    fn: () => openInTab('https://github.com/xxxily/h5player/issues')
  },
  openDonatePage: {
    title: i18n.t('donate'),
    desc: i18n.t('donate'),
    fn: () => openDocsByPath('/home/rewardTheAuthor')
  },
  openAboutDonatePage: {
    title: i18n.t('aboutDonate'),
    desc: i18n.t('aboutDonate'),
    fn: () => openDocsByPath('/home/aboutDonate')
  },
  openAddGroupChatPage: {
    title: i18n.t('addGroupChat'),
    desc: i18n.t('addGroupChat'),
    fn: () => {
      const groupChatUrl = isChinese() ? 'https://h5player.anzz.top/zh/home/quickStart#%E4%BA%A4%E6%B5%81%E7%BE%A4' : 'https://h5player .anzz.top/home/quickStart#discussion-groups';
      openInTab(groupChatUrl);
    }
  },
  openChangeLogPage: {
    title: i18n.t('changeLog'),
    desc: i18n.t('changeLog'),
    fn: () => openDocsByPath('/home/changeLog')
  },
  openCheckVersionPage: {
    title: i18n.t('checkVersion'),
    desc: i18n.t('checkVersion'),
    fn: () => {
      const confirm = window.confirm(`${i18n.t('currentVersion')}『${version}』\n${i18n.t('checkVersion')}`);
      if (confirm) {
        openInTab('https://greasyfork.org/zh-CN/scripts/381682/versions');
      }
    }
  },
  openRecommendPage: {
    title: i18n.t('recommend'),
    desc: i18n.t('recommend'),
    fn: () => {
      function randomZeroOrOne () {
        return Math.floor(Math.random() * 2)
      }

      if (randomZeroOrOne()) {
        openInTab('https://hello-ai.anzz.top/home/');
      } else {
        openInTab('https://github.com/xxxily/hello-ai');
      }
    }
  },
  openCustomConfigurationEditor: {
    title: i18n.t('openCustomConfigurationEditor'),
    desc: i18n.t('openCustomConfigurationEditor'),
    fn: () => {
      // const jsoneditorUrl = isChinese()
      // ? 'https://u.anzz.top/h5pjsoneditorzh'
      // : 'https://u.anzz.top/h5pjsoneditor'
      const jsoneditorUrl = 'https://u.anzz.top/h5pjsoneditor';
      openInTab(jsoneditorUrl);
    }
  },

  openDocsLink: {
    title: i18n.t('openDocsLink'),
    desc: i18n.t('openDocsLink'),
    fn: (path) => openDocsByPath(path)
  },

  /* Switch the expanded or collapsed state of tampermonkey menu */
  toggleExpandedOrCollapsedStateOfMonkeyMenu: {
    title: `${configManager.get('enhance.unfoldMenu') ? i18n.t('foldMenu') : i18n.t('unfoldMenu')} "${i18n.t('globalSetting')}"`,
    desc: `${configManager.get('enhance.unfoldMenu') ? i18n.t('foldMenu') : i18n.t('unfoldMenu')} "${i18n.t('globalSetting')}"`,
    fn: () => {
      const confirm = window.confirm(configManager.get('enhance.unfoldMenu') ? i18n.t('foldMenu') : i18n.t('unfoldMenu'));
      if (confirm) {
        configManager.setGlobalStorage('enhance.unfoldMenu', !configManager.get('enhance.unfoldMenu'));
        window.location.reload();
      }
    }
  },
  /* Switch the script's enabled or disabled state */
  toggleScriptEnableState: {
    title: `${(configManager.get('blacklist.domains') || []).includes(location.host) ? i18n.t('enableScript') : i18n.t('disableScript')} "${ i18n.t('localSetting')}"`,
    desc: `${(configManager.get('blacklist.domains') || []).includes(location.host) ? i18n.t('enableScript') : i18n.t('disableScript')} "${ i18n.t('localSetting')}"`,
    fn: () => {
      const blackDomainList = configManager.get('blacklist.domains') || [];
      const isInBlacklist = blackDomainList.includes(location.host);
      const confirm = window.confirm(isInBlacklist ? i18n.t('enableScript') : i18n.t('disableScript'));
      if (confirm) {
        if (isInBlacklist) {
          configManager.setGlobalStorage('blacklist.domains', blackDomainList.filter(item => item !== location.host));
        } else {
          configManager.setGlobalStorage('blacklist.domains', blackDomainList.concat(location.host));
        }

        window.location.reload();
      }
    }
  },
  /* Control logic for switching default playback progress*/
  toggleSetCurrentTimeFunctional: {
    /* The title function is used to read the latest status information the next time it is called */
    title: () => `${configManager.get('enhance.blockSetCurrentTime') ? i18n.t('unblockSetCurrentTime') : i18n.t('blockSetCurrentTime')} "${i18n.t('localSetting')} "`,
    desc: () => `${configManager.get('enhance.blockSetCurrentTime') ? i18n.t('unblockSetCurrentTime') : i18n.t('blockSetCurrentTime')} "${i18n.t('localSetting')} "`,
    fn: () => {
      const confirm = window.confirm(configManager.get('enhance.blockSetCurrentTime') ? i18n.t('unblockSetCurrentTime') : i18n.t('blockSetCurrentTime'));
      if (confirm) {
        configManager.setLocalStorage('enhance.blockSetCurrentTime', !configManager.get('enhance.blockSetCurrentTime'));
        window.location.reload();
      }
    }
  },
  toggleSetVolumeFunctional: {
    title: () => `${configManager.get('enhance.blockSetVolume') ? i18n.t('unblockSetVolume') : i18n.t('blockSetVolume')} "${i18n.t('localSetting')} "`,
    desc: () => `${configManager.get('enhance.blockSetVolume') ? i18n.t('unblockSetVolume') : i18n.t('blockSetVolume')} "${i18n.t('localSetting')} "`,
    fn: () => {
      const confirm = window.confirm(configManager.get('enhance.blockSetVolume') ? i18n.t('unblockSetVolume') : i18n.t('blockSetVolume'));
      if (confirm) {
        configManager.setLocalStorage('enhance.blockSetVolume', !configManager.get('enhance.blockSetVolume'));
        window.location.reload();
      }
    }
  },
  toggleSetPlaybackRateFunctional: {
    title: () => `${configManager.get('enhance.blockSetPlaybackRate') ? i18n.t('unblockSetPlaybackRate') : i18n.t('blockSetPlaybackRate')} "${i18n.t('globalSetting')} "`,
    desc: () => `${configManager.get('enhance.blockSetPlaybackRate') ? i18n.t('unblockSetPlaybackRate') : i18n.t('blockSetPlaybackRate')} "${i18n.t('globalSetting')} "`,
    fn: () => {
      const confirm = window.confirm(configManager.get('enhance.blockSetPlaybackRate') ? i18n.t('unblockSetPlaybackRate') : i18n.t('blockSetPlaybackRate'));
      if (confirm) {
        /* Double speed parameter, can only be set globally*/
        configManager.setGlobalStorage('enhance.blockSetPlaybackRate', !configManager.get('enhance.blockSetPlaybackRate'));
        window.location.reload();
      }
    }
  },
  toggleAcousticGainFunctional: {
    title: () => `${configManager.get('enhance.allowAcousticGain') ? i18n.t('notAllowAcousticGain') : i18n.t('allowAcousticGain')} "${i18n.t('globalSetting')} "`,
    desc: () => `${configManager.get('enhance.allowAcousticGain') ? i18n.t('notAllowAcousticGain') : i18n.t('allowAcousticGain')} "${i18n.t('globalSetting')} "`,
    fn: () => {
      const confirm = window.confirm(configManager.get('enhance.allowAcousticGain') ? i18n.t('notAllowAcousticGain') : i18n.t('allowAcousticGain'));
      if (confirm) {
        configManager.setGlobalStorage('enhance.allowAcousticGain', !configManager.getGlobalStorage('enhance.allowAcousticGain'));
        window.location.reload();
      }
    }
  },
  toggleCrossOriginControlFunctional: {
    title: () => `${configManager.get('enhance.allowCrossOriginControl') ? i18n.t('notAllowCrossOriginControl') : i18n.t('allowCrossOriginControl')} "${i18n.t('globalSetting')} "`,
    desc: () => `${configManager.get('enhance.allowCrossOriginControl') ? i18n.t('notAllowCrossOriginControl') : i18n.t('allowCrossOriginControl')} "${i18n.t('globalSetting')} "`,
    fn: () => {
      const confirm = window.confirm(configManager.get('enhance.allowCrossOriginControl') ? i18n.t('notAllowCrossOriginControl') : i18n.t('allowCrossOriginControl'));
      if (confirm) {
        configManager.setGlobalStorage('enhance.allowCrossOriginControl', !configManager.getGlobalStorage('enhance.allowCrossOriginControl'));
        window.location.reload();
      }
    }
  },
  toggleExperimentFeatures: {
    title: () => `${configManager.get('enhance.allowExperimentFeatures') ? i18n.t('notAllowExperimentFeatures') : i18n.t('allowExperimentFeatures')} "${i18n.t('globalSetting')} "`,
    desc: () => `${configManager.get('enhance.allowExperimentFeatures') ? i18n.t('notAllowExperimentFeatures') : i18n.t('allowExperimentFeatures')} "${i18n.t('globalSetting')} "`,
    fn: () => {
      const confirm = window.confirm(configManager.get('enhance.allowExperimentFeatures') ? i18n.t('notAllowExperimentFeatures') : i18n.t('experimentFeaturesWarning'));
      if (confirm) {
        configManager.setGlobalStorage('enhance.allowExperimentFeatures', !configManager.get('enhance.allowExperimentFeatures'));
        window.location.reload();
      }
    }
  },
  toggleExternalCustomConfiguration: {
    title: () => `${configManager.get('enhance.allowExternalCustomConfiguration') ? i18n.t('notAllowExternalCustomConfiguration') : i18n.t('allowExternalCustomConfiguration')} "${i18n.t('globalSetting')} "`,
    desc: () => `${configManager.get('enhance.allowExternalCustomConfiguration') ? i18n.t('notAllowExternalCustomConfiguration') : i18n.t('allowExternalCustomConfiguration')} "${i18n.t('globalSetting')} "`,
    fn: () => {
      const confirm = window.confirm(configManager.get('enhance.allowExternalCustomConfiguration') ? i18n.t('notAllowExternalCustomConfiguration') : i18n.t('allowExternalCustomConfiguration'));
      if (confirm) {
        configManager.setGlobalStorage('enhance.allowExternalCustomConfiguration', !configManager.getGlobalStorage('enhance.allowExternalCustomConfiguration'));
        window.location.reload();
      }
    }
  },
  toggleDebugMode: {
    title: () => `${configManager.getGlobalStorage('debug') ? i18n.t('closeDebugMode') : i18n.t('openDebugMode')} "${i18n.t('globalSetting')}"` ,
    desc: () => `${configManager.getGlobalStorage('debug') ? i18n.t('closeDebugMode') : i18n.t('openDebugMode')} "${i18n.t('globalSetting')}"` ,
    fn: () => {
      const confirm = window.confirm(configManager.getGlobalStorage('debug') ? i18n.t('closeDebugMode') : i18n.t('openDebugMode'));
      if (confirm) {
        configManager.setGlobalStorage('debug', !configManager.getGlobalStorage('debug'));
        window.location.reload();
      }
    }
  },

  /* Restore global default configuration */
  restoreGlobalConfiguration: {
    title: i18n.t('restoreConfiguration'),
    desc: i18n.t('restoreConfiguration'),
    fn: () => {
      configManager.clear();
      refreshPage();
    }
  },
  openCrossOriginFramePage: {
    title: i18n.t('openCrossOriginFramePage'),
    desc: i18n.t('openCrossOriginFramePage'),
    fn: () => {
      openInTab(location.href);
    }
  },

  /* Switch the display or hidden state of the script UI interface. Note: The GUI will be hidden only when it is explicitly fasle. In other cases, the GUI must be displayed. For example, null, undefined, etc. will display the GUI normally */
  toggleGUIStatus: {
    title: () => `${configManager.getGlobalStorage('ui.enable') === false ? i18n.t('enableGUI') : i18n.t('disableGUI')} "${i18n.t(' globalSetting')}"`,
    desc: () => `${configManager.getGlobalStorage('ui.enable') === false ? i18n.t('enableGUI') : i18n.t('disableGUI')} "${i18n.t(' globalSetting')}"`,
    fn: () => {
      const confirm = window.confirm(`${configManager.getGlobalStorage('ui.enable') === false ? i18n.t('enableGUI') : i18n.t('disableGUI')} "${i18n.t( 'globalSetting')}"`);
      if (confirm) {
        configManager.setGlobalStorage('ui.enable', !configManager.getGlobalStorage('ui.enable'));
        window.location.reload();
      }
    }
  },

  /* Switch the display or hidden state of the script UI interface under the current website */
  toggleGUIStatusUnderCurrentSite: {
    title: () => `${configManager.getLocalStorage('ui.enable') === false ? i18n.t('enableGUI') : i18n.t('disableGUI')} "${i18n.t(' localSetting')}"`,
    desc: () => `${configManager.getLocalStorage('ui.enable') === false ? i18n.t('enableGUI') : i18n.t('disableGUI')} "${i18n.t(' localSetting')}"`,
    fn: () => {
      const confirm = window.confirm(`${configManager.getLocalStorage('ui.enable') === false ? i18n.t('enableGUI') : i18n.t('disableGUI')} "${i18n.t( 'localSetting')}"`);
      if (confirm) {
        configManager.setLocalStorage('ui.enable', !configManager.getLocalStorage('ui.enable'));
        window.location.reload();
      }
    }
  },
  alwaysShowGraphicalInterface: {
    title: `${i18n.t('toggleStates')}${i18n.t('alwaysShowGraphicalInterface')} "${i18n.t('globalSetting')}"`,
    desc: `${i18n.t('toggleStates')}${i18n.t('alwaysShowGraphicalInterface')} "${i18n.t('globalSetting')}"`,
    fn: () => {
      const alwaysShow = configManager.getGlobalStorage('ui.alwaysShow');
      const confirm = window.confirm(alwaysShow === true ? `${i18n.t('disable')}${i18n.t('alwaysShowGraphicalInterface')} "${i18n.t('globalSetting')}"` : `${i18n.t('alwaysShowGraphicalInterface')} "${i18n.t('globalSetting')}"`);
      if (confirm) {
        configManager.setGlobalStorage('ui.alwaysShow', !alwaysShow);
        window.location.reload();
      }
    }
  },

  toggleHotkeysStatus: {
    title: () => `${configManager.getGlobalStorage('enableHotkeys') === false ? i18n.t('enableHotkeys') : i18n.t('disableHotkeys')} "${i18n.t('globalSetting' )}"`,
    desc: () => `${configManager.getGlobalStorage('enableHotkeys') === false ? i18n.t('enableHotkeys') : i18n.t('disableHotkeys')} "${i18n.t('globalSetting' )}"`,
    fn: () => {
      const confirm = window.confirm(`${configManager.getGlobalStorage('enableHotkeys') === false ? i18n.t('enableHotkeys') : i18n.t('disableHotkeys')} "${i18n.t('globalSetting ')}"`);
      if (confirm) {
        configManager.setGlobalStorage('enableHotkeys', !configManager.getGlobalStorage('enableHotkeys'));
        window.location.reload();
      }
    }
  },

  toggleHotkeysStatusUnderCurrentSite: {
    title: () => `${configManager.getLocalStorage('enableHotkeys') === false ? i18n.t('enableHotkeys') : i18n.t('disableHotkeys')} "${i18n.t('localSetting' )}"`,
    desc: () => `${configManager.getLocalStorage('enableHotkeys') === false ? i18n.t('enableHotkeys') : i18n.t('disableHotkeys')} "${i18n.t('localSetting' )}"`,
    fn: () => {
      const confirm = window.confirm(`${configManager.getLocalStorage('enableHotkeys') === false ? i18n.t('enableHotkeys') : i18n.t('disableHotkeys')} "${i18n.t('localSetting ')}"`);
      if (confirm) {
        configManager.setLocalStorage('enableHotkeys', !configManager.getLocalStorage('enableHotkeys'));
        window.location.reload();
      }
    }
  },

  toggleMouseControl: {
    title: () => `${configManager.getGlobalStorage('mouse.enable') === false ? i18n.t('mouse.enable') : i18n.t('mouse.disable')} "${i18n .t('globalSetting')}"`,
    desc: () => `${configManager.getGlobalStorage('mouse.enable') === false ? i18n.t('mouse.enable') : i18n.t('mouse.disable')} "${i18n .t('globalSetting')}"`,
    fn: () => {
      const confirm = window.confirm(`${configManager.getGlobalStorage('mouse.enable') === false ? i18n.t('mouse.enable') : i18n.t('mouse.disable')} "${ i18n.t('globalSetting')}"`);
      if (confirm) {
        configManager.setGlobalStorage('mouse.enable', !configManager.getGlobalStorage('mouse.enable'));
        window.location.reload();
      }
    }
  },

  toggleMouseControlUnderCurrentSite: {
    title: () => `${configManager.getLocalStorage('mouse.enable') === false ? i18n.t('mouse.enable') : i18n.t('mouse.disable')} "${i18n .t('localSetting')}"`,
    desc: () => `${configManager.getLocalStorage('mouse.enable') === false ? i18n.t('mouse.enable') : i18n.t('mouse.disable')} "${i18n .t('localSetting')}"`,
    fn: () => {
      const confirm = window.confirm(`${configManager.getLocalStorage('mouse.enable') === false ? i18n.t('mouse.enable') : i18n.t('mouse.disable')} "${ i18n.t('localSetting')}"`);
      if (confirm) {
        configManager.setLocalStorage('mouse.enable', !configManager.getLocalStorage('mouse.enable'));
        window.location.reload();
      }
    }
  },

  setMouseLongPressTime: {
    title: `${i18n.t('mouse.longPressTime')}『${i18n.t('globalSetting')}』`,
    desc: `${i18n.t('mouse.longPressTime')}『${i18n.t('globalSetting')}』`,
    fn: () => {
      const longPressTime = prompt(`${i18n.t('mouse.longPressTime')}『${i18n.t('globalSetting')}』`, configManager.getGlobalStorage('mouse.longPressTime') || 600);
      if (longPressTime) {
        configManager.setGlobalStorage('mouse.longPressTime', Number(longPressTime));
        window.location.reload();
      }
    }
  },

  toggleDownloadControl: {
    title: () => `${configManager.getGlobalStorage('download.enable') === false ? i18n.t('mediaDownload.enable') : i18n.t('mediaDownload.disable')} "${i18n .t('globalSetting')}"`,
    desc: () => `${configManager.getGlobalStorage('download.enable') === false ? i18n.t('mediaDownload.enable') : i18n.t('mediaDownload.disable')} "${i18n .t('globalSetting')}"`,
    fn: () => {
      const confirm = window.confirm(`${configManager.getGlobalStorage('download.enable') === false ? i18n.t('mediaDownload.enable') : i18n.t('mediaDownload.disable')} "${ i18n.t('globalSetting')}"`);
      if (confirm) {
        configManager.setGlobalStorage('download.enable', !configManager.getGlobalStorage('download.enable'));
        window.location.reload();
      }
    }
  },

  toggleDownloadControlUnderCurrentSite: {
    title: () => `${configManager.getLocalStorage('download.enable') === false ? i18n.t('mediaDownload.enable') : i18n.t('mediaDownload.disable')} "${i18n .t('localSetting')}"`,
    desc: () => `${configManager.getLocalStorage('download.enable') === false ? i18n.t('mediaDownload.enable') : i18n.t('mediaDownload.disable')} "${i18n .t('localSetting')}"`,
    fn: () => {
      const confirm = window.confirm(`${configManager.getLocalStorage('download.enable') === false ? i18n.t('mediaDownload.enable') : i18n.t('mediaDownload.disable')} "${ i18n.t('localSetting')}"`);
      if (confirm) {
        configManager.setLocalStorage('download.enable', !configManager.getLocalStorage('download.enable'));
        window.location.reload();
      }
    }
  },

  setLanguage: {
    title: `${i18n.t('languageSettings')}「${i18n.t('globalSetting')}」`,
    desc: `${i18n.t('languageSettings')}『${i18n.t('globalSetting')}』`,
    fn: (lang) => {
      const confirm = window.confirm(`${i18n.t('languageSettings')}[${lang}] ?`);
      if (confirm) {
        if (lang === 'auto' || i18n.languages()[lang]) {
          configManager.setGlobalStorage('language', lang);
          window.location.reload();
        } else {
          alert('Language not found');
        }
      }
    }
  },

  cleanRemoteHelperInfo: {
    title: i18n.t('cleanRemoteHelperInfo'),
    desc: i18n.t('cleanRemoteHelperInfo'),
    fn: () => {
      configManager.setGlobalStorage('recommendList', false);
      configManager.setGlobalStorage('contactRemoteHelperSuccessTime', false);
      configManager.setGlobalStorage('lastContactRemoteHelperTime', false);
      window.location.reload();
    }
  }
};

/*!
 * @name menuManager.js
 * @description menu manager
 * @version 0.0.1
 * @author xxxily
 * @date 2022/08/11 10:05
 * @github https://github.com/xxxily
 */

let monkeyMenuList = [
  { ...globalFunctional.openWebsite },
  // { ...globalFunctional.openHotkeysPage },
  {
    ...globalFunctional.openIssuesPage,
    disable: !configManager.get('enhance.unfoldMenu')
  },
  { ...globalFunctional.openDonatePage },
  {
    ...globalFunctional.toggleScriptEnableState
  },
  {
    ...globalFunctional.toggleGUIStatusUnderCurrentSite,
    disable: configManager.getLocalStorage('ui.enable') !== false
  },
  {
    ...globalFunctional.toggleGUIStatus,
    disable: configManager.getGlobalStorage('ui.enable') === false ? false : !configManager.get('enhance.unfoldMenu')
  },
  {
    ...globalFunctional.toggleHotkeysStatusUnderCurrentSite,
    disable: configManager.getLocalStorage('enableHotkeys') !== false
  },
  {
    ...globalFunctional.toggleHotkeysStatus,
    disable: configManager.get('enableHotkeys') !== false
  },
  { ...globalFunctional.openCustomConfigurationEditor },
  /* Expand or collapse menu*/
  { ...globalFunctional.toggleExpandedOrCollapsedStateOfMonkeyMenu },
  {
    ...globalFunctional.restoreGlobalConfiguration,
    disable: !configManager.get('enhance.unfoldMenu')
  }
];

/* Menu constructor (must be a function to dynamically update the menu state after clicking) */
function menuBuilder () {
  return monkeyMenuList
}

/* Register dynamic menu*/
function menuRegister () {
  monkeyMenu.build(menuBuilder);
}

/**
 * Add menu items
 * @param {Object|Array} menuOpts menu configuration items, multiple configuration items are represented by arrays
 */
function addMenu (menuOpts, before) {
  menuOpts = Array.isArray(menuOpts) ? menuOpts : [menuOpts];
  menuOpts = menuOpts.filter(item => item.title && !item.disabled);

  if (before) {
    /* Append the menu in front of other menus */
    monkeyMenuList = menuOpts.concat(monkeyMenuList);
  } else {
    monkeyMenuList = monkeyMenuList.concat(menuOpts);
  }

  /*Re-register menu*/
  menuRegister();
}

/**
 * Register the menu related to h5player. It will only be registered if the media tag is detected.
 */
function registerH5playerMenus (h5player) {
  const t = h5player;
  const player = t.player();
  const foldMenu = !configManager.get('enhance.unfoldMenu');

  if (player && !t._hasRegisterH5playerMenus_) {
    const menus = [
      {
        ...globalFunctional.openCrossOriginFramePage,
        disable: foldMenu || !isInCrossOriginFrame()
      },
      {
        ...globalFunctional.toggleSetCurrentTimeFunctional,
        type: 'local',
        disable: foldMenu
      },
      {
        ...globalFunctional.toggleSetVolumeFunctional,
        type: 'local',
        disable: foldMenu
      },
      {
        ...globalFunctional.toggleSetPlaybackRateFunctional,
        type: 'global',
        disable: foldMenu
      },
      {
        ...globalFunctional.toggleAcousticGainFunctional,
        type: 'global',
        disable: foldMenu
      },
      {
        ...globalFunctional.toggleCrossOriginControlFunctional,
        type: 'global',
        disable: foldMenu
      },
      {
        ...globalFunctional.toggleExperimentFeatures,
        type: 'global',
        disable: foldMenu
      },
      {
        ...globalFunctional.toggleExternalCustomConfiguration,
        type: 'global',
        disable: foldMenu
      },
      {
        ...globalFunctional.toggleDebugMode,
        disable: foldMenu
      }
    ];

    let titlePrefix = '';
    if (isInIframe()) {
      titlePrefix = `[${location.hostname}]`;

      /* Supplement title prefix */
      menus.forEach(menu => {
        const titleFn = menu.title;
        if (titleFn instanceof Function && menu.type === 'local') {
          menu.title = () => titlePrefix + titleFn();
        }
      });
    }

    addMenu(menus);

    t._hasRegisterH5playerMenus_ = true;
  }
}

/**
   * Activate event registration and unregistration functions of the video player to debug or block registration events.
   * @param {*} player
   * @returns
   */
function proxyHTMLMediaElementEvent () {
  if (HTMLMediaElement.prototype._rawAddEventListener_) {
    return false
  }

  HTMLMediaElement.prototype._rawAddEventListener_ = HTMLMediaElement.prototype.addEventListener;
  HTMLMediaElement.prototype._rawRemoveEventListener_ = HTMLMediaElement.prototype.removeEventListener;

  HTMLMediaElement.prototype.addEventListener = new Proxy(HTMLMediaElement.prototype.addEventListener, {
    apply (target, ctx, args) {
      const eventName = args[0];
      const listener = args[1];
      if (listener instanceof Function && eventName === 'ratechange') {
        /* Detect the registered ratechange event, and if there is abnormal behavior, try to suspend the event */

        args[1] = new Proxy(listener, {
          apply (target, ctx, args) {
            if (ctx) {
              /* Prevent speed regulation detection and perform anti-blocking */
              if (ctx.playbackRate && eventName === 'ratechange') {
                if (ctx._hasBlockRatechangeEvent_) {
                  return true
                }

                const oldRate = ctx.playbackRate;
                const startTime = Date.now();

                const result = target.apply(ctx, args);

                /**
                 * By judging whether the rate has been changed before and after executing ratechange,
                 * And whether there is an extremely long execution time (an alert pop-up window may appear) to detect whether there may be behavior that prevents speed adjustment.
                 *Other detection methods to be added
                 */
                const blockRatechangeBehave1 = oldRate !== ctx.playbackRate || Date.now() - startTime > 1000;
                const blockRatechangeBehave2 = ctx._setPlaybackRate_ && ctx._setPlaybackRate_.value !== ctx.playbackRate;
                if (blockRatechangeBehave1 || blockRatechangeBehave2) {
                  debug.info(`[execVideoEvent][${eventName}] has detected behavior that may prevent speed regulation, and has prohibited the execution of the ${eventName} event`, listener);
                  ctx._hasBlockRatechangeEvent_ = true;
                  return true
                } else {
                  return result
                }
              }
            }

            try {
              return target.apply(ctx, args)
            } catch (e) {
              debug.error(`[proxyPlayerEvent][${eventName}]`, listener, e);
            }
          }
        });
      }

      return target.apply(ctx, args)
    }
  });
}

const mediaSource = (function () {
  let hasMediaSourceInit = false;
  const originMethods = {};
  const originURLMethods = {};
  const mediaSourceMap = new original.Map();
  const objectURLMap = new original.Map();

  function connectMediaSourceWithMediaElement (mediaEl) {
    const curSrc = mediaEl.currentSrc || mediaEl.src;

    if (!curSrc) { return false }

    mediaSourceMap.forEach(mediaSourceInfo => {
      if (mediaSourceInfo.mediaSource.__objURL__ && curSrc === mediaSourceInfo.mediaSource.__objURL__) {
        mediaSourceInfo.mediaElement = mediaEl;
      }
    });
  }

  /* If the associated mediaEl in mediaSourceMap is detected to no longer exist, clear the data in mediaSourceMap to reduce memory usage*/
  function cleanMediaSourceData () {
    function removeMediaSourceData (mediaSourceInfo) {
      console.log('[cleanMediaSourceData][removeMediaSourceData]', mediaSourceInfo.mediaUrl || mediaSourceInfo.mediaSource.__objURL__);
      original.map.delete.call(mediaSourceMap, mediaSourceInfo.mediaSource);
      original.map.delete.call(objectURLMap, mediaSourceInfo.mediaSource);
    }

    mediaSourceMap.forEach((mediaSourceInfo) => {
      if (!mediaSourceInfo.mediaElement || !(mediaSourceInfo.mediaElement instanceof HTMLMediaElement)) {
        removeMediaSourceData(mediaSourceInfo);
      } else {
        if (isOutOfDocument(mediaSourceInfo.mediaElement)) {
          removeMediaSourceData(mediaSourceInfo);
        }
      }
    });
  }

  function proxyMediaSourceMethod () {
    if (!originMethods.addSourceBuffer || !originMethods.endOfStream) {
      return false
    }

    // TODO There may be a delay in the proxy taking effect when called by the upper layer. The reason needs to be studied.
    originURLMethods.createObjectURL = originURLMethods.createObjectURL || URL.prototype.constructor.createObjectURL;
    URL.prototype.constructor.createObjectURL = new original.Proxy(originURLMethods.createObjectURL, {
      apply (target, ctx, args) {
        const object = args[0];
        const objectURL = target.apply(ctx, args);

        if (object instanceof MediaSource && !original.map.has.call(objectURLMap, object)) {
          object.__objURL__ = objectURL;
          original.map.set.call(objectURLMap, object, objectURL);
        }

        return objectURL
      }
    });

    MediaSource.prototype.addSourceBuffer = new original.Proxy(originMethods.addSourceBuffer, {
      apply (target, ctx, args) {
        if (!original.map.has.call(mediaSourceMap, ctx)) {
          original.map.set.call(mediaSourceMap, ctx, {
            mediaSource: ctx,
            createTime: Date.now(),
            sourceBuffer: [],
            endOfStream: false
          });
        }

        const mediaSourceInfo = original.map.get.call(mediaSourceMap, ctx);
        const mimeCodecs = args[0] || '';
        const sourceBuffer = target.apply(ctx, args);

        const sourceBufferItem = {
          mimeCodecs,
          originAppendBuffer: sourceBuffer.appendBuffer,
          bufferData: [],
          mediaInfo: {}
        };

        try {
          // mimeCodecs string example: 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
          const mediaInfo = sourceBufferItem.mediaInfo;
          const tmpArr = sourceBufferItem.mimeCodecs.split(';');

          mediaInfo.type = tmpArr[0].split('/')[0];
          mediaInfo.format = tmpArr[0].split('/')[1];
          mediaInfo.codecs = tmpArr[1].trim().replace('codecs=', '').replace(/["']/g, '');
        } catch (e) {
          original.console.error('[addSourceBuffer][mediaInfo] media information parsing error', sourceBufferItem, e);
        }

        mediaSourceInfo.sourceBuffer.push(sourceBufferItem);

        /* Delegate the sourceBuffer.appendBuffer function and save a copy of the buffer to mediaSourceInfo*/
        sourceBuffer.appendBuffer = new original.Proxy(sourceBufferItem.originAppendBuffer, {
          apply (bufTarget, bufCtx, bufArgs) {
            const buffer = bufArgs[0];

            if (!mediaSourceInfo.endOfStream) {
              sourceBufferItem.bufferData.push(buffer);
            }

            /* Ensure the existence and correspondence of mediaUrl*/
            if (original.map.get.call(objectURLMap, ctx)) {
              mediaSourceInfo.mediaUrl = original.map.get.call(objectURLMap, ctx);
            }

            /* If the appendBuffer is still active but the corresponding mediaSource has been cleared, try to associate the data back */
            if (!original.map.get.call(mediaSourceMap, ctx)) {
              original.map.set.call(mediaSourceMap, ctx, mediaSourceInfo);
            }

            return bufTarget.apply(bufCtx, bufArgs)
          }
        });

        return sourceBuffer
      }
    });

    MediaSource.prototype.endOfStream = new original.Proxy(originMethods.endOfStream, {
      apply (target, ctx, args) {
        /* Indicates that the current media stream has been loaded*/
        const mediaSourceInfo = original.map.get.call(mediaSourceMap, ctx);
        if (mediaSourceInfo) {
          mediaSourceInfo.endOfStream = true;

          if (mediaSourceInfo.mediaElement && mediaSourceInfo.autoDownload && !mediaSourceInfo.hasDownload) {
            downloadMediaSource(mediaSourceInfo.mediaElement);
          }
        }

        return target.apply(ctx, args)
      }
    });
  }

  /**
   * Download media resources, download code reference: https://juejin.cn/post/6873267073674379277
   */
  function downloadMediaSource (mediaEl, title) {
    // const srcList = mediaEl.srcList || []
    const curSrc = mediaEl.currentSrc || mediaEl.src;

    if (!curSrc) {
      original.alert(i18n.t('mediaDownload.notSupport'));
      return false
    }

    let hasFindMediaSource = false;
    mediaSourceMap.forEach(mediaSourceInfo => {
      const mediaSource = mediaSourceInfo.mediaSource;
      if (!mediaSource.__objURL__) {
        console.error('no objURL', mediaSource, mediaSourceInfo);
        return false
      }

      /* Exclude media streams that are not current media elements*/
      // if (srcList.length > 0 && !srcList.includes(mediaSource.__objURL__)) {
      // return false
      // }
      if (curSrc !== mediaSource.__objURL__) {
        return false
      }

      hasFindMediaSource = true;
      mediaSourceInfo.mediaElement = mediaEl;

      // original.console.log('[downloadMediaSource][mediaSourceInfo]', mediaSourceInfo)

      if (mediaSourceInfo.hasDownload) {
        const confirm = original.confirm(i18n.t('mediaDownload.hasDownload'));
        if (!confirm) {
          return false
        }
      }

      if (!mediaSourceInfo.hasDownload && !mediaSourceInfo.endOfStream) {
        // original.console.log('[downloadMediaSource] media data is not completely ready', mediaSourceInfo)

        const confirm = original.confirm(i18n.t('mediaDownload.notEndOfStream'));
        if (!confirm) {
          if (mediaSourceInfo.autoDownload) {
            const cancelAutoDownload = original.confirm(i18n.t('mediaDownload.cancelAutoDownload'));
            if (cancelAutoDownload) {
              mediaSourceInfo.autoDownload = false;
            }
          } else {
            const autoDownload = original.confirm(i18n.t('mediaDownload.autoDownload'));
            if (autoDownload) {
              mediaSourceInfo.autoDownload = true;
            }
          }

          return false
        }
      }

      let mediaSourceTitle = null;
      mediaSourceInfo.sourceBuffer.forEach(sourceBufferItem => {
        if (!sourceBufferItem.mimeCodecs || sourceBufferItem.mimeCodecs.toString().indexOf(';') === -1) {
          const msg = '[downloadMediaSource][mimeCodecs][error] mimeCodecs does not exist or the information is abnormal and cannot be downloaded';
          original.console.error(msg, sourceBufferItem);
          original.alert(msg);
          return false
        }

        try {
          let mediaTitle = `${mediaSourceTitle || sourceBufferItem.mediaInfo.title || title || mediaEl.getAttribute('data-title') || document.title || Date.now()}`;

          if (!mediaSourceTitle && !sourceBufferItem.mediaInfo.title) {
            mediaTitle = original.prompt(i18n.t('mediaDownload.confirmTitle'), mediaTitle);

            if (!mediaTitle) { return false }

            sourceBufferItem.mediaInfo.title = mediaTitle;
          }

          mediaSourceTitle = mediaTitle;

          /* Automatically supplement media type and file suffix*/
          mediaTitle = `${mediaTitle}_${sourceBufferItem.mediaInfo.type}.${sourceBufferItem.mediaInfo.format}`;

          const a = document.createElement('a');
          a.href = URL.createObjectURL(new Blob(sourceBufferItem.bufferData));
          a.download = mediaTitle;
          a.click();
          URL.revokeObjectURL(a.href);

          mediaSourceInfo.hasDownload = true;
        } catch (e) {
          mediaSourceInfo.hasDownload = false;
          const msg = '[downloadMediaSource][error]';
          original.console.error(msg, e);
          original.alert(msg);
        }
      });
    });

    if (!hasFindMediaSource) {
      original.alert(i18n.t('mediaDownload.notFoundMediaSource'));
    }
  }

  function hasInit () {
    return hasMediaSourceInit
  }

  function init () {
    if (hasMediaSourceInit) {
      return false
    }

    if (!window.MediaSource) {
      return false
    }

    Object.keys(MediaSource.prototype).forEach(key => {
      try {
        if (MediaSource.prototype[key] instanceof Function) {
          originMethods[key] = MediaSource.prototype[key];
        }
      } catch (e) {}
    });

    proxyMediaSourceMethod();

    hasMediaSourceInit = true;
  }

  return {
    init,
    hasInit,
    originMethods,
    originURLMethods,
    mediaSourceMap,
    objectURLMap,
    downloadMediaSource,
    cleanMediaSourceData,
    connectMediaSourceWithMediaElement
  }
})();

/*!
 * @name hotkeysRunner.js
 * @description Hotkey runner, implementing hotkey configuration similar to vscode
 * @version 0.0.1
 * @author xxxily
 * @date 2022/11/23 18:22
 * @github https://github.com/xxxily
 */

const Map$1 = window.Map;
const WeakMap$1 = window.WeakMap;
function isObj (obj) { return Object.prototype.toString.call(obj) === '[object Object]' }

function getValByPath (obj, path) {
  path = path || '';
  const pathArr = path.split('.');
  let result = obj;

  /* Recursively extract the result value*/
  for (let i = 0; i < pathArr.length; i++) {
    if (!result) break
    result = result[pathArr[i]];
  }

  return result
}

function toArrArgs (args) {
  return Array.isArray(args) ? args : (typeof args === 'undefined' ? [] : [args])
}

function isModifierKey (key) {
  return [
    'ctrl', 'controlleft', 'controlright',
    'shift', 'shiftleft', 'shiftright',
    'alt', 'altleft', 'altright',
    'meta', 'metaleft', 'metaright',
    'capsLock'].includes(key.toLowerCase())
}

const keyAlias ​​= {
  ControlLeft: 'ctrl',
  ControlRight: 'ctrl',
  ShiftLeft: 'shift',
  ShiftRight: 'shift',
  AltLeft: 'alt',
  AltRight: 'alt',
  MetaLeft: 'meta',
  MetaRight: 'meta'
};

const combinationKeysMonitor = (function () {
  const combinationKeysState = new Map$1();

  const hasInit = new WeakMap$1();

  function init (win = window) {
    if (!win || win !== win.self || !win.addEventListener || hasInit.get(win)) {
      return false
    }

    const timers = {};

    function activeCombinationKeysState (event) {
      isModifierKey(event.code) && combinationKeysState.set(event.code, true);
    }

    function inactivateCombinationKeysState (event) {
      if (!(event instanceof KeyboardEvent)) {
        combinationKeysState.forEach((val, key) => {
          combinationKeysState.set(key, false);
        });
        return true
      }

      /**
       * The combinationKeysState state must be retained for a period of time, otherwise when the keyup event is defined externally, since this is registered first and executed first,
       * Immediately changing the combinationKeysState state will cause the events defined later to get the state of the inactive key combination.
       */
      if (isModifierKey(event.code)) {
        clearTimeout(timers[event.code]);
        timers[event.code] = setTimeout(() => { combinationKeysState.set(event.code, false); }, 50);
      }
    }

    win.addEventListener('keydown', activeCombinationKeysState, true);
    win.addEventListener('keypress', activeCombinationKeysState, true);
    win.addEventListener('keyup', inactivateCombinationKeysState, true);
    win.addEventListener('blur', inactivateCombinationKeysState, true);

    hasInit.set(win, true);
  }

  function getCombinationKeys () {
    const result = new Map$1();
    combinationKeysState.forEach((val, key) => {
      if (val === true) {
        result.set(key, val);
      }
    });
    return result
  }

  return {
    combinationKeysState,
    getCombinationKeys,
    init
  }
})();

class HotkeysRunner {
  constructor (hotkeys, win = window) {
    this.window = win;
    this.windowList = [win];
    /* The modifiers used by Mac and window are different*/
    this.MOD = typeof navigator === 'object' && /Mac|iPod|iPhone|iPad/.test(navigator.platform) ? 'Meta' : 'Ctrl';
    // 'Control', 'Shift', 'Alt', 'Meta'

    this.prevPress = null;
    this._prevTimer_ = null;

    this.setHotkeys(hotkeys);
    combinationKeysMonitor.init(win);
  }

  /* Set the key combination monitoring logic of other window objects*/
  setCombinationKeysMonitor (win) {
    this.window = win;

    if (!this.windowList.includes(win)) {
      this.windowList.push(win);
    }

    combinationKeysMonitor.init(win);
  }

  /* Data preprocessing*/
  hotkeysPreprocess (hotkeys) {
    if (!Array.isArray(hotkeys)) {
      return false
    }

    hotkeys.forEach((config) => {
      if (!isObj(config) || !config.key || typeof config.key !== 'string') {
        return false
      }

      const keyName = config.key.trim().toLowerCase();
      const mod = this.MOD.toLowerCase();

      /* Add the formatted hotkeys array */
      config.keyBindings = keyName.split(' ').map(press => {
        const keys = press.split(/\b\+/);
        const mods = [];
        let key = '';

        keys.forEach((k) => {
          k = k === '$mod' ? mod : k;

          if (isModifierKey(k)) {
            mods.push(k);
          } else {
            key = k;
          }
        });

        return [mods, key]
      });
    });

    return hotkeys
  }

  setHotkeys (hotkeys) {
    this.hotkeys = this.hotkeysPreprocess(hotkeys) || [];
  }

  /**
   * Determine whether the currently provided keyboard events match the expected hotkey configuration
   * @param {KeyboardEvent} event
   * @param {Array} press For example: [['alt', 'shift'], 's']
   * @param {Object} prevCombinationKeys
   * @returns
   */
  isMatch (event, press) {
    if (!event || !Array.isArray(press)) { return false }

    const combinationKeys = event.combinationKeys || combinationKeysMonitor.getCombinationKeys();
    const mods = press[0];
    const key = press[1];

    /* The number of modifiers does not match */
    if (mods.length !== combinationKeys.size) {
      return false
    }

    /* The currently pressed key does not match the expected key */
    if (key && event.key.toLowerCase() !== key && event.code.toLowerCase() !== key) {
      return false
    }

    /* The currently pressed modifier does not match the expected modifier */
    let result = true;
    const modsKey = new Map$1();
    combinationKeys.forEach((val, key) => {
      /* Supplement the flags for various possible situations */
      modsKey.set(key, val);
      modsKey.set(key.toLowerCase(), val);
      keyAlias[key] && modsKey.set(keyAlias[key], val);
    });

    mods.forEach((key) => {
      if (!modsKey.has(key)) {
        result = false;
      }
    });

    return result
  }

  isMatchPrevPress (press) { return this.isMatch(this.prevPress, press) }

  run (opts = {}) {
    //This is only valid for a single window
    // const KeyboardEvent = this.window.KeyboardEvent
    // if (!(opts.event instanceof KeyboardEvent)) { return false }

    const KeyboardEventList = this.windowList.map(win => win.KeyboardEvent);
    if (!KeyboardEventList.includes(opts.event.constructor)) {
      return false
    }

    const event = opts.event;
    const target = opts.target || null;
    const conditionHandler = opts.conditionHandler || opts.whenHandler;

    let matchResult = null;

    this.hotkeys.forEach(hotkeyConf => {
      if (hotkeyConf.disabled || !hotkeyConf.keyBindings) {
        return false
      }

      let press = hotkeyConf.keyBindings[0];

      /* When prevPress exists, it will no longer respond to other shortcut keys that do not match prevPress*/
      if (this.prevPress && (hotkeyConf.keyBindings.length <= 1 || !this.isMatchPrevPress(press))) {
        return false
      }

      /* If there is a previous round of operation shortcut key records, and the previous shortcut key matches the shortcut key defined by the first keyBindings, then match the second keyBindings */
      if (this.prevPress && hotkeyConf.keyBindings.length > 1 && this.isMatchPrevPress(press)) {
        press = hotkeyConf.keyBindings[1];
      }

      const isMatch = this.isMatch(event, press);
      if (!isMatch) { return false }

      matchResult = hotkeyConf;

      /* Whether to prevent event bubbling and block default events */
      const stopPropagation = opts.stopPropagation || hotkeyConf.stopPropagation;
      const preventDefault = opts.preventDefault || hotkeyConf.preventDefault;
      stopPropagation && event.stopPropagation();
      preventDefault && event.preventDefault();

      /* Record the shortcut key of the last operation, and clear the record of the operation after a period of time */
      if (press === hotkeyConf.keyBindings[0] && hotkeyConf.keyBindings.length > 1) {
        /* Turn prevPress into an object with event-related fields */
        this.prevPress = {
          combinationKeys: combinationKeysMonitor.getCombinationKeys(),
          code: event.code,
          key: event.key,
          keyCode: event.keyCode,
          altKey: event.altKey,
          shiftKey: event.shiftKey,
          ctrlKey: event.ctrlKey,
          metaKey: event.metaKey
        };

        clearTimeout(this._prevTimer_);
        this._prevTimer_ = setTimeout(() => { this.prevPress = null; }, 1000);

        return true
      }

      /* If the second shortcut key is currently matched, when the forEach loop ends, immediately log out of prevPress and make way for other shortcut keys*/
      if (hotkeyConf.keyBindings.length > 1 && press !== hotkeyConf.keyBindings[0]) {
        setTimeout(() => { this.prevPress = null; }, 0);
      }

      /* Execute the function or command corresponding to hotkeyConf.command*/
      const args = toArrArgs(hotkeyConf.args);
      let commandFunc = hotkeyConf.command;
      if (target && typeof hotkeyConf.command === 'string') {
        commandFunc = getValByPath(target, hotkeyConf.command);
      }

      if (!(commandFunc instanceof Function) && target) {
        throw new Error(`[hotkeysRunner] The function corresponding to command: ${hotkeyConf.command} was not found`)
      }

      if (hotkeyConf.when && conditionHandler instanceof Function) {
        const isMatchCondition = conditionHandler.apply(target, toArrArgs(hotkeyConf.when));
        if (isMatchCondition === true) {
          commandFunc.apply(target, args);
        }
      } else {
        commandFunc.apply(target, args);
      }
    });

    return matchResult
  }

  binding (opts = {}) {
    if (!isObj(opts) || !Array.isArray(opts.hotkeys)) {
      throw new Error('[hotkeysRunner] The parameters provided to binding are incorrect')
    }

    opts.el = opts.el || this.window;
    opts.type = opts.type || 'keydown';
    opts.debug && (this.debug = true);

    this.setHotkeys(opts.hotkeys);

    if (typeof opts.el === 'string') {
      opts.el = document.querySelector(opts.el);
    }

    opts.el.addEventListener(opts.type, (event) => {
      opts.event = event;
      this.run(opts);
    }, true);
  }
}

/* eslint-disable camelcase */

/**
 * @license Copyright 2017 - Chris West - MIT Licensed
 * Prototype to easily set the volume (actual and perceived), loudness,
 * decibels, and gain value.
 * https://cwestblog.com/2017/08/22/web-audio-api-controlling-audio-video-loudness/
 */
function MediaElementAmplifier (mediaElem) {
  this._context = new (window.AudioContext || window.webkitAudioContext)();
  this._source = this._context.createMediaElementSource(this._element = mediaElem);
  this._source.connect(this._gain = this._context.createGain());
  this._gain.connect(this._context.destination);
}
[
  'getContext',
  'getSource',
  'getGain',
  'getElement',
  [
    'getVolume',
    function (opt_getPerceived) {
      return (opt_getPerceived ? this.getLoudness() : 1) * this._element.volume
    }
  ],
  [
    'setVolume',
    function (value, opt_setPerceived) {
      var volume = value / (opt_setPerceived ? this.getLoudness() : 1);
      if (volume > 1) {
        this.setLoudness(this.getLoudness() * volume);
        volume = 1;
      }
      this._element.volume = volume;
    }
  ],
  ['getGainValue', function () { return this._gain.gain.value }],
  ['setGainValue', function (value) { this._gain.gain.value = value; }],
  ['getDecibels', function () { return 20 * Math.log10(this.getGainValue()) }],
  ['setDecibels', function (value) { this.setGainValue(Math.pow(10, value / 20)); }],
  ['getLoudness', function () { return Math.pow(2, this.getDecibels() / 10) }],
  ['setLoudness', function (value) { this.setDecibels(10 * Math.log2(value)); }]
].forEach(function (name, fn) {
  if (typeof name === 'string') {
    fn = function () { return this[name.replace('get', '').toLowerCase()] };
  } else {
    fn = name[1];
    name = name[0];
  }
  MediaElementAmplifier.prototype[name] = fn;
});

const downloadState = new Map();

function download (url, title) {
  const downloadEl = document.createElement('a');
  downloadEl.href = url;
  downloadEl.target = '_blank';
  downloadEl.download = title;
  downloadEl.click();
}

function mediaDownload (mediaEl, title, downloadType) {
  /**
   * When the media contains a source tag, the real address of the media tag will be currentSrc
   * https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/currentSrc
   */
  const mediaUrl = mediaEl.src || mediaEl.currentSrc;
  const mediaState = downloadState.get(mediaUrl) || {};

  if (mediaEl && mediaUrl && !mediaUrl.startsWith('blob:')) {
    const mediaInfo = {
      type: mediaEl instanceof HTMLVideoElement ? 'video' : 'audio',
      format: mediaEl instanceof HTMLVideoElement ? 'mp4' : 'mp3'
    };
    let mediaTitle = `${title || mediaEl.getAttribute('data-title') || document.title || Date.now()}_${mediaInfo.type}.${mediaInfo.format}`;

    /* For media files less than 5 minutes, try to download them through fetch*/
    if (downloadType === 'blob' || mediaEl.duration < 60 * 5) {
      if (mediaState.downloading) {
        /* If it is less than 1s since the last download, no operation will be responded to */
        if (Date.now() - mediaState.downloading < 1000 * 1) {
          return false
        } else {
          const confirm = original.confirm(i18n.t('mediaDownload.downloading'));
          if (!confirm) {
            return false
          }
        }
      }

      if (mediaState.hasDownload) {
        const confirm = original.confirm(i18n.t('mediaDownload.hasDownload'));
        if (!confirm) {
          return false
        }
      }

      mediaTitle = original.prompt(i18n.t('mediaDownload.confirmTitle'), mediaTitle);
      if (!mediaTitle) { return false }

      if (!mediaTitle.endsWith(mediaInfo.format)) {
        mediaTitle = mediaTitle + '.' + mediaInfo.format;
      }

      let fetchUrl = mediaUrl;
      if (mediaUrl.startsWith('http://') && location.href.startsWith('https://')) {
        /* Fetching http resources in https will cause block:mixed-content errors, so try to unify the address to start with https*/
        fetchUrl = mediaUrl.replace('http://', ​​'https://');
      }

      mediaState.downloading = Date.now();
      downloadState.set(mediaUrl, mediaState);
      fetch(fetchUrl).then(res => {
        res.blob().then(blob => {
          const blobUrl = window.URL.createObjectURL(blob);
          download(blobUrl, mediaTitle);

          mediaState.hasDownload = true;
          delete mediaState.downloading;
          downloadState.set(mediaUrl, mediaState);
          window.URL.revokeObjectURL(blobUrl);
        });
      }).catch(err => {
        original.console.error('fetch download operation failed:', err);

        /* Download the bottom line*/
        download(mediaUrl, mediaTitle);

        delete mediaState.downloading;
        mediaState.hasDownload = true;
        downloadState.set(mediaUrl, mediaState);
      });
    } else {
      download(mediaUrl, mediaTitle);
    }
  } else if (mediaSource.hasInit()) {
    /* Download media files managed through MediaSource */
    mediaSource.downloadMediaSource(mediaEl, title);
  } else {
    original.alert(i18n.t('mediaDownload.notSupport'));
  }
}

const device = {
  isMobile: () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
  },
  isTablet: () => {
    return /iPad/i.test(navigator.userAgent)
  },
  isDesktop: () => {
    return !device.isMobile() && !device.isTablet()
  },
  isChrome: () => {
    return /Chrome/i.test(navigator.userAgent)
  },
  isFirefox: () => {
    return /Firefox/i.test(navigator.userAgent)
  },
  isSafari: () => {
    return /Safari/i.test(navigator.userAgent)
  },
  isEdge: () => {
    return /Edge/i.test(navigator.userAgent)
  }
};

/**
 * Provide some global methods shared with h5player to reduce duplicate code and share some objects that need to be executed in advance to obtain them.
 */


const h5playerUIProvider = {
  version,
  originalMethods,
  parseHTML,
  observeVisibility,
  isOutOfDocument,
  i18n,
  debug,
  configManager,
  globalFunctional,
  device
};

/**
 * Create a window sandbox through proxy and pass it to h5playerUiWraper
 * The purpose is to provide some clean global objects to h5playerUI
 * In addition, it is to avoid the code in h5playerUI from contaminating the actual window object.
 */

const windowSandbox = new Proxy({}, {
  get: function (target, key) {
    if (key === 'h5playerUIProvider') {
      return h5playerUIProvider
    }

    if (key === 'HTMLElement') {
      return originalMethods.HTMLElement
    }

    return window[key]
  }
});

/**
 * Interact with the official website to achieve the following functions
 * 1. New version detection (to be implemented)
 * 2. Statistics on script installation and usage
 * 3. Get the latest recommended information
 */


const remoteHelperUrl = 'https://h5player.anzz.top/h5p-helper/index.html';

const remoteHelper = {
  init () {
    this.remoteHandler();

    /* Reduce repeated loading and prevent loop nesting */
    if (isInIframe()) { return false }

    if (!configManager.isGlobalStorageUsable()) { return false }

    const contactRemoteHelperSuccessTime = configManager.getGlobalStorage('contactRemoteHelperSuccessTime');
    let lastContactRemoteHelperTime = configManager.getGlobalStorage('lastContactRemoteHelperTime');
    if (!lastContactRemoteHelperTime) {
      configManager.setGlobalStorage('lastContactRemoteHelperTime', Date.now());
      lastContactRemoteHelperTime = Date.now();
    }

    /**
     * Reduce the number of handshakes with remote assistants
     * If there is a successful handshake within 12 hours, the handshake will not be repeated.
     * Wait at least 1 minute before the next handshake
     */
    const syncInterval = configManager.getGlobalStorage('remoteHelperSyncInterval') || 1000 * 60 * 60 * 12;
    if (contactRemoteHelperSuccessTime && Date.now() - contactRemoteHelperSuccessTime < syncInterval) { return false }
    if (Date.now() - lastContactRemoteHelperTime < 1000 * 60) { return false }

    this.establishRemoteConnection();
  },

  establishRemoteConnection () {
    const lastSucTime = configManager.getGlobalStorage('contactRemoteHelperSuccessTime') || '0';
    const timeStr = new Date().toISOString().split('T')[0].replace(/-/g, '') + new Date().getHours() + '' + new Date(). getMinutes();
    const iframe = document.createElement('iframe');
    iframe.src = `${remoteHelperUrl}?t=${timeStr}&v=${version}&lst=${lastSucTime}`;
    iframe.style.cssText = 'width:0; height:0; border:none; visibility:hidden; opacity:0;';
    const insertIframe = () => {
      document.body.appendChild(iframe);
      configManager.setGlobalStorage('lastContactRemoteHelperTime', Date.now());
    };

    if (!document.body || !document.body.appendChild) {
      window.addEventListener('DOMContentLoaded', insertIframe, { once: true });
    } else {
      insertIframe();
    }

    /* Regardless of whether the handshake is successful or not, remove the iframe after 10 seconds and actively terminate the connection with the remote assistant*/
    setTimeout(() => { document.body.removeChild(iframe); }, 10000);
  },

  async remoteHandler () {
    if (!location.href.startsWith(remoteHelperUrl) || !configManager.isGlobalStorageUsable()) { return false }

    function syncRemoteData (pageWindow) {
      if (pageWindow.recommendList) {
        configManager.setGlobalStorage('recommendList', pageWindow.recommendList);
      }

      /* Version comparison judgment logic to be added*/
      if (pageWindow.remoteVersion) {
        configManager.setGlobalStorage('remoteVersion', pageWindow.remoteVersion);
      }

      if (pageWindow.remoteHelperSyncInterval) {
        configManager.setGlobalStorage('remoteHelperSyncInterval', pageWindow.remoteHelperSyncInterval);
      }

      configManager.setGlobalStorage('contactRemoteHelperSuccessTime', Date.now());
    }

    let checkCount = 0;
    function checkRemoteHelperStatus (pageWindow) {
      if (!Array.isArray(pageWindow.recommendList)) {
        if (checkCount < 30) {
          setTimeout(() => {
            checkCount++;
            checkRemoteHelperStatus(pageWindow);
          }, 200);
        }

        return
      }

      syncRemoteData(pageWindow);
    }

    const pageWindow = await getPageWindow();
    pageWindow && checkRemoteHelperStatus(pageWindow);
  }
};

function registerMouseEvent (h5player) {
  const t = h5player;

  const longPressTime = configManager.get('mouse.longPressTime') || 600;
  let mouseEventTimer = null;
  let hasHandleEvent = false;
  let isPaused = false;
  let oldPlaybackRate = 1;

  document.addEventListener('mousedown', function (event) {
    const player = t.player();

    if (!player || !(player instanceof HTMLVideoElement)) { return }

    isPaused = player.paused;

    if (!isCoordinateInElement(event.clientX, event.clientY, player)) { return }

    /* Reserve an area of ​​80px at the bottom to avoid abnormal operation of the toolbar*/
    const rect = player.getBoundingClientRect();
    if (event.clientY > rect.bottom - 80) { return }

    /* Mouse left button event*/
    if (event.button === 0) {
      mouseEventTimer = setTimeout(() => {
        hasHandleEvent = true;
        oldPlaybackRate = t.getPlaybackRate();
        t.unLockPlaybackRate();
        t.setPlaybackRate(3);
        t.lockPlaybackRate(800);

        event.preventDefault();
        event.stopPropagation();
      }, longPressTime);
    }
  }, true);

  document.addEventListener('mouseup', function (event) {
    mouseEventTimer && clearTimeout(mouseEventTimer);

    if (hasHandleEvent) {
      hasHandleEvent = false;
      event.preventDefault();
      event.stopPropagation();

      if (isPaused) {
        t.mediaPlusApi.lockPlay(600);
      } else {
        t.mediaPlusApi.lockPause(600);
      }

      t.unLockPlaybackRate();
      t.setPlaybackRate(oldPlaybackRate);
      t.lockPlaybackRate(800);
    }
  }, true);
}

const h5playerUI = function (window) {var h5playerUI = (function () {

  const sheet = new CSSStyleSheet();sheet.replaceSync(":root,\n:host,\n.sl-theme-light {\n  color-scheme: light;\n\n  --sl-color-gray-50: hsl(0 0% 97.5%);\n  --sl-color-gray-100: hsl(240 4.8% 95.9%);\n  --sl-color-gray-200: hsl(240 5.9% 90%);\n  --sl-color-gray-300: hsl(240 4.9% 83.9%);\n  --sl-color-gray-400: hsl(240 5% 64.9%);\n  --sl-color-gray-500: hsl(240 3.8% 46.1%);\n  --sl-color-gray-600: hsl(240 5.2% 33.9%);\n  --sl-color-gray-700: hsl(240 5.3% 26.1%);\n  --sl-color-gray-800: hsl(240 3.7% 15.9%);\n  --sl-color-gray-900: hsl(240 5.9% 10%);\n  --sl-color-gray-950: hsl(240 7.3% 8%);\n\n  --sl-color-red-50: hsl(0 85.7% 97.3%);\n  --sl-color-red-100: hsl(0 93.3% 94.1%);\n  --sl-color-red-200: hsl(0 96.3% 89.4%);\n  --sl-color-red-300: hsl(0 93.5% 81.8%);\n  --sl-color-red-400: hsl(0 90.6% 70.8%);\n  --sl-color-red-500: hsl(0 84.2% 60.2%);\n  --sl-color-red-600: hsl(0 72.2% 50.6%);\n  --sl-color-red-700: hsl(0 73.7% 41.8%);\n  --sl-color-red-800: hsl(0 70% 35.3%);\n  --sl-color-red-900: hsl(0 62.8% 30.6%);\n  --sl-color-red-950: hsl(0 60% 19.6%);\n\n  --sl-color-orange-50: hsl(33.3 100% 96.5%);\n  --sl-color-orange-100: hsl(34.3 100% 91.8%);\n  --sl-color-orange-200: hsl(32.1 97.7% 83.1%);\n  --sl-color-orange-300: hsl(30.7 97.2% 72.4%);\n  --sl-color-orange-400: hsl(27 96% 61%);\n  --sl-color-orange-500: hsl(24.6 95% 53.1%);\n  --sl-color-orange-600: hsl(20.5 90.2% 48.2%);\n  --sl-color-orange-700: hsl(17.5 88.3% 40.4%);\n  --sl-color-orange-800: hsl(15 79.1% 33.7%);\n  --sl-color-orange-900: hsl(15.3 74.6% 27.8%);\n  --sl-color-orange-950: hsl(15.2 69.1% 19%);\n\n  --sl-color-amber-50: hsl(48 100% 96.1%);\n  --sl-color-amber-100: hsl(48 96.5% 88.8%);\n  --sl-color-amber-200: hsl(48 96.6% 76.7%);\n  --sl-color-amber-300: hsl(45.9 96.7% 64.5%);\n  --sl-color-amber-400: hsl(43.3 96.4% 56.3%);\n  --sl-color-amber-500: hsl(37.7 92.1% 50.2%);\n  --sl-color-amber-600: hsl(32.1 94.6% 43.7%);\n  --sl-color-amber-700: hsl(26 90.5% 37.1%);\n  --sl-color-amber-800: hsl(22.7 82.5% 31.4%);\n  --sl-color-amber-900: hsl(21.7 77.8% 26.5%);\n  --sl-color-amber-950: hsl(22.9 74.1% 16.7%);\n\n  --sl-color-yellow-50: hsl(54.5 91.7% 95.3%);\n  --sl-color-yellow-100: hsl(54.9 96.7% 88%);\n  --sl-color-yellow-200: hsl(52.8 98.3% 76.9%);\n  --sl-color-yellow-300: hsl(50.4 97.8% 63.5%);\n  --sl-color-yellow-400: hsl(47.9 95.8% 53.1%);\n  --sl-color-yellow-500: hsl(45.4 93.4% 47.5%);\n  --sl-color-yellow-600: hsl(40.6 96.1% 40.4%);\n  --sl-color-yellow-700: hsl(35.5 91.7% 32.9%);\n  --sl-color-yellow-800: hsl(31.8 81% 28.8%);\n  --sl-color-yellow-900: hsl(28.4 72.5% 25.7%);\n  --sl-color-yellow-950: hsl(33.1 69% 13.9%);\n\n  --sl-color-lime-50: hsl(78.3 92% 95.1%);\n  --sl-color-lime-100: hsl(79.6 89.1% 89.2%);\n  --sl-color-lime-200: hsl(80.9 88.5% 79.6%);\n  --sl-color-lime-300: hsl(82 84.5% 67.1%);\n  --sl-color-lime-400: hsl(82.7 78% 55.5%);\n  --sl-color-lime-500: hsl(83.7 80.5% 44.3%);\n  --sl-color-lime-600: hsl(84.8 85.2% 34.5%);\n  --sl-color-lime-700: hsl(85.9 78.4% 27.3%);\n  --sl-color-lime-800: hsl(86.3 69% 22.7%);\n  --sl-color-lime-900: hsl(87.6 61.2% 20.2%);\n  --sl-color-lime-950: hsl(86.5 60.6% 13.9%);\n\n  --sl-color-green-50: hsl(138.5 76.5% 96.7%);\n  --sl-color-green-100: hsl(140.6 84.2% 92.5%);\n  --sl-color-green-200: hsl(141 78.9% 85.1%);\n  --sl-color-green-300: hsl(141.7 76.6% 73.1%);\n  --sl-color-green-400: hsl(141.9 69.2% 58%);\n  --sl-color-green-500: hsl(142.1 70.6% 45.3%);\n  --sl-color-green-600: hsl(142.1 76.2% 36.3%);\n  --sl-color-green-700: hsl(142.4 71.8% 29.2%);\n  --sl-color-green-800: hsl(142.8 64.2% 24.1%);\n  --sl-color-green-900: hsl(143.8 61.2% 20.2%);\n  --sl-color-green-950: hsl(144.3 60.7% 12%);\n\n  --sl-color-emerald-50: hsl(151.8 81% 95.9%);\n  --sl-color-emerald-100: hsl(149.3 80.4% 90%);\n  --sl-color-emerald-200: hsl(152.4 76% 80.4%);\n  --sl-color-emerald-300: hsl(156.2 71.6% 66.9%);\n  --sl-color-emerald-400: hsl(158.1 64.4% 51.6%);\n  --sl-color-emerald-500: hsl(160.1 84.1% 39.4%);\n  --sl-color-emerald-600: hsl(161.4 93.5% 30.4%);\n  --sl-color-emerald-700: hsl(162.9 93.5% 24.3%);\n  --sl-color-emerald-800: hsl(163.1 88.1% 19.8%);\n  --sl-color-emerald-900: hsl(164.2 85.7% 16.5%);\n  --sl-color-emerald-950: hsl(164.3 87.5% 9.4%);\n\n  --sl-color-teal-50: hsl(166.2 76.5% 96.7%);\n  --sl-color-teal-100: hsl(167.2 85.5% 89.2%);\n  --sl-color-teal-200: hsl(168.4 83.8% 78.2%);\n  --sl-color-teal-300: hsl(170.6 76.9% 64.3%);\n  --sl-color-teal-400: hsl(172.5 66% 50.4%);\n  --sl-color-teal-500: hsl(173.4 80.4% 40%);\n  --sl-color-teal-600: hsl(174.7 83.9% 31.6%);\n  --sl-color-teal-700: hsl(175.3 77.4% 26.1%);\n  --sl-color-teal-800: hsl(176.1 69.4% 21.8%);\n  --sl-color-teal-900: hsl(175.9 60.8% 19%);\n  --sl-color-teal-950: hsl(176.5 58.6% 11.4%);\n\n  --sl-color-cyan-50: hsl(183.2 100% 96.3%);\n  --sl-color-cyan-100: hsl(185.1 95.9% 90.4%);\n  --sl-color-cyan-200: hsl(186.2 93.5% 81.8%);\n  --sl-color-cyan-300: hsl(187 92.4% 69%);\n  --sl-color-cyan-400: hsl(187.9 85.7% 53.3%);\n  --sl-color-cyan-500: hsl(188.7 94.5% 42.7%);\n  --sl-color-cyan-600: hsl(191.6 91.4% 36.5%);\n  --sl-color-cyan-700: hsl(192.9 82.3% 31%);\n  --sl-color-cyan-800: hsl(194.4 69.6% 27.1%);\n  --sl-color-cyan-900: hsl(196.4 63.6% 23.7%);\n  --sl-color-cyan-950: hsl(196.8 61% 16.1%);\n\n  --sl-color-sky-50: hsl(204 100% 97.1%);\n  --sl-color-sky-100: hsl(204 93.8% 93.7%);\n  --sl-color-sky-200: hsl(200.6 94.4% 86.1%);\n  --sl-color-sky-300: hsl(199.4 95.5% 73.9%);\n  --sl-color-sky-400: hsl(198.4 93.2% 59.6%);\n  --sl-color-sky-500: hsl(198.6 88.7% 48.4%);\n  --sl-color-sky-600: hsl(200.4 98% 39.4%);\n  --sl-color-sky-700: hsl(201.3 96.3% 32.2%);\n  --sl-color-sky-800: hsl(201 90% 27.5%);\n  --sl-color-sky-900: hsl(202 80.3% 23.9%);\n  --sl-color-sky-950: hsl(202.3 73.8% 16.5%);\n\n  --sl-color-blue-50: hsl(213.8 100% 96.9%);\n  --sl-color-blue-100: hsl(214.3 94.6% 92.7%);\n  --sl-color-blue-200: hsl(213.3 96.9% 87.3%);\n  --sl-color-blue-300: hsl(211.7 96.4% 78.4%);\n  --sl-color-blue-400: hsl(213.1 93.9% 67.8%);\n  --sl-color-blue-500: hsl(217.2 91.2% 59.8%);\n  --sl-color-blue-600: hsl(221.2 83.2% 53.3%);\n  --sl-color-blue-700: hsl(224.3 76.3% 48%);\n  --sl-color-blue-800: hsl(225.9 70.7% 40.2%);\n  --sl-color-blue-900: hsl(224.4 64.3% 32.9%);\n  --sl-color-blue-950: hsl(226.2 55.3% 18.4%);\n\n  --sl-color-indigo-50: hsl(225.9 100% 96.7%);\n  --sl-color-indigo-100: hsl(226.5 100% 93.9%);\n  --sl-color-indigo-200: hsl(228 96.5% 88.8%);\n  --sl-color-indigo-300: hsl(229.7 93.5% 81.8%);\n  --sl-color-indigo-400: hsl(234.5 89.5% 73.9%);\n  --sl-color-indigo-500: hsl(238.7 83.5% 66.7%);\n  --sl-color-indigo-600: hsl(243.4 75.4% 58.6%);\n  --sl-color-indigo-700: hsl(244.5 57.9% 50.6%);\n  --sl-color-indigo-800: hsl(243.7 54.5% 41.4%);\n  --sl-color-indigo-900: hsl(242.2 47.4% 34.3%);\n  --sl-color-indigo-950: hsl(243.5 43.6% 22.9%);\n\n  --sl-color-violet-50: hsl(250 100% 97.6%);\n  --sl-color-violet-100: hsl(251.4 91.3% 95.5%);\n  --sl-color-violet-200: hsl(250.5 95.2% 91.8%);\n  --sl-color-violet-300: hsl(252.5 94.7% 85.1%);\n  --sl-color-violet-400: hsl(255.1 91.7% 76.3%);\n  --sl-color-violet-500: hsl(258.3 89.5% 66.3%);\n  --sl-color-violet-600: hsl(262.1 83.3% 57.8%);\n  --sl-color-violet-700: hsl(263.4 70% 50.4%);\n  --sl-color-violet-800: hsl(263.4 69.3% 42.2%);\n  --sl-color-violet-900: hsl(263.5 67.4% 34.9%);\n  --sl-color-violet-950: hsl(265.1 61.5% 21.4%);\n\n  --sl-color-purple-50: hsl(270 100% 98%);\n  --sl-color-purple-100: hsl(268.7 100% 95.5%);\n  --sl-color-purple-200: hsl(268.6 100% 91.8%);\n  --sl-color-purple-300: hsl(269.2 97.4% 85.1%);\n  --sl-color-purple-400: hsl(270 95.2% 75.3%);\n  --sl-color-purple-500: hsl(270.7 91% 65.1%);\n  --sl-color-purple-600: hsl(271.5 81.3% 55.9%);\n  --sl-color-purple-700: hsl(272.1 71.7% 47.1%);\n  --sl-color-purple-800: hsl(272.9 67.2% 39.4%);\n  --sl-color-purple-900: hsl(273.6 65.6% 32%);\n  --sl-color-purple-950: hsl(276 59.5% 16.5%);\n\n  --sl-color-fuchsia-50: hsl(289.1 100% 97.8%);\n  --sl-color-fuchsia-100: hsl(287 100% 95.5%);\n  --sl-color-fuchsia-200: hsl(288.3 95.8% 90.6%);\n  --sl-color-fuchsia-300: hsl(291.1 93.1% 82.9%);\n  --sl-color-fuchsia-400: hsl(292 91.4% 72.5%);\n  --sl-color-fuchsia-500: hsl(292.2 84.1% 60.6%);\n  --sl-color-fuchsia-600: hsl(293.4 69.5% 48.8%);\n  --sl-color-fuchsia-700: hsl(294.7 72.4% 39.8%);\n  --sl-color-fuchsia-800: hsl(295.4 70.2% 32.9%);\n  --sl-color-fuchsia-900: hsl(296.7 63.6% 28%);\n  --sl-color-fuchsia-950: hsl(297.1 56.8% 14.5%);\n\n  --sl-color-pink-50: hsl(327.3 73.3% 97.1%);\n  --sl-color-pink-100: hsl(325.7 77.8% 94.7%);\n  --sl-color-pink-200: hsl(325.9 84.6% 89.8%);\n  --sl-color-pink-300: hsl(327.4 87.1% 81.8%);\n  --sl-color-pink-400: hsl(328.6 85.5% 70.2%);\n  --sl-color-pink-500: hsl(330.4 81.2% 60.4%);\n  --sl-color-pink-600: hsl(333.3 71.4% 50.6%);\n  --sl-color-pink-700: hsl(335.1 77.6% 42%);\n  --sl-color-pink-800: hsl(335.8 74.4% 35.3%);\n  --sl-color-pink-900: hsl(335.9 69% 30.4%);\n  --sl-color-pink-950: hsl(336.2 65.4% 15.9%);\n\n  --sl-color-rose-50: hsl(355.7 100% 97.3%);\n  --sl-color-rose-100: hsl(355.6 100% 94.7%);\n  --sl-color-rose-200: hsl(352.7 96.1% 90%);\n  --sl-color-rose-300: hsl(352.6 95.7% 81.8%);\n  --sl-color-rose-400: hsl(351.3 94.5% 71.4%);\n  --sl-color-rose-500: hsl(349.7 89.2% 60.2%);\n  --sl-color-rose-600: hsl(346.8 77.2% 49.8%);\n  --sl-color-rose-700: hsl(345.3 82.7% 40.8%);\n  --sl-color-rose-800: hsl(343.4 79.7% 34.7%);\n  --sl-color-rose-900: hsl(341.5 75.5% 30.4%);\n  --sl-color-rose-950: hsl(341.3 70.1% 17.1%);\n\n  --sl-color-primary-50: var(--sl-color-sky-50);\n  --sl-color-primary-100: var(--sl-color-sky-100);\n  --sl-color-primary-200: var(--sl-color-sky-200);\n  --sl-color-primary-300: var(--sl-color-sky-300);\n  --sl-color-primary-400: var(--sl-color-sky-400);\n  --sl-color-primary-500: var(--sl-color-sky-500);\n  --sl-color-primary-600: var(--sl-color-sky-600);\n  --sl-color-primary-700: var(--sl-color-sky-700);\n  --sl-color-primary-800: var(--sl-color-sky-800);\n  --sl-color-primary-900: var(--sl-color-sky-900);\n  --sl-color-primary-950: var(--sl-color-sky-950);\n\n  --sl-color-success-50: var(--sl-color-green-50);\n  --sl-color-success-100: var(--sl-color-green-100);\n  --sl-color-success-200: var(--sl-color-green-200);\n  --sl-color-success-300: var(--sl-color-green-300);\n  --sl-color-success-400: var(--sl-color-green-400);\n  --sl-color-success-500: var(--sl-color-green-500);\n  --sl-color-success-600: var(--sl-color-green-600);\n  --sl-color-success-700: var(--sl-color-green-700);\n  --sl-color-success-800: var(--sl-color-green-800);\n  --sl-color-success-900: var(--sl-color-green-900);\n  --sl-color-success-950: var(--sl-color-green-950);\n\n  --sl-color-warning-50: var(--sl-color-amber-50);\n  --sl-color-warning-100: var(--sl-color-amber-100);\n  --sl-color-warning-200: var(--sl-color-amber-200);\n  --sl-color-warning-300: var(--sl-color-amber-300);\n  --sl-color-warning-400: var(--sl-color-amber-400);\n  --sl-color-warning-500: var(--sl-color-amber-500);\n  --sl-color-warning-600: var(--sl-color-amber-600);\n  --sl-color-warning-700: var(--sl-color-amber-700);\n  --sl-color-warning-800: var(--sl-color-amber-800);\n  --sl-color-warning-900: var(--sl-color-amber-900);\n  --sl-color-warning-950: var(--sl-color-amber-950);\n\n  --sl-color-danger-50: var(--sl-color-red-50);\n  --sl-color-danger-100: var(--sl-color-red-100);\n  --sl-color-danger-200: var(--sl-color-red-200);\n  --sl-color-danger-300: var(--sl-color-red-300);\n  --sl-color-danger-400: var(--sl-color-red-400);\n  --sl-color-danger-500: var(--sl-color-red-500);\n  --sl-color-danger-600: var(--sl-color-red-600);\n  --sl-color-danger-700: var(--sl-color-red-700);\n  --sl-color-danger-800: var(--sl-color-red-800);\n  --sl-color-danger-900: var(--sl-color-red-900);\n  --sl-color-danger-950: var(--sl-color-red-950);\n\n  --sl-color-neutral-50: var(--sl-color-gray-50);\n  --sl-color-neutral-100: var(--sl-color-gray-100);\n  --sl-color-neutral-200: var(--sl-color-gray-200);\n  --sl-color-neutral-300: var(--sl-color-gray-300);\n  --sl-color-neutral-400: var(--sl-color-gray-400);\n  --sl-color-neutral-500: var(--sl-color-gray-500);\n  --sl-color-neutral-600: var(--sl-color-gray-600);\n  --sl-color-neutral-700: var(--sl-color-gray-700);\n  --sl-color-neutral-800: var(--sl-color-gray-800);\n  --sl-color-neutral-900: var(--sl-color-gray-900);\n  --sl-color-neutral-950: var(--sl-color-gray-950);\n\n  --sl-color-neutral-0: hsl(0, 0%, 100%);\n  --sl-color-neutral-1000: hsl(0, 0%, 0%);\n\n  --sl-border-radius-small: 0.1875rem;\n  --sl-border-radius-medium: 0.25rem;\n  --sl-border-radius-large: 0.5rem;\n  --sl-border-radius-x-large: 1rem;\n\n  --sl-border-radius-circle: 50%;\n  --sl-border-radius-pill: 9999px;\n\n  --sl-shadow-x-small: 0 1px 2px hsl(240 3.8% 46.1% / 6%);\n  --sl-shadow-small: 0 1px 2px hsl(240 3.8% 46.1% / 12%);\n  --sl-shadow-medium: 0 2px 4px hsl(240 3.8% 46.1% / 12%);\n  --sl-shadow-large: 0 2px 8px hsl(240 3.8% 46.1% / 12%);\n  --sl-shadow-x-large: 0 4px 16px hsl(240 3.8% 46.1% / 12%);\n\n  --sl-spacing-3x-small: 0.125rem;\n  --sl-spacing-2x-small: 0.25rem;\n  --sl-spacing-x-small: 0.5rem;\n  --sl-spacing-small: 0.75rem;\n  --sl-spacing-medium: 1rem;\n  --sl-spacing-large: 1.25rem;\n  --sl-spacing-x-large: 1.75rem;\n  --sl-spacing-2x-large: 2.25rem;\n  --sl-spacing-3x-large: 3rem;\n  --sl-spacing-4x-large: 4.5rem;\n\n  --sl-transition-x-slow: 1000ms;\n  --sl-transition-slow: 500ms;\n  --sl-transition-medium: 250ms;\n  --sl-transition-fast: 150ms;\n  --sl-transition-x-fast: 50ms;\n\n  --sl-font-mono: SFMono-Regular, Consolas, \"Liberation Mono\", Menlo, monospace;\n  --sl-font-sans: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto,\n    Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\",\n    \"Segoe UI Symbol\";\n  --sl-font-serif: Georgia, \"Times New Roman\", serif;\n\n  --sl-font-size-2x-small: 0.625rem;\n  --sl-font-size-x-small: 0.75rem;\n  --sl-font-size-small: 0.875rem;\n  --sl-font-size-medium: 1rem;\n  --sl-font-size-large: 1.25rem;\n  --sl-font-size-x-large: 1.5rem;\n  --sl-font-size-2x-large: 2.25rem;\n  --sl-font-size-3x-large: 3rem;\n  --sl-font-size-4x-large: 4.5rem;\n\n  --sl-font-weight-light: 300;\n  --sl-font-weight-normal: 400;\n  --sl-font-weight-semibold: 500;\n  --sl-font-weight-bold: 700;\n\n  --sl-letter-spacing-denser: -0.03em;\n  --sl-letter-spacing-dense: -0.015em;\n  --sl-letter-spacing-normal: normal;\n  --sl-letter-spacing-loose: 0.075em;\n  --sl-letter-spacing-looser: 0.15em;\n\n  --sl-line-height-denser: 1;\n  --sl-line-height-dense: 1.4;\n  --sl-line-height-normal: 1.8;\n  --sl-line-height-loose: 2.2;\n  --sl-line-height-looser: 2.6;\n\n  --sl-focus-ring-color: var(--sl-color-primary-600);\n  --sl-focus-ring-style: solid;\n  --sl-focus-ring-width: 3px;\n  --sl-focus-ring: var(--sl-focus-ring-style) var(--sl-focus-ring-width)\n    var(--sl-focus-ring-color);\n  --sl-focus-ring-offset: 1px;\n\n  --sl-button-font-size-small: var(--sl-font-size-x-small);\n  --sl-button-font-size-medium: var(--sl-font-size-small);\n  --sl-button-font-size-large: var(--sl-font-size-medium);\n\n  --sl-input-height-small: 1.875rem;\n  --sl-input-height-medium: 2.5rem;\n  --sl-input-height-large: 3.125rem;\n\n  --sl-input-background-color: var(--sl-color-neutral-0);\n  --sl-input-background-color-hover: var(--sl-input-background-color);\n  --sl-input-background-color-focus: var(--sl-input-background-color);\n  --sl-input-background-color-disabled: var(--sl-color-neutral-100);\n  --sl-input-border-color: var(--sl-color-neutral-300);\n  --sl-input-border-color-hover: var(--sl-color-neutral-400);\n  --sl-input-border-color-focus: var(--sl-color-primary-500);\n  --sl-input-border-color-disabled: var(--sl-color-neutral-300);\n  --sl-input-border-width: 1px;\n  --sl-input-required-content: \"*\";\n  --sl-input-required-content-offset: -2px;\n  --sl-input-required-content-color: var(--sl-input-label-color);\n\n  --sl-input-border-radius-small: var(--sl-border-radius-medium);\n  --sl-input-border-radius-medium: var(--sl-border-radius-medium);\n  --sl-input-border-radius-large: var(--sl-border-radius-medium);\n\n  --sl-input-font-family: var(--sl-font-sans);\n  --sl-input-font-weight: var(--sl-font-weight-normal);\n  --sl-input-font-size-small: var(--sl-font-size-small);\n  --sl-input-font-size-medium: var(--sl-font-size-medium);\n  --sl-input-font-size-large: var(--sl-font-size-large);\n  --sl-input-letter-spacing: var(--sl-letter-spacing-normal);\n\n  --sl-input-color: var(--sl-color-neutral-700);\n  --sl-input-color-hover: var(--sl-color-neutral-700);\n  --sl-input-color-focus: var(--sl-color-neutral-700);\n  --sl-input-color-disabled: var(--sl-color-neutral-900);\n  --sl-input-icon-color: var(--sl-color-neutral-500);\n  --sl-input-icon-color-hover: var(--sl-color-neutral-600);\n  --sl-input-icon-color-focus: var(--sl-color-neutral-600);\n  --sl-input-placeholder-color: var(--sl-color-neutral-500);\n  --sl-input-placeholder-color-disabled: var(--sl-color-neutral-600);\n  --sl-input-spacing-small: var(--sl-spacing-small);\n  --sl-input-spacing-medium: var(--sl-spacing-medium);\n  --sl-input-spacing-large: var(--sl-spacing-large);\n\n  --sl-input-focus-ring-color: hsl(198.6 88.7% 48.4% / 40%);\n  --sl-input-focus-ring-offset: 0;\n\n  --sl-input-filled-background-color: var(--sl-color-neutral-100);\n  --sl-input-filled-background-color-hover: var(--sl-color-neutral-100);\n  --sl-input-filled-background-color-focus: var(--sl-color-neutral-100);\n  --sl-input-filled-background-color-disabled: var(--sl-color-neutral-100);\n  --sl-input-filled-color: var(--sl-color-neutral-800);\n  --sl-input-filled-color-hover: var(--sl-color-neutral-800);\n  --sl-input-filled-color-focus: var(--sl-color-neutral-700);\n  --sl-input-filled-color-disabled: var(--sl-color-neutral-800);\n\n  --sl-input-label-font-size-small: var(--sl-font-size-small);\n  --sl-input-label-font-size-medium: var(--sl-font-size-medium);\n  --sl-input-label-font-size-large: var(--sl-font-size-large);\n  --sl-input-label-color: inherit;\n\n  --sl-input-help-text-font-size-small: var(--sl-font-size-x-small);\n  --sl-input-help-text-font-size-medium: var(--sl-font-size-small);\n  --sl-input-help-text-font-size-large: var(--sl-font-size-medium);\n  --sl-input-help-text-color: var(--sl-color-neutral-500);\n\n  --sl-toggle-size-small: 0.875rem;\n  --sl-toggle-size-medium: 1.125rem;\n  --sl-toggle-size-large: 1.375rem;\n\n  --sl-overlay-background-color: hsl(240 3.8% 46.1% / 33%);\n\n  --sl-panel-background-color: var(--sl-color-neutral-0);\n  --sl-panel-border-color: var(--sl-color-neutral-200);\n  --sl-panel-border-width: 1px;\n\n  --sl-tooltip-border-radius: var(--sl-border-radius-medium);\n  --sl-tooltip-background-color: var(--sl-color-neutral-800);\n  --sl-tooltip-color: var(--sl-color-neutral-0);\n  --sl-tooltip-font-family: var(--sl-font-sans);\n  --sl-tooltip-font-weight: var(--sl-font-weight-normal);\n  --sl-tooltip-font-size: var(--sl-font-size-small);\n  --sl-tooltip-line-height: var(--sl-line-height-dense);\n  --sl-tooltip-padding: var(--sl-spacing-2x-small) var(--sl-spacing-x-small);\n  --sl-tooltip-arrow-size: 6px;\n\n  --sl-z-index-drawer: 999700;\n  --sl-z-index-dialog: 999800;\n  --sl-z-index-dropdown: 999900;\n  --sl-z-index-toast: 999950;\n  --sl-z-index-tooltip: 9991000;\n}\n\n.sl-scroll-lock {\n  padding-right: var(--sl-scroll-lock-size) !important;\n  overflow: hidden !important;\n}\n\n.sl-toast-stack {\n  position: fixed;\n  top: 0;\n  inset-inline-end: 0;\n  z-index: var(--sl-z-index-toast);\n  width: 28rem;\n  max-width: 100%;\n  max-height: 100%;\n  overflow: auto;\n}\n\n.sl-toast-stack sl-alert {\n  margin: var(--sl-spacing-medium);\n}\n\n.sl-toast-stack sl-alert::part(base) {\n  box-shadow: var(--sl-shadow-large);\n}\n\nsl-drawer::part(base) {\n  color: var(--sl-color-neutral-800) !important;\n}\n\n.h5player-popup-wrap {\n  position: relative;\n  z-index: 99999999;\n  opacity: 0;\n}\n\n.h5player-popup-wrap sl-popup {\n  position: relative;\n}\n\n.h5player-popup-wrap .h5player-popup-content {\n  background-color: rgba(0, 0, 0, 0.9);\n  color: #fff;\n  font-size: 16px;\n  min-width: 220px;\n  height: 48px;\n  line-height: 48px;\n  display: flex;\n  padding: 0 16px;\n  border-radius: 6px 6px 0 0;\n  border-bottom: 2px solid rgba(255, 255, 255, 0.2);\n\n  /* 灰色向下的过度阴影 */\n  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.7);\n\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n@keyframes text-lumos {\n  0%,100%{ color:#fff; }\n\t50%{ color:#ccc; }\n}\n\n.h5player-popup-content .h5p-logo-mod {\n  white-space: nowrap;\n  font-weight: 500;\n  text-shadow: 0px 0px 2px #666, 0 0 30px #666;\n  animation: text-lumos 5s infinite;\n}\n\n.h5player-popup-content .h5p-menu-wrap {}\n\n.h5player-popup-content .h5p-action-mod {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.h5player-popup-content .h5p-action-btn {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 14px;\n  padding: 0 8px;\n  cursor: pointer;\n  white-space: nowrap;\n}\n\n.h5player-popup-content .h5p-action-btn:hover {\n  background-color: rgba(255, 255, 255, 0.2);\n}\n\n.h5player-popup-content .h5p-action-btn sl-icon {\n  padding: 0 4px;\n}\n\n/* 激活态 */\n.h5player-popup-active {\n  opacity: 0.8;\n  transition: opacity 0.2s;\n}\n\n.h5player-popup-content a, .h5player-popup-content a:visited{\n  color: #fff;\n  cursor: pointer;\n  text-decoration: none;\n}\n\n.h5player-popup-wrap:hover, .h5player-popup-full-active {\n  opacity: 1 !important;\n  transition: opacity 0.2s;\n}\n\n.h5player-popup-wrap:hover .h5player-popup-content, .h5player-popup-full-active .h5player-popup-content {\n  border-bottom: 2px solid rgba(255, 255, 255, 0.6);\n}\n\n.h5player-popup-content .h5p-action-mod sl-menu {\n  background-color: rgba(0, 0, 0, 0.9);\n  color: #fff;\n  border-radius: 4px;\n  padding: 5px 0;\n}\n\n.h5player-popup-content .h5p-action-mod sl-menu-item::part(base) {\n  /* background-color: rgba(0, 0, 0, 0.9); */\n  color: #fff;\n  font-size: 14px;\n  padding: 2px 0;\n}\n\n.h5player-popup-content .h5p-action-mod sl-menu-item::part(base):hover {\n  background-color: var(--sl-color-primary-500);\n  color: #fff;\n}\n\n.h5player-popup-content .h5p-recommend-wrap {\n  flex-grow: 1;\n  box-sizing: border-box;\n  margin: 0 20px;\n  text-align: center;\n  font-size: 14px;\n  overflow: hidden;\n  white-space: nowrap;\n\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  position: relative;\n}\n\n@keyframes text-marquee {\n  0% { transform: translateX(0); }\n  100% { transform: translateX(-100%); }\n}\n\n.h5player-popup-content .h5p-recommend-mod {\n  display: inline-block;\n  word-break: keep-all;\n  white-space: nowrap;\n  /* 无限循环滚动的动画效果 */\n  /* padding-left: 100%; */\n  /* animation: text-marquee 15s linear infinite; */\n}\n.h5player-popup-content .h5p-recommend-item {\n  word-break: keep-all;\n  white-space: nowrap;\n\n  position: absolute;\n  top: 0;\n  right: 0;\n  pointer-events: none;\n  opacity: 0;\n  transition: opacity 0.4s;\n}\n\n.h5player-popup-content .h5p-recommend-item__active {\n  opacity: 1;\n  z-index: 99;\n  pointer-events: auto;\n}\n\n.h5player-popup-content .h5p-recommend-wrap>div {\n  opacity: 0.5;\n}\n.h5player-popup-content .h5p-recommend-wrap>div:hover{\n  opacity: 1;\n}\n.h5player-popup-content .h5p-recommend-wrap>div:hover .h5p-recommend-mod {\n  animation-play-state: paused;\n}");

  /**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  const t$2=globalThis,e$8=t$2.ShadowRoot&&(void 0===t$2.ShadyCSS||t$2.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s$3=Symbol(),o$5=new WeakMap;let n$5 = class n{constructor(t,e,o){if(this._$cssResult$=!0,o!==s$3)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e;}get styleSheet(){let t=this.o;const s=this.t;if(e$8&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=o$5.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&o$5.set(s,t));}return t}toString(){return this.cssText}};const r$6=t=>new n$5("string"==typeof t?t:t+"",void 0,s$3),i$3=(t,...e)=>{const o=1===t.length?t[0]:e.reduce(((e,s,o)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[o+1]),t[0]);return new n$5(o,t,s$3)},S$1=(s,o)=>{if(e$8)s.adoptedStyleSheets=o.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const e of o){const o=document.createElement("style"),n=t$2.litNonce;void 0!==n&&o.setAttribute("nonce",n),o.textContent=e.cssText,s.appendChild(o);}},c$3=e$8?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return r$6(e)})(t):t;

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */const{is:i$2,defineProperty:e$7,getOwnPropertyDescriptor:r$5,getOwnPropertyNames:h$3,getOwnPropertySymbols:o$4,getPrototypeOf:n$4}=Object,a$1=globalThis,c$2=a$1.trustedTypes,l$1=c$2?c$2.emptyScript:"",p$1=a$1.reactiveElementPolyfillSupport,d$1=(t,s)=>t,u$1={toAttribute(t,s){switch(s){case Boolean:t=t?l$1:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t},fromAttribute(t,s){let i=t;switch(s){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t);}catch(t){i=null;}}return i}},f$3=(t,s)=>!i$2(t,s),y$1={attribute:!0,type:String,converter:u$1,reflect:!1,hasChanged:f$3};Symbol.metadata??=Symbol("metadata"),a$1.litPropertyMetadata??=new WeakMap;class b extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t);}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,s=y$1){if(s.state&&(s.attribute=!1),this._$Ei(),this.elementProperties.set(t,s),!s.noAccessor){const i=Symbol(),r=this.getPropertyDescriptor(t,i,s);void 0!==r&&e$7(this.prototype,t,r);}}static getPropertyDescriptor(t,s,i){const{get:e,set:h}=r$5(this.prototype,t)??{get(){return this[s]},set(t){this[s]=t;}};return {get(){return e?.call(this)},set(s){const r=e?.call(this);h.call(this,s),this.requestUpdate(t,r,i);},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??y$1}static _$Ei(){if(this.hasOwnProperty(d$1("elementProperties")))return;const t=n$4(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties);}static finalize(){if(this.hasOwnProperty(d$1("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(d$1("properties"))){const t=this.properties,s=[...h$3(t),...o$4(t)];for(const i of s)this.createProperty(i,t[i]);}const t=this[Symbol.metadata];if(null!==t){const s=litPropertyMetadata.get(t);if(void 0!==s)for(const[t,i]of s)this.elementProperties.set(t,i);}this._$Eh=new Map;for(const[t,s]of this.elementProperties){const i=this._$Eu(t,s);void 0!==i&&this._$Eh.set(i,t);}this.elementStyles=this.finalizeStyles(this.styles);}static finalizeStyles(s){const i=[];if(Array.isArray(s)){const e=new Set(s.flat(1/0).reverse());for(const s of e)i.unshift(c$3(s));}else void 0!==s&&i.push(c$3(s));return i}static _$Eu(t,s){const i=s.attribute;return !1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev();}_$Ev(){this._$Eg=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$ES(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)));}addController(t){(this._$E_??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.();}removeController(t){this._$E_?.delete(t);}_$ES(){const t=new Map,s=this.constructor.elementProperties;for(const i of s.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t);}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return S$1(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$E_?.forEach((t=>t.hostConnected?.()));}enableUpdating(t){}disconnectedCallback(){this._$E_?.forEach((t=>t.hostDisconnected?.()));}attributeChangedCallback(t,s,i){this._$AK(t,i);}_$EO(t,s){const i=this.constructor.elementProperties.get(t),e=this.constructor._$Eu(t,i);if(void 0!==e&&!0===i.reflect){const r=(void 0!==i.converter?.toAttribute?i.converter:u$1).toAttribute(s,i.type);this._$Em=t,null==r?this.removeAttribute(e):this.setAttribute(e,r),this._$Em=null;}}_$AK(t,s){const i=this.constructor,e=i._$Eh.get(t);if(void 0!==e&&this._$Em!==e){const t=i.getPropertyOptions(e),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:u$1;this._$Em=e,this[e]=r.fromAttribute(s,t.type),this._$Em=null;}}requestUpdate(t,s,i){if(void 0!==t){if(i??=this.constructor.getPropertyOptions(t),!(i.hasChanged??f$3)(this[t],s))return;this.C(t,s,i);}!1===this.isUpdatePending&&(this._$Eg=this._$EP());}C(t,s,i){this._$AL.has(t)||this._$AL.set(t,s),!0===i.reflect&&this._$Em!==t&&(this._$ET??=new Set).add(t);}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg;}catch(t){Promise.reject(t);}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,s]of this._$Ep)this[t]=s;this._$Ep=void 0;}const t=this.constructor.elementProperties;if(t.size>0)for(const[s,i]of t)!0!==i.wrapped||this._$AL.has(s)||void 0===this[s]||this.C(s,this[s],i);}let t=!1;const s=this._$AL;try{t=this.shouldUpdate(s),t?(this.willUpdate(s),this._$E_?.forEach((t=>t.hostUpdate?.())),this.update(s)):this._$Ej();}catch(s){throw t=!1,this._$Ej(),s}t&&this._$AE(s);}willUpdate(t){}_$AE(t){this._$E_?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t);}_$Ej(){this._$AL=new Map,this.isUpdatePending=!1;}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(t){return !0}update(t){this._$ET&&=this._$ET.forEach((t=>this._$EO(t,this[t]))),this._$Ej();}updated(t){}firstUpdated(t){}}b.elementStyles=[],b.shadowRootOptions={mode:"open"},b[d$1("elementProperties")]=new Map,b[d$1("finalized")]=new Map,p$1?.({ReactiveElement:b}),(a$1.reactiveElementVersions??=[]).push("2.0.3");

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
const t$1=globalThis,i$1=t$1.trustedTypes,s$2=i$1?i$1.createPolicy("lit-html",{createHTML:t=>t}):void 0,e$6="$lit$",h$2=`lit$${(Math.random()+"").slice(9)}$`,o$3="?"+h$2,n$3=`<${o$3}>`,r$4=document,l=()=>r$4.createComment(""),c$1=t=>null===t||"object"!=typeof t&&"function"!=typeof t,a=Array.isArray,u=t=>a(t)||"function"==typeof t?.[Symbol.iterator],d="[ \t\n\f\r]",f$2=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v=/-->/g,_=/>/g,m=RegExp(`>|${d}(?:([^\\s"'>=/]+)(${d}*=${d}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),p=/'/g,g=/"/g,$=/^(?:script|style|textarea|title)$/i,y=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),x=y(1),w=Symbol.for("lit-noChange"),T=Symbol.for("lit-nothing"),A=new WeakMap,E=r$4.createTreeWalker(r$4,129);function C(t,i){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==s$2?s$2.createHTML(i):i}const P=(t,i)=>{const s=t.length-1,o=[];let r,l=2===i?"<svg>":"",c=f$2;for(let i=0;i<s;i++){const s=t[i];let a,u,d=-1,y=0;for(;y<s.length&&(c.lastIndex=y,u=c.exec(s),null!==u);)y=c.lastIndex,c===f$2?"!--"===u[1]?c=v:void 0!==u[1]?c=_:void 0!==u[2]?($.test(u[2])&&(r=RegExp("</"+u[2],"g")),c=m):void 0!==u[3]&&(c=m):c===m?">"===u[0]?(c=r??f$2,d=-1):void 0===u[1]?d=-2:(d=c.lastIndex-u[2].length,a=u[1],c=void 0===u[3]?m:'"'===u[3]?g:p):c===g||c===p?c=m:c===v||c===_?c=f$2:(c=m,r=void 0);const x=c===m&&t[i+1].startsWith("/>")?" ":"";l+=c===f$2?s+n$3:d>=0?(o.push(a),s.slice(0,d)+e$6+s.slice(d)+h$2+x):s+h$2+(-2===d?i:x);}return [C(t,l+(t[s]||"<?>")+(2===i?"</svg>":"")),o]};class V{constructor({strings:t,_$litType$:s},n){let r;this.parts=[];let c=0,a=0;const u=t.length-1,d=this.parts,[f,v]=P(t,s);if(this.el=V.createElement(f,n),E.currentNode=this.el.content,2===s){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes);}for(;null!==(r=E.nextNode())&&d.length<u;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(e$6)){const i=v[a++],s=r.getAttribute(t).split(h$2),e=/([.?@])?(.*)/.exec(i);d.push({type:1,index:c,name:e[2],strings:s,ctor:"."===e[1]?k:"?"===e[1]?H:"@"===e[1]?I:R}),r.removeAttribute(t);}else t.startsWith(h$2)&&(d.push({type:6,index:c}),r.removeAttribute(t));if($.test(r.tagName)){const t=r.textContent.split(h$2),s=t.length-1;if(s>0){r.textContent=i$1?i$1.emptyScript:"";for(let i=0;i<s;i++)r.append(t[i],l()),E.nextNode(),d.push({type:2,index:++c});r.append(t[s],l());}}}else if(8===r.nodeType)if(r.data===o$3)d.push({type:2,index:c});else {let t=-1;for(;-1!==(t=r.data.indexOf(h$2,t+1));)d.push({type:7,index:c}),t+=h$2.length-1;}c++;}}static createElement(t,i){const s=r$4.createElement("template");return s.innerHTML=t,s}}function N(t,i,s=t,e){if(i===w)return i;let h=void 0!==e?s._$Co?.[e]:s._$Cl;const o=c$1(i)?void 0:i._$litDirective$;return h?.constructor!==o&&(h?._$AO?.(!1),void 0===o?h=void 0:(h=new o(t),h._$AT(t,s,e)),void 0!==e?(s._$Co??=[])[e]=h:s._$Cl=h),void 0!==h&&(i=N(t,h._$AS(t,i.values),h,e)),i}class S{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i;}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:s}=this._$AD,e=(t?.creationScope??r$4).importNode(i,!0);E.currentNode=e;let h=E.nextNode(),o=0,n=0,l=s[0];for(;void 0!==l;){if(o===l.index){let i;2===l.type?i=new M(h,h.nextSibling,this,t):1===l.type?i=new l.ctor(h,l.name,l.strings,this,t):6===l.type&&(i=new L(h,this,t)),this._$AV.push(i),l=s[++n];}o!==l?.index&&(h=E.nextNode(),o++);}return E.currentNode=r$4,e}p(t){let i=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++;}}class M{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,i,s,e){this.type=2,this._$AH=T,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cv=e?.isConnected??!0;}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t?.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=N(this,t,i),c$1(t)?t===T||null==t||""===t?(this._$AH!==T&&this._$AR(),this._$AH=T):t!==this._$AH&&t!==w&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):u(t)?this.T(t):this._(t);}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t));}_(t){this._$AH!==T&&c$1(this._$AH)?this._$AA.nextSibling.data=t:this.$(r$4.createTextNode(t)),this._$AH=t;}g(t){const{values:i,_$litType$:s}=t,e="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=V.createElement(C(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===e)this._$AH.p(i);else {const t=new S(e,this),s=t.u(this.options);t.p(i),this.$(s),this._$AH=t;}}_$AC(t){let i=A.get(t.strings);return void 0===i&&A.set(t.strings,i=new V(t)),i}T(t){a(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const h of t)e===i.length?i.push(s=new M(this.k(l()),this.k(l()),this,this.options)):s=i[e],s._$AI(h),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e);}_$AR(t=this._$AA.nextSibling,i){for(this._$AP?.(!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i;}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t));}}class R{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,s,e,h){this.type=1,this._$AH=T,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=h,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=T;}_$AI(t,i=this,s,e){const h=this.strings;let o=!1;if(void 0===h)t=N(this,t,i,0),o=!c$1(t)||t!==this._$AH&&t!==w,o&&(this._$AH=t);else {const e=t;let n,r;for(t=h[0],n=0;n<h.length-1;n++)r=N(this,e[s+n],i,n),r===w&&(r=this._$AH[n]),o||=!c$1(r)||r!==this._$AH[n],r===T?t=T:t!==T&&(t+=(r??"")+h[n+1]),this._$AH[n]=r;}o&&!e&&this.O(t);}O(t){t===T?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"");}}class k extends R{constructor(){super(...arguments),this.type=3;}O(t){this.element[this.name]=t===T?void 0:t;}}class H extends R{constructor(){super(...arguments),this.type=4;}O(t){this.element.toggleAttribute(this.name,!!t&&t!==T);}}class I extends R{constructor(t,i,s,e,h){super(t,i,s,e,h),this.type=5;}_$AI(t,i=this){if((t=N(this,t,i,0)??T)===w)return;const s=this._$AH,e=t===T&&s!==T||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,h=t!==T&&(s===T||e);e&&this.element.removeEventListener(this.name,this,s),h&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t);}}class L{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s;}get _$AU(){return this._$AM._$AU}_$AI(t){N(this,t);}}const Z=t$1.litHtmlPolyfillSupport;Z?.(V,M),(t$1.litHtmlVersions??=[]).push("3.1.1");const j=(t,i,s)=>{const e=s?.renderBefore??i;let h=e._$litPart$;if(void 0===h){const t=s?.renderBefore??null;e._$litPart$=h=new M(i.insertBefore(l(),t),t,void 0,s??{});}return h._$AI(t),h};

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */let s$1 = class s extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0;}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=j(i,this.renderRoot,this.renderOptions);}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0);}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1);}render(){return w}};s$1._$litElement$=!0,s$1[("finalized")]=!0,globalThis.litElementHydrateSupport?.({LitElement:s$1});const r$3=globalThis.litElementPolyfillSupport;r$3?.({LitElement:s$1});(globalThis.litElementVersions??=[]).push("4.0.3");

  // src/styles/component.styles.ts
  var component_styles_default = i$3`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`;

  var popup_styles_default = i$3`
  ${component_styles_default}

  :host {
    --arrow-color: var(--sl-color-neutral-1000);
    --arrow-size: 6px;

    /*
     * These properties are computed to account for the arrow's dimensions after being rotated 45º. The constant
     * 0.7071 is derived from sin(45), which is the diagonal size of the arrow's container after rotating.
     */
    --arrow-size-diagonal: calc(var(--arrow-size) * 0.7071);
    --arrow-padding-offset: calc(var(--arrow-size-diagonal) - var(--arrow-size));

    display: contents;
  }

  .popup {
    position: absolute;
    isolation: isolate;
    max-width: var(--auto-size-available-width, none);
    max-height: var(--auto-size-available-height, none);
  }

  .popup--fixed {
    position: fixed;
  }

  .popup:not(.popup--active) {
    display: none;
  }

  .popup__arrow {
    position: absolute;
    width: calc(var(--arrow-size-diagonal) * 2);
    height: calc(var(--arrow-size-diagonal) * 2);
    rotate: 45deg;
    background: var(--arrow-color);
    z-index: -1;
  }
`;

  var __defProp = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b)) {
        if (__propIsEnum.call(b, prop))
          __defNormalProp(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
  var __decorateClass = (decorators, target, key, kind) => {
    var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
    for (var i = decorators.length - 1, decorator; i >= 0; i--)
      if (decorator = decorators[i])
        result = (kind ? decorator(target, key, result) : decorator(result)) || result;
    if (kind && result)
      __defProp(target, key, result);
    return result;
  };

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */const o$2={attribute:!0,type:String,converter:u$1,reflect:!1,hasChanged:f$3},r$2=(t=o$2,e,r)=>{const{kind:n,metadata:i}=r;let s=globalThis.litPropertyMetadata.get(i);if(void 0===s&&globalThis.litPropertyMetadata.set(i,s=new Map),s.set(r.name,t),"accessor"===n){const{name:o}=r;return {set(r){const n=e.get.call(this);e.set.call(this,r),this.requestUpdate(o,n,t);},init(e){return void 0!==e&&this.C(o,void 0,t),e}}}if("setter"===n){const{name:o}=r;return function(r){const n=this[o];e.call(this,r),this.requestUpdate(o,n,t);}}throw Error("Unsupported decorator location: "+n)};function n$2(t){return (e,o)=>"object"==typeof o?r$2(t,e,o):((t,e,o)=>{const r=e.hasOwnProperty(o);return e.constructor.createProperty(o,r?{...t,wrapped:!0}:t),r?Object.getOwnPropertyDescriptor(e,o):void 0})(t,e,o)}

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */function r$1(r){return n$2({...r,state:!0,attribute:!1})}

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  const e$5=(e,t,c)=>(c.configurable=!0,c.enumerable=!0,Reflect.decorate&&"object"!=typeof t&&Object.defineProperty(e,t,c),c);

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */function e$4(e,r){return (n,s,i)=>{const o=t=>t.renderRoot?.querySelector(e)??null;if(r){const{get:e,set:r}="object"==typeof s?n:i??(()=>{const t=Symbol();return {get(){return this[t]},set(e){this[t]=e;}}})();return e$5(n,s,{get(){let t=e.call(this);return void 0===t&&(t=o(this),(null!==t||this.hasUpdated)&&r.call(this,t)),t}})}return e$5(n,s,{get(){return o(this)}})}}

  var ShoelaceElement = class extends s$1 {
    constructor() {
      super();
      Object.entries(this.constructor.dependencies).forEach(([name, component]) => {
        this.constructor.define(name, component);
      });
    }
    emit(name, options) {
      const event = new CustomEvent(name, __spreadValues({
        bubbles: true,
        cancelable: false,
        composed: true,
        detail: {}
      }, options));
      this.dispatchEvent(event);
      return event;
    }
    /* eslint-enable */
    static define(name, elementConstructor = this, options = {}) {
      const currentlyRegisteredConstructor = customElements.get(name);
      if (!currentlyRegisteredConstructor) {
        customElements.define(name, class extends elementConstructor {
        }, options);
        return;
      }
      let newVersion = " (unknown version)";
      let existingVersion = newVersion;
      if ("version" in elementConstructor && elementConstructor.version) {
        newVersion = " v" + elementConstructor.version;
      }
      if ("version" in currentlyRegisteredConstructor && currentlyRegisteredConstructor.version) {
        existingVersion = " v" + currentlyRegisteredConstructor.version;
      }
      if (newVersion && existingVersion && newVersion === existingVersion) {
        return;
      }
      console.warn(
        `Attempted to register <${name}>${newVersion}, but <${name}>${existingVersion} has already been registered.`
      );
    }
  };
  /* eslint-disable */
  // @ts-expect-error This is auto-injected at build time.
  ShoelaceElement.version = "2.12.0";
  ShoelaceElement.dependencies = {};
  __decorateClass([
    n$2()
  ], ShoelaceElement.prototype, "dir", 2);
  __decorateClass([
    n$2()
  ], ShoelaceElement.prototype, "lang", 2);

  /**
   * Custom positioning reference element.
   * @see https://floating-ui.com/docs/virtual-elements
   */

  const min = Math.min;
  const max = Math.max;
  const round = Math.round;
  const floor = Math.floor;
  const createCoords = v => ({
    x: v,
    y:v
  });
  const oppositeSideMap = {
    left: 'right',
    right: 'left',
    bottom: 'top',
    top: 'bottom'
  };
  const oppositeAlignmentMap = {
    start: 'end',
    end: 'start'
  };
  function clamp(start, value, end) {
    return max(start, min(value, end));
  }
  function evaluate(value, param) {
    return typeof value === 'function' ? value(param) : value;
  }
  function getSide(placement) {
    return placement.split('-')[0];
  }
  function getAlignment(placement) {
    return placement.split('-')[1];
  }
  function getOppositeAxis(axis) {
    return axis === 'x' ? 'y' : 'x';
  }
  function getAxisLength(axis) {
    return axis === 'y' ? 'height' : 'width';
  }
  function getSideAxis(placement) {
    return ['top', 'bottom'].includes(getSide(placement)) ? 'y' : 'x';
  }
  function getAlignmentAxis(placement) {
    return getOppositeAxis(getSideAxis(placement));
  }
  function getAlignmentSides(placement, rects, rtl) {
    if (rtl === void 0) {
      rtl = false;
    }
    const alignment = getAlignment(placement);
    const alignmentAxis = getAlignmentAxis(placement);
    const length = getAxisLength(alignmentAxis);
    let mainAlignmentSide = alignmentAxis === 'x' ? alignment === (rtl ? 'end' : 'start') ? 'right' : 'left' : alignment === 'start' ? 'bottom' : 'top';
    if (rects.reference[length] > rects.floating[length]) {
      mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
    }
    return [mainAlignmentSide, getOppositePlacement(mainAlignmentSide)];
  }
  function getExpandedPlacements(placement) {
    const oppositePlacement = getOppositePlacement(placement);
    return [getOppositeAlignmentPlacement(placement), oppositePlacement, getOppositeAlignmentPlacement(oppositePlacement)];
  }
  function getOppositeAlignmentPlacement(placement) {
    return placement.replace(/start|end/g, alignment => oppositeAlignmentMap[alignment]);
  }
  function getSideList(side, isStart, rtl) {
    const lr = ['left', 'right'];
    const rl = ['right', 'left'];
    const tb = ['top', 'bottom'];
    const bt = ['bottom', 'top'];
    switch (side) {
      case 'top':
      case 'bottom':
        if (rtl) return isStart ? rl : lr;
        return isStart ? lr : rl;
      case 'left':
      case 'right':
        return isStart ? tb : bt;
      default:
        return [];
    }
  }
  function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
    const alignment = getAlignment(placement);
    let list = getSideList(getSide(placement), direction === 'start', rtl);
    if (alignment) {
      list = list.map(side => side + "-" + alignment);
      if (flipAlignment) {
        list = list.concat(list.map(getOppositeAlignmentPlacement));
      }
    }
    return list;
  }
  function getOppositePlacement(placement) {
    return placement.replace(/left|right|bottom|top/g, side => oppositeSideMap[side]);
  }
  function expandPaddingObject(padding) {
    return {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      ...padding
    };
  }
  function getPaddingObject(padding) {
    return typeof padding !== 'number' ? expandPaddingObject(padding) : {
      top: padding,
      right: padding,
      bottom: padding,
      left: padding
    };
  }
  function rectToClientRect(rect) {
    return {
      ...rect,
      top: rect.y,
      left: rect.x,
      right: rect.x + rect.width,
      bottom: rect.y + rect.height
    };
  }

  function computeCoordsFromPlacement(_ref, placement, rtl) {
    let {
      reference,
      floating
    } = _ref;
    const sideAxis = getSideAxis(placement);
    const alignmentAxis = getAlignmentAxis(placement);
    const alignLength = getAxisLength(alignmentAxis);
    const side = getSide(placement);
    const isVertical = sideAxis === 'y';
    const commonX = reference.x + reference.width / 2 - floating.width / 2;
    const commonY = reference.y + reference.height / 2 - floating.height / 2;
    const commonAlign = reference[alignLength] / 2 - floating[alignLength] / 2;
    let coords;
    switch (side) {
      case 'top':
        coords = {
          x: commonX,
          y: reference.y - floating.height
        };
        break;
      case 'bottom':
        coords = {
          x: commonX,
          y: reference.y + reference.height
        };
        break;
      case 'right':
        coords = {
          x: reference.x + reference.width,
          y: commonY
        };
        break;
      case 'left':
        coords = {
          x: reference.x - floating.width,
          y: commonY
        };
        break;
      default:
        coords = {
          x: reference.x,
          y: reference.y
        };
    }
    switch (getAlignment(placement)) {
      case 'start':
        coords[alignmentAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
        break;
      case 'end':
        coords[alignmentAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
        break;
    }
    return coords;
  }

  /**
   * Computes the `x` and `y` coordinates that will place the floating element
   * next to a given reference element.
   *
   * This export does not have any `platform` interface logic. You will need to
   * write one for the platform you are using Floating UI with.
   */
  const computePosition$1 = async (reference, floating, config) => {
    const {
      placement = 'bottom',
      strategy = 'absolute',
      middleware = [],
      platform
    } = config;
    const validMiddleware = middleware.filter(Boolean);
    const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(floating));
    let rects = await platform.getElementRects({
      reference,
      floating,
      strategy
    });
    let {
      x,
      and
    } = computeCoordsFromPlacement(rects, placement, rtl);
    let statefulPlacement = placement;
    let middlewareData = {};
    let resetCount = 0;
    for (let i = 0; i < validMiddleware.length; i++) {
      const {
        name,
        fn
      } = validMiddleware[i];
      const {
        x: nextX,
        y: nextY,
        data,
        reset
      } = await fn({
        x,
        and,
        initialPlacement: placement,
        placement: statefulPlacement,
        strategy,
        middlewareData,
        rects,
        platform,
        elements: {
          reference,
          floating
        }
      });
      x = nextX != null ? nextX : x;
      y = nextY != null ? nextY : y;
      middlewareData = {
        ...middlewareData,
        [name]: {
          ...middlewareData[name],
          ...data
        }
      };
      if (reset && resetCount <= 50) {
        resetCount++;
        if (typeof reset === 'object') {
          if (reset.placement) {
            statefulPlacement = reset.placement;
          }
          if (reset.rects) {
            rects = reset.rects === true ? await platform.getElementRects({
              reference,
              floating,
              strategy
            }) : reset.rects;
          }
          ({
            x,
            and
          } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
        }
        i = -1;
        continue;
      }
    }
    return {
      x,
      and,
      placement: statefulPlacement,
      strategy,
      middlewareData
    };
  };

  /**
   * Resolves with an object of overflow side offsets that determine how much the
   * element is overflowing a given clipping boundary on each side.
   * - positive = overflowing the boundary by that number of pixels
   * - negative = how many pixels left before it will overflow
   * - 0 = lies flush with the boundary
   * @see https://floating-ui.com/docs/detectOverflow
   */
  async function detectOverflow(state, options) {
    var _await$platform$isEle;
    if (options === void 0) {
      options = {};
    }
    const {
      x,
      and,
      platform,
      rects,
      elements,
      strategy
    } = state;
    const {
      boundary = 'clippingAncestors',
      rootBoundary = 'viewport',
      elementContext = 'floating',
      altBoundary = false,
      padding = 0
    } = evaluate(options, state);
    const paddingObject = getPaddingObject(padding);
    const altContext = elementContext === 'floating' ? 'reference' : 'floating';
    const element = elements[altBoundary ? altContext : elementContext];
    const clippingClientRect = rectToClientRect(await platform.getClippingRect({
      element: ((_await$platform$isEle = await (platform.isElement == null ? void 0 : platform.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || (await (platform.getDocumentElement == null ? void 0 : platform.getDocumentElement(elements.floating))),
      boundary,
      rootBoundary,
      strategy
    }));
    const rect = elementContext === 'floating' ? {
      ...rects.floating,
      x,
      and
    } : rects.reference;
    const offsetParent = await (platform.getOffsetParent == null ? void 0 : platform.getOffsetParent(elements.floating));
    const offsetScale = (await (platform.isElement == null ? void 0 : platform.isElement(offsetParent))) ? (await (platform.getScale == null ? void 0 : platform.getScale(offsetParent))) || {
      x: 1,
      and: 1
    } : {
      x: 1,
      and: 1
    };
    const elementClientRect = rectToClientRect(platform.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform.convertOffsetParentRelativeRectToViewportRelativeRect({
      rect,
      offsetParent,
      strategy
    }) : rect);
    return {
      top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
      bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
      left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
      right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
    };
  }

  /**
   * Provides data to position an inner element of the floating element so that it
   * appears centered to the reference element.
   * @see https://floating-ui.com/docs/arrow
   */
  const arrow$1 = options => ({
    name: 'arrow',
    options,
    async fn(state) {
      const {
        x,
        and,
        placement,
        rects,
        platform,
        elements,
        middlewareData
      } = state;
      // Since `element` is required, we don't Partial<> the type.
      const {
        element,
        padding = 0
      } = evaluate(options, state) || {};
      if (element == null) {
        return {};
      }
      const paddingObject = getPaddingObject(padding);
      const coords = {
        x,
        and
      };
      const axis = getAlignmentAxis(placement);
      const length = getAxisLength(axis);
      const arrowDimensions = await platform.getDimensions(element);
      const isYAxis = axis === 'y';
      const minProp = isYAxis ? 'top' : 'left';
      const maxProp = isYAxis ? 'bottom' : 'right';
      const clientProp = isYAxis ? 'clientHeight' : 'clientWidth';
      const endDiff = rects.reference[length] + rects.reference[axis] - coords[axis] - rects.floating[length];
      const startDiff = coords[axis] - rects.reference[axis];
      const arrowOffsetParent = await (platform.getOffsetParent == null ? void 0 : platform.getOffsetParent(element));
      let clientSize = arrowOffsetParent ? arrowOffsetParent[clientProp] : 0;

      // DOM platform can return `window` as the `offsetParent`.
      if (!clientSize || !(await (platform.isElement == null ? void 0 : platform.isElement(arrowOffsetParent)))) {
        clientSize = elements.floating[clientProp] || rects.floating[length];
      }
      const centerToReference = endDiff / 2 - startDiff / 2;

      // If the padding is large enough that it causes the arrow to no longer be
      // centered, modify the padding so that it is centered.
      const largestPossiblePadding = clientSize / 2 - arrowDimensions[length] / 2 - 1;
      const minPadding = min(paddingObject[minProp], largestPossiblePadding);
      const maxPadding = min(paddingObject[maxProp], largestPossiblePadding);

      // Make sure the arrow doesn't overflow the floating element if the center
      // point is outside the floating element's bounds.
      const min$1 = minPadding;
      const max = clientSize - arrowDimensions[length] - maxPadding;
      const center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
      const offset = clamp(min$1, center, max);

      // If the reference is small enough that the arrow's padding causes it to
      // to point to nothing for an aligned placement, adjust the offset of the
      // floating element itself. To ensure `shift()` continues to take action,
      // a single reset is performed when this is true.
      const shouldAddOffset = !middlewareData.arrow && getAlignment(placement) != null && center != offset && rects.reference[length] / 2 - (center < min$1 ? minPadding : maxPadding) - arrowDimensions[length] / 2 < 0;
      const alignmentOffset = shouldAddOffset ? center < min$1 ? center - min$1 : center - max : 0;
      return {
        [axis]: coords[axis] + alignmentOffset,
        data: {
          [axis]: offset,
          centerOffset: center - offset - alignmentOffset,
          ...(shouldAddOffset && {
            alignmentOffset
          })
        },
        reset: shouldAddOffset
      };
    }
  });

  /**
   * Optimizes the visibility of the floating element by flipping the `placement`
   * in order to keep it in view when the preferred placement(s) will overflow the
   * clipping boundary. Alternative to `autoPlacement`.
   * @see https://floating-ui.com/docs/flip
   */
  const flip$1 = function (options) {
    if (options === void 0) {
      options = {};
    }
    return {
      name: 'flip',
      options,
      async fn(state) {
        var _middlewareData$arrow, _middlewareData$flip;
        const {
          placement,
          middlewareData,
          rects,
          initialPlacement,
          platform,
          elements
        } = state;
        const {
          mainAxis: checkMainAxis = true,
          crossAxis: checkCrossAxis = true,
          fallbackPlacements: specifiedFallbackPlacements,
          fallbackStrategy = 'bestFit',
          fallbackAxisSideDirection = 'none',
          flipAlignment = true,
          ...detectOverflowOptions
        } = evaluate(options, state);

        // If a reset by the arrow was caused due to an alignment offset being
        // added, we should skip any logic now since `flip()` has already done its
        // work.
        // https://github.com/floating-ui/floating-ui/issues/2549#issuecomment-1719601643
        if ((_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
          return {};
        }
        const side = getSide(placement);
        const isBasePlacement = getSide(initialPlacement) === initialPlacement;
        const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating));
        const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement(initialPlacement)] : getExpandedPlacements(initialPlacement));
        if (!specifiedFallbackPlacements && fallbackAxisSideDirection !== 'none') {
          fallbackPlacements.push(...getOppositeAxisPlacements(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl));
        }
        const placements = [initialPlacement, ...fallbackPlacements];
        const overflow = await detectOverflow(state, detectOverflowOptions);
        const overflows = [];
        let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
        if (checkMainAxis) {
          overflows.push(overflow[side]);
        }
        if (checkCrossAxis) {
          const sides = getAlignmentSides(placement, rects, rtl);
          overflows.push(overflow[sides[0]], overflow[sides[1]]);
        }
        overflowsData = [...overflowsData, {
          placement,
          overflows
        }];

        // One or more sides is overflowing.
        if (!overflows.every(side => side <= 0)) {
          var _middlewareData$flip2, _overflowsData$filter;
          const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
          const nextPlacement = placements[nextIndex];
          if (nextPlacement) {
            // Try next placement and re-run the lifecycle.
            return {
              data: {
                index: nextIndex,
                overflows: overflowsData
              },
              reset: {
                placement: nextPlacement
              }
            };
          }

          // First, find the candidates that fit on the mainAxis side of overflow,
          // then find the placement that fits the best on the main crossAxis side.
          let resetPlacement = (_overflowsData$filter = overflowsData.filter(d => d.overflows[0] <= 0).sort((a, b) => a.overflows[1] - b.overflows[1])[0]) == null ? void 0 : _overflowsData$filter.placement;

          // Otherwise fallback.
          if (!resetPlacement) {
            switch (fallbackStrategy) {
              case 'bestFit':
                {
                  var _overflowsData$map$so;
                  const placement = (_overflowsData$map$so = overflowsData.map(d => [d.placement, d.overflows.filter(overflow => overflow > 0).reduce((acc, overflow) => acc + overflow, 0)]).sort((a, b) => a[1] - b[1])[0]) == null ? void 0 : _overflowsData$map$so[0];
                  if (placement) {
                    resetPlacement = placement;
                  }
                  break;
                }
              case 'initialPlacement':
                resetPlacement = initialPlacement;
                break;
            }
          }
          if (placement !== resetPlacement) {
            return {
              reset: {
                placement: resetPlacement
              }
            };
          }
        }
        return {};
      }
    };
  };

  // For type backwards-compatibility, the `OffsetOptions` type was also
  // Derivable.

  async function convertValueToCoords(state, options) {
    const {
      placement,
      platform,
      elements
    } = state;
    const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating));
    const side = getSide(placement);
    const alignment = getAlignment(placement);
    const isVertical = getSideAxis(placement) === 'y';
    const mainAxisMulti = ['left', 'top'].includes(side) ? -1 : 1;
    const crossAxisMulti = rtl && isVertical ? -1 : 1;
    const rawValue = evaluate(options, state);

    // eslint-disable-next-line prefer-const
    let {
      mainAxis,
      crossAxis,
      alignmentAxis
    } = typeof rawValue === 'number' ? {
      mainAxis: rawValue,
      crossAxis: 0,
      alignmentAxis: null
    } : {
      mainAxis: 0,
      crossAxis: 0,
      alignmentAxis: null,
      ...rawValue
    };
    if (alignment && typeof alignmentAxis === 'number') {
      crossAxis = alignment === 'end' ? alignmentAxis * -1 : alignmentAxis;
    }
    return isVertical ? {
      x: crossAxis * crossAxisMulti,
      y: mainAxis * mainAxisMulti
    } : {
      x: mainAxis * mainAxisMulti,
      y: crossAxis * crossAxisMulti
    };
  }

  /**
   * Modifies the placement by translating the floating element along the
   * specified axes.
   * A number (shorthand for `mainAxis` or distance), or an axes configuration
   * object may be passed.
   * @see https://floating-ui.com/docs/offset
   */
  const offset = function (options) {
    if (options === void 0) {
      options = 0;
    }
    return {
      name: 'offset',
      options,
      async fn(state) {
        var _middlewareData$offse, _middlewareData$arrow;
        const {
          x,
          and,
          placement,
          middlewareData
        } = state;
        const diffCoords = await convertValueToCoords(state, options);

        // If the placement is the same and the arrow caused an alignment offset
        // then we don't need to change the positioning coordinates.
        if (placement === ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse.placement) && (_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
          return {};
        }
        return {
          x: x + diffCoords.x,
          y: y + diffCoords.y,
          data: {
            ...diffCoords,
            placement
          }
        };
      }
    };
  };

  /**
   * Optimizes the visibility of the floating element by shifting it in order to
   * keep it in view when it will overflow the clipping boundary.
   * @see https://floating-ui.com/docs/shift
   */
  const shift$1 = function (options) {
    if (options === void 0) {
      options = {};
    }
    return {
      name: 'shift',
      options,
      async fn(state) {
        const {
          x,
          and,
          placement
        } = state;
        const {
          mainAxis: checkMainAxis = true,
          crossAxis: checkCrossAxis = false,
          limiter = {
            fn: _ref => {
              let {
                x,
                and
              } = _ref;
              return {
                x,
                and
              };
            }
          },
          ...detectOverflowOptions
        } = evaluate(options, state);
        const coords = {
          x,
          and
        };
        const overflow = await detectOverflow(state, detectOverflowOptions);
        const crossAxis = getSideAxis(getSide(placement));
        const mainAxis = getOppositeAxis(crossAxis);
        let mainAxisCoord = coords[mainAxis];
        let crossAxisCoord = coords[crossAxis];
        if (checkMainAxis) {
          const minSide = mainAxis === 'y' ? 'top' : 'left';
          const maxSide = mainAxis === 'y' ? 'bottom' : 'right';
          const min = mainAxisCoord + overflow[minSide];
          const max = mainAxisCoord - overflow[maxSide];
          mainAxisCoord = clamp(min, mainAxisCoord, max);
        }
        if (checkCrossAxis) {
          const minSide = crossAxis === 'y' ? 'top' : 'left';
          const maxSide = crossAxis === 'y' ? 'bottom' : 'right';
          const min = crossAxisCoord + overflow[minSide];
          const max = crossAxisCoord - overflow[maxSide];
          crossAxisCoord = clamp(min, crossAxisCoord, max);
        }
        const limitedCoords = limiter.fn({
          ...state,
          [mainAxis]: mainAxisCoord,
          [crossAxis]: crossAxisCoord
        });
        return {
          ...limitedCoords,
          data: {
            x: limitedCoords.x - x,
            y: limitedCoords.y - y
          }
        };
      }
    };
  };

  /**
   * Provides data that allows you to change the size of the floating element —
   * for instance, prevent it from overflowing the clipping boundary or match the
   * width of the reference element.
   * @see https://floating-ui.com/docs/size
   */
  const size$1 = function (options) {
    if (options === void 0) {
      options = {};
    }
    return {
      name: 'size',
      options,
      async fn(state) {
        const {
          placement,
          rects,
          platform,
          elements
        } = state;
        const {
          apply = () => {},
          ...detectOverflowOptions
        } = evaluate(options, state);
        const overflow = await detectOverflow(state, detectOverflowOptions);
        const side = getSide(placement);
        const alignment = getAlignment(placement);
        const isYAxis = getSideAxis(placement) === 'y';
        const {
          width,
          height
        } = rects.floating;
        let heightSide;
        let widthSide;
        if (side === 'top' || side === 'bottom') {
          heightSide = side;
          widthSide = alignment === ((await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating))) ? 'start' : 'end') ? 'left' : 'right';
        } else {
          widthSide = side;
          heightSide = alignment === 'end' ? 'top' : 'bottom';
        }
        const overflowAvailableHeight = height - overflow[heightSide];
        const overflowAvailableWidth = width - overflow[widthSide];
        const noShift = !state.middlewareData.shift;
        let availableHeight = overflowAvailableHeight;
        let availableWidth = overflowAvailableWidth;
        if (isYAxis) {
          const maximumClippingWidth = width - overflow.left - overflow.right;
          availableWidth = alignment || noShift ? min(overflowAvailableWidth, maximumClippingWidth) : maximumClippingWidth;
        } else {
          const maximumClippingHeight = height - overflow.top - overflow.bottom;
          availableHeight = alignment || noShift ? min(overflowAvailableHeight, maximumClippingHeight) : maximumClippingHeight;
        }
        if (noShift && !alignment) {
          const xMin = max(overflow.left, 0);
          const xMax = max(overflow.right, 0);
          const yMin = max(overflow.top, 0);
          const yMax = max(overflow.bottom, 0);
          if (isYAxis) {
            availableWidth = width - 2 * (xMin !== 0 || xMax !== 0 ? xMin + xMax : max(overflow.left, overflow.right));
          } else {
            availableHeight = height - 2 * (yMin !== 0 || yMax !== 0 ? yMin + yMax : max(overflow.top, overflow.bottom));
          }
        }
        await apply({
          ...state,
          availableWidth,
          availableHeight
        });
        const nextDimensions = await platform.getDimensions(elements.floating);
        if (width !== nextDimensions.width || height !== nextDimensions.height) {
          return {
            reset: {
              rects: true
            }
          };
        }
        return {};
      }
    };
  };

  function getNodeName(node) {
    if (isNode(node)) {
      return (node.nodeName || '').toLowerCase();
    }
    // Mocked nodes in testing environments may not be instances of Node. By
    // returning `#document` an infinite loop won't occur.
    // https://github.com/floating-ui/floating-ui/issues/2317
    return '#document';
  }
  function getWindow(node) {
    var _node$ownerDocument;
    return (node == null || (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
  }
  function getDocumentElement(node) {
    var _ref;
    return (_ref = (isNode(node) ? node.ownerDocument : node.document) || window.document) == null ? void 0 : _ref.documentElement;
  }
  function isNode(value) {
    return value instanceof Node || value instanceof getWindow(value).Node;
  }
  function isElement(value) {
    return value instanceof Element || value instanceof getWindow(value).Element;
  }
  function isHTMLElement(value) {
    return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
  }
  function isShadowRoot(value) {
    // Browsers without `ShadowRoot` support.
    if (typeof ShadowRoot === 'undefined') {
      return false;
    }
    return value instanceof ShadowRoot || value instanceof getWindow(value).ShadowRoot;
  }
  function isOverflowElement(element) {
    const {
      overflow,
      overflowX,
      overflowY,
      display
    } = getComputedStyle$1(element);
    return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && !['inline', 'contents'].includes(display);
  }
  function isTableElement(element) {
    return ['table', 'td', 'th'].includes(getNodeName(element));
  }
  function isContainingBlock(element) {
    const webkit = isWebKit();
    const css = getComputedStyle$1(element);

    // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
    return css.transform !== 'none' || css.perspective !== 'none' || (css.containerType ? css.containerType !== 'normal' : false) || !webkit && (css.backdropFilter ? css.backdropFilter !== 'none' : false) || !webkit && (css.filter ? css.filter !== 'none' : false) || ['transform', 'perspective', 'filter'].some(value => (css.willChange || '').includes(value)) || ['paint', 'layout', 'strict', 'content'].some(value => (css.contain || '').includes(value));
  }
  function getContainingBlock(element) {
    let currentNode = getParentNode(element);
    while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
      if (isContainingBlock(currentNode)) {
        return currentNode;
      } else {
        currentNode = getParentNode(currentNode);
      }
    }
    return null;
  }
  function isWebKit() {
    if (typeof CSS === 'undefined' || !CSS.supports) return false;
    return CSS.supports('-webkit-backdrop-filter', 'none');
  }
  function isLastTraversableNode(node) {
    return ['html', 'body', '#document'].includes(getNodeName(node));
  }
  function getComputedStyle$1(element) {
    return getWindow(element).getComputedStyle(element);
  }
  function getNodeScroll(element) {
    if (isElement(element)) {
      return {
        scrollLeft: element.scrollLeft,
        scrollTop: element.scrollTop
      };
    }
    return {
      scrollLeft: element.pageXOffset,
      scrollTop: element.pageYOffset
    };
  }
  function getParentNode(node) {
    if (getNodeName(node) === 'html') {
      return node;
    }
    const result =
    // Step into the shadow DOM of the parent of a slotted node.
    node.assignedSlot ||
    // DOM Element detected.
    node.parentNode ||
    // ShadowRoot detected.
    isShadowRoot(node) && node.host ||
    // Fallback.
    getDocumentElement(node);
    return isShadowRoot(result) ? result.host : result;
  }
  function getNearestOverflowAncestor(node) {
    const parentNode = getParentNode(node);
    if (isLastTraversableNode(parentNode)) {
      return node.ownerDocument ? node.ownerDocument.body : node.body;
    }
    if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
      return parentNode;
    }
    return getNearestOverflowAncestor(parentNode);
  }
  function getOverflowAncestors(node, list, traverseIframes) {
    var _node$ownerDocument2;
    if (list === void 0) {
      list = [];
    }
    if (traverseIframes === void 0) {
      traverseIframes = true;
    }
    const scrollableAncestor = getNearestOverflowAncestor(node);
    const isBody = scrollableAncestor === ((_node$ownerDocument2 = node.ownerDocument) == null ? void 0 : _node$ownerDocument2.body);
    const win = getWindow(scrollableAncestor);
    if (isBody) {
      return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : [], win.frameElement && traverseIframes ? getOverflowAncestors(win.frameElement) : []);
    }
    return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor, [], traverseIframes));
  }

  function getCssDimensions(element) {
    const css = getComputedStyle$1(element);
    // In testing environments, the `width` and `height` properties are empty
    // strings for SVG elements, returning NaN. Fallback to `0` in this case.
    let width = parseFloat(css.width) || 0;
    let height = parseFloat(css.height) || 0;
    const hasOffset = isHTMLElement(element);
    const offsetWidth = hasOffset ? element.offsetWidth : width;
    const offsetHeight = hasOffset ? element.offsetHeight : height;
    const shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
    if (shouldFallback) {
      width = offsetWidth;
      height = offsetHeight;
    }
    return {
      width,
      height,
      $: shouldFallback
    };
  }

  function unwrapElement(element) {
    return !isElement(element) ? element.contextElement : element;
  }

  function getScale(element) {
    const domElement = unwrapElement(element);
    if (!isHTMLElement(domElement)) {
      return createCoords(1);
    }
    const rect = domElement.getBoundingClientRect();
    const {
      width,
      height,
      $
    } = getCssDimensions(domElement);
    let x = ($ ? round(rect.width) : rect.width) / width;
    let y = ($ ? round(rect.height) : rect.height) / height;

    // 0, NaN, or Infinity should always fallback to 1.

    if (!x || !Number.isFinite(x)) {
      x = 1;
    }
    if (!y || !Number.isFinite(y)) {
      y = 1;
    }
    return {
      x,
      and
    };
  }

  const noOffsets = /*#__PURE__*/createCoords(0);
  function getVisualOffsets(element) {
    const win = getWindow(element);
    if (!isWebKit() || !win.visualViewport) {
      return noOffsets;
    }
    return {
      x: win.visualViewport.offsetLeft,
      y: win.visualViewport.offsetTop
    };
  }
  function shouldAddVisualOffsets(element, isFixed, floatingOffsetParent) {
    if (isFixed === void 0) {
      isFixed = false;
    }
    if (!floatingOffsetParent || isFixed && floatingOffsetParent !== getWindow(element)) {
      return false;
    }
    return isFixed;
  }

  function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
    if (includeScale === void 0) {
      includeScale = false;
    }
    if (isFixedStrategy === void 0) {
      isFixedStrategy = false;
    }
    const clientRect = element.getBoundingClientRect();
    const domElement = unwrapElement(element);
    let scale = createCoords(1);
    if (includeScale) {
      if (offsetParent) {
        if (isElement(offsetParent)) {
          scale = getScale(offsetParent);
        }
      } else {
        scale = getScale(element);
      }
    }
    const visualOffsets = shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent) ? getVisualOffsets(domElement) : createCoords(0);
    let x = (clientRect.left + visualOffsets.x) / scale.x;
    let y = (clientRect.top + visualOffsets.y) / scale.y;
    let width = clientRect.width / scale.x;
    let height = clientRect.height / scale.y;
    if (domElement) {
      const win = getWindow(domElement);
      const offsetWin = offsetParent && isElement(offsetParent) ? getWindow(offsetParent) : offsetParent;
      let currentIFrame = win.frameElement;
      while (currentIFrame && offsetParent && offsetWin !== win) {
        const iframeScale = getScale(currentIFrame);
        const iframeRect = currentIFrame.getBoundingClientRect();
        const css = getComputedStyle$1(currentIFrame);
        const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
        const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
        x *= iframeScale.x;
        y *= iframeScale.y;
        width *= iframeScale.x;
        height *= iframeScale.y;
        x += left;
        y += top;
        currentIFrame = getWindow(currentIFrame).frameElement;
      }
    }
    return rectToClientRect({
      width,
      height,
      x,
      and
    });
  }

  function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
    let {
      rect,
      offsetParent,
      strategy
    } = _ref;
    const isOffsetParentAnElement = isHTMLElement(offsetParent);
    const documentElement = getDocumentElement(offsetParent);
    if (offsetParent === documentElement) {
      return rect;
    }
    let scroll = {
      scrollLeft: 0,
      scrollTop: 0
    };
    let scale = createCoords(1);
    const offsets = createCoords(0);
    if (isOffsetParentAnElement || !isOffsetParentAnElement && strategy !== 'fixed') {
      if (getNodeName(offsetParent) !== 'body' || isOverflowElement(documentElement)) {
        scroll = getNodeScroll(offsetParent);
      }
      if (isHTMLElement(offsetParent)) {
        const offsetRect = getBoundingClientRect(offsetParent);
        scale = getScale(offsetParent);
        offsets.x = offsetRect.x + offsetParent.clientLeft;
        offsets.y = offsetRect.y + offsetParent.clientTop;
      }
    }
    return {
      width: rect.width * scale.x,
      height: rect.height * scale.y,
      x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x,
      y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y
    };
  }

  function getClientRects(element) {
    return Array.from(element.getClientRects());
  }

  function getWindowScrollBarX(element) {
    // If  has a CSS width greater than the viewport, then this will be
    // incorrect for RTL.
    return getBoundingClientRect(getDocumentElement(element)).left + getNodeScroll(element).scrollLeft;
  }

  // Gets the entire size of the scrollable document area, even extending outside
  // of the `` and `` rect bounds if horizontally scrollable.
  function getDocumentRect(element) {
    const html = getDocumentElement(element);
    const scroll = getNodeScroll(element);
    const body = element.ownerDocument.body;
    const width = max(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
    const height = max(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
    let x = -scroll.scrollLeft + getWindowScrollBarX(element);
    const y = -scroll.scrollTop;
    if (getComputedStyle$1(body).direction === 'rtl') {
      x += max(html.clientWidth, body.clientWidth) - width;
    }
    return {
      width,
      height,
      x,
      and
    };
  }

  function getViewportRect(element, strategy) {
    const win = getWindow(element);
    const html = getDocumentElement(element);
    const visualViewport = win.visualViewport;
    let width = html.clientWidth;
    let height = html.clientHeight;
    let x = 0;
    let y = 0;
    if (visualViewport) {
      width = visualViewport.width;
      height = visualViewport.height;
      const visualViewportBased = isWebKit();
      if (!visualViewportBased || visualViewportBased && strategy === 'fixed') {
        x = visualViewport.offsetLeft;
        y = visualViewport.offsetTop;
      }
    }
    return {
      width,
      height,
      x,
      and
    };
  }

  // Returns the inner client rect, subtracting scrollbars if present.
  function getInnerBoundingClientRect(element, strategy) {
    const clientRect = getBoundingClientRect(element, true, strategy === 'fixed');
    const top = clientRect.top + element.clientTop;
    const left = clientRect.left + element.clientLeft;
    const scale = isHTMLElement(element) ? getScale(element) : createCoords(1);
    const width = element.clientWidth * scale.x;
    const height = element.clientHeight * scale.y;
    const x = left * scale.x;
    const y = top * scale.y;
    return {
      width,
      height,
      x,
      and
    };
  }
  function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
    let rect;
    if (clippingAncestor === 'viewport') {
      rect = getViewportRect(element, strategy);
    } else if (clippingAncestor === 'document') {
      rect = getDocumentRect(getDocumentElement(element));
    } else if (isElement(clippingAncestor)) {
      rect = getInnerBoundingClientRect(clippingAncestor, strategy);
    } else {
      const visualOffsets = getVisualOffsets(element);
      rect = {
        ...clippingAncestor,
        x: clippingAncestor.x - visualOffsets.x,
        y: clippingAncestor.y - visualOffsets.y
      };
    }
    return rectToClientRect(rect);
  }
  function hasFixedPositionAncestor(element, stopNode) {
    const parentNode = getParentNode(element);
    if (parentNode === stopNode || !isElement(parentNode) || isLastTraversableNode(parentNode)) {
      return false;
    }
    return getComputedStyle$1(parentNode).position === 'fixed' || hasFixedPositionAncestor(parentNode, stopNode);
  }

  // A "clipping ancestor" is an `overflow` element with the characteristic of
  // clipping (or hiding) child elements. This returns all clipping ancestors
  // of the given element up the tree.
  function getClippingElementAncestors(element, cache) {
    const cachedResult = cache.get(element);
    if (cachedResult) {
      return cachedResult;
    }
    let result = getOverflowAncestors(element, [], false).filter(el => isElement(el) && getNodeName(el) !== 'body');
    let currentContainingBlockComputedStyle = null;
    const elementIsFixed = getComputedStyle$1(element).position === 'fixed';
    let currentNode = elementIsFixed ? getParentNode(element) : element;

    // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
    while (isElement(currentNode) && !isLastTraversableNode(currentNode)) {
      const computedStyle = getComputedStyle$1(currentNode);
      const currentNodeIsContaining = isContainingBlock(currentNode);
      if (!currentNodeIsContaining && computedStyle.position === 'fixed') {
        currentContainingBlockComputedStyle = null;
      }
      const shouldDropCurrentNode = elementIsFixed ? !currentNodeIsContaining && !currentContainingBlockComputedStyle : !currentNodeIsContaining && computedStyle.position === 'static' && !!currentContainingBlockComputedStyle && ['absolute', 'fixed'].includes(currentContainingBlockComputedStyle.position) || isOverflowElement(currentNode) && !currentNodeIsContaining && hasFixedPositionAncestor(element, currentNode);
      if (shouldDropCurrentNode) {
        // Drop non-containing blocks.
        result = result.filter(ancestor => ancestor !== currentNode);
      } else {
        // Record last containing block for next iteration.
        currentContainingBlockComputedStyle = computedStyle;
      }
      currentNode = getParentNode(currentNode);
    }
    cache.set(element, result);
    return result;
  }

  // Gets the maximum area that the element is visible in due to any number of
  // clipping ancestors.
  function getClippingRect(_ref) {
    let {
      element,
      boundary,
      rootBoundary,
      strategy
    } = _ref;
    const elementClippingAncestors = boundary === 'clippingAncestors' ? getClippingElementAncestors(element, this._c) : [].concat(boundary);
    const clippingAncestors = [...elementClippingAncestors, rootBoundary];
    const firstClippingAncestor = clippingAncestors[0];
    const clippingRect = clippingAncestors.reduce((accRect, clippingAncestor) => {
      const rect = getClientRectFromClippingAncestor(element, clippingAncestor, strategy);
      accRect.top = max(rect.top, accRect.top);
      accRect.right = min(rect.right, accRect.right);
      accRect.bottom = min(rect.bottom, accRect.bottom);
      accRect.left = max(rect.left, accRect.left);
      return accRect;
    }, getClientRectFromClippingAncestor(element, firstClippingAncestor, strategy));
    return {
      width: clippingRect.right - clippingRect.left,
      height: clippingRect.bottom - clippingRect.top,
      x: clippingRect.left,
      and: clippingRect.top
    };
  }

  function getDimensions(element) {
    const {
      width,
      height
    } = getCssDimensions(element);
    return {
      width,
      height
    };
  }

  function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
    const isOffsetParentAnElement = isHTMLElement(offsetParent);
    const documentElement = getDocumentElement(offsetParent);
    const isFixed = strategy === 'fixed';
    const rect = getBoundingClientRect(element, true, isFixed, offsetParent);
    let scroll = {
      scrollLeft: 0,
      scrollTop: 0
    };
    const offsets = createCoords(0);
    if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
      if (getNodeName(offsetParent) !== 'body' || isOverflowElement(documentElement)) {
        scroll = getNodeScroll(offsetParent);
      }
      if (isOffsetParentAnElement) {
        const offsetRect = getBoundingClientRect(offsetParent, true, isFixed, offsetParent);
        offsets.x = offsetRect.x + offsetParent.clientLeft;
        offsets.y = offsetRect.y + offsetParent.clientTop;
      } else if (documentElement) {
        offsets.x = getWindowScrollBarX(documentElement);
      }
    }
    return {
      x: rect.left + scroll.scrollLeft - offsets.x,
      y: rect.top + scroll.scrollTop - offsets.y,
      width: rect.width,
      height: rect.height
    };
  }

  function getTrueOffsetParent(element, polyfill) {
    if (!isHTMLElement(element) || getComputedStyle$1(element).position === 'fixed') {
      return null;
    }
    if (polyfill) {
      return polyfill(element);
    }
    return element.offsetParent;
  }

  // Gets the closest ancestor positioned element. Handles some edge cases,
  // such as table ancestors and cross browser bugs.
  function getOffsetParent(element, polyfill) {
    const window = getWindow(element);
    if (!isHTMLElement(element)) {
      return window;
    }
    let offsetParent = getTrueOffsetParent(element, polyfill);
    while (offsetParent && isTableElement(offsetParent) && getComputedStyle$1(offsetParent).position === 'static') {
      offsetParent = getTrueOffsetParent(offsetParent, polyfill);
    }
    if (offsetParent && (getNodeName(offsetParent) === 'html' || getNodeName(offsetParent) === 'body' && getComputedStyle$1(offsetParent).position === 'static' && !isContainingBlock(offsetParent))) {
      return window;
    }
    return offsetParent || getContainingBlock(element) || window;
  }

  const getElementRects = async function (_ref) {
    let {
      reference,
      floating,
      strategy
    } = _ref;
    const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
    const getDimensionsFn = this.getDimensions;
    return {
      reference: getRectRelativeToOffsetParent(reference, await getOffsetParentFn(floating), strategy),
      floating: {
        x: 0,
        y: 0,
        ...(await getDimensionsFn(floating))
      }
    };
  };

  function isRTL(element) {
    return getComputedStyle$1(element).direction === 'rtl';
  }

  const platform = {
    convertOffsetParentRelativeRectToViewportRelativeRect,
    getDocumentElement,
    getClippingRect,
    getOffsetParent,
    getElementRects,
    getClientRects,
    getDimensions,
    getScale,
    isElement,
    isRTL
  };

  // https://samthor.au/2021/observing-dom/
  function observeMove(element, onMove) {
    let io = null;
    let timeoutId;
    const root = getDocumentElement(element);
    function cleanup() {
      clearTimeout(timeoutId);
      io && io.disconnect();
      i = null;
    }
    function refresh(skip, threshold) {
      if (skip === void 0) {
        skip = false;
      }
      if (threshold === void 0) {
        threshold = 1;
      }
      cleanup();
      const {
        left,
        top,
        width,
        height
      } = element.getBoundingClientRect();
      if (!skip) {
        onMove();
      }
      if (!width || !height) {
        return;
      }
      const insetTop = floor(top);
      const insetRight = floor(root.clientWidth - (left + width));
      const insetBottom = floor(root.clientHeight - (top + height));
      const insetLeft = floor(left);
      const rootMargin = -insetTop + "px " + -insetRight + "px " + -insetBottom + "px " + -insetLeft + "px";
      const options = {
        rootMargin,
        threshold: max(0, min(1, threshold)) || 1
      };
      let isFirstUpdate = true;
      function handleObserve(entries) {
        const ratio = entries[0].intersectionRatio;
        if (ratio !== threshold) {
          if (!isFirstUpdate) {
            return refresh();
          }
          if (!ratio) {
            timeoutId = setTimeout(() => {
              refresh(false, 1e-7);
            }, 100);
          } else {
            refresh(false, ratio);
          }
        }
        isFirstUpdate = false;
      }

      // Older browsers don't support a `document` as the root and will throw an
      // error.
      try {
        io = new IntersectionObserver(handleObserve, {
          ...options,
          // Handle <iframe>s
          root: root.ownerDocument
        });
      } catch (e) {
        io = new IntersectionObserver(handleObserve, options);
      }
      io.observe(element);
    }
    refresh(true);
    return cleanup;
  }

  /**
   * Automatically updates the position of the floating element when necessary.
   * Should only be called when the floating element is mounted on the DOM or
   * visible on the screen.
   * @returns cleanup function that should be invoked when the floating element is
   * removed from the DOM or hidden from the screen.
   * @see https://floating-ui.com/docs/autoUpdate
   */
  function autoUpdate(reference, floating, update, options) {
    if (options === void 0) {
      options = {};
    }
    const {
      ancestorScroll = true,
      ancestorResize = true,
      elementResize = typeof ResizeObserver === 'function',
      layoutShift = typeof IntersectionObserver === 'function',
      animationFrame = false
    } = options;
    const referenceEl = unwrapElement(reference);
    const ancestors = ancestorScroll || ancestorResize ? [...(referenceEl ? getOverflowAncestors(referenceEl) : []), ...getOverflowAncestors(floating)] : [];
    ancestors.forEach(ancestor => {
      ancestorScroll && ancestor.addEventListener('scroll', update, {
        passive: true
      });
      ancestorResize && ancestor.addEventListener('resize', update);
    });
    const cleanupIo = referenceEl && layoutShift ? observeMove(referenceEl, update) : null;
    let reobserveFrame = -1;
    let resizeObserver = null;
    if (elementResize) {
      resizeObserver = new ResizeObserver(_ref => {
        let [firstEntry] = _ref;
        if (firstEntry && firstEntry.target === referenceEl && resizeObserver) {
          // Prevent update loops when using the `size` middleware.
          // https://github.com/floating-ui/floating-ui/issues/1740
          resizeObserver.unobserve(floating);
          cancelAnimationFrame(reobserveFrame);
          reobserveFrame = requestAnimationFrame(() => {
            resizeObserver && resizeObserver.observe(floating);
          });
        }
        update();
      });
      if (referenceEl && !animationFrame) {
        resizeObserver.observe(referenceEl);
      }
      resizeObserver.observe(floating);
    }
    let frameId;
    let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
    if (animationFrame) {
      frameLoop();
    }
    function frameLoop() {
      const nextRefRect = getBoundingClientRect(reference);
      if (prevRefRect && (nextRefRect.x !== prevRefRect.x || nextRefRect.y !== prevRefRect.y || nextRefRect.width !== prevRefRect.width || nextRefRect.height !== prevRefRect.height)) {
        update();
      }
      prevRefRect = nextRefRect;
      frameId = requestAnimationFrame(frameLoop);
    }
    update();
    return () => {
      ancestors.forEach(ancestor => {
        ancestorScroll && ancestor.removeEventListener('scroll', update);
        ancestorResize && ancestor.removeEventListener('resize', update);
      });
      cleanupIo && cleanupIo();
      resizeObserver && resizeObserver.disconnect();
      resizeObserver = null;
      if (animationFrame) {
        cancelAnimationFrame(frameId);
      }
    };
  }

  /**
   * Optimizes the visibility of the floating element by shifting it in order to
   * keep it in view when it will overflow the clipping boundary.
   * @see https://floating-ui.com/docs/shift
   */
  const shift = shift$1;

  /**
   * Optimizes the visibility of the floating element by flipping the `placement`
   * in order to keep it in view when the preferred placement(s) will overflow the
   * clipping boundary. Alternative to `autoPlacement`.
   * @see https://floating-ui.com/docs/flip
   */
  const flip = flip$1;

  /**
   * Provides data that allows you to change the size of the floating element —
   * for instance, prevent it from overflowing the clipping boundary or match the
   * width of the reference element.
   * @see https://floating-ui.com/docs/size
   */
  const size = size$1;

  /**
   * Provides data to position an inner element of the floating element so that it
   * appears centered to the reference element.
   * @see https://floating-ui.com/docs/arrow
   */
  const arrow = arrow$1;

  /**
   * Computes the `x` and `y` coordinates that will place the floating element
   * next to a given reference element.
   */
  const computePosition = (reference, floating, options) => {
    // This caches the expensive `getClippingElementAncestors` function so that
    // multiple lifecycle resets re-use the same result. It only lives for a
    // single call. If other functions become expensive, we can add them as well.
    const cache = new Map();
    const mergedOptions = {
      platform,
      ...options
    };
    const platformWithCache = {
      ...mergedOptions.platform,
      _c: cache
    };
    return computePosition$1(reference, floating, {
      ...mergedOptions,
      platform: platformWithCache
    });
  };

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  const t={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},e$3=t=>(...e)=>({_$litDirective$:t,values:e});class i{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i;}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}

  /**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */const e$2=e$3(class extends i{constructor(t$1){if(super(t$1),t$1.type!==t.ATTRIBUTE||"class"!==t$1.name||t$1.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return " "+Object.keys(t).filter((s=>t[s])).join(" ")+" "}update(s,[i]){if(void 0===this.it){this.it=new Set,void 0!==s.strings&&(this.st=new Set(s.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in i)i[t]&&!this.st?.has(t)&&this.it.add(t);return this.render(i)}const r=s.element.classList;for(const t of this.it)t in i||(r.remove(t),this.it.delete(t));for(const t in i){const s=!!i[t];s===this.it.has(t)||this.st?.has(t)||(s?(r.add(t),this.it.add(t)):(r.remove(t),this.it.delete(t)));}return w}});

  /* eslint-disable @typescript-eslint/ban-types */
  function offsetParent(element) {
      return offsetParentPolyfill(element);
  }
  function flatTreeParent(element) {
      if (element.assignedSlot) {
          return element.assignedSlot;
      }
      if (element.parentNode instanceof ShadowRoot) {
          return element.parentNode.host;
      }
      return element.parentNode;
  }
  function offsetParentPolyfill(element) {
      // Do an initial walk to check for display:none ancestors.
      for (let ancestor = element; ancestor; ancestor = flatTreeParent(ancestor)) {
          if (!(ancestor instanceof Element)) {
              continue;
          }
          if (getComputedStyle(ancestor).display === 'none') {
              return null;
          }
      }
      for (let ancestor = flatTreeParent(element); ancestor; ancestor = flatTreeParent(ancestor)) {
          if (!(ancestor instanceof Element)) {
              continue;
          }
          const style = getComputedStyle(ancestor);
          // Display:contents nodes aren't in the layout tree so they should be skipped.
          if (style.display === 'contents') {
              continue;
          }
          if (style.position !== 'static' || style.filter !== 'none') {
              return ancestor;
          }
          if (ancestor.tagName === 'BODY') {
              return ancestor;
          }
      }
      return null;
  }

  function isVirtualElement(e) {
    return e !== null && typeof e === "object" && "getBoundingClientRect" in e;
  }
  var SlPopup = class extends ShoelaceElement {
    constructor() {
      super(...arguments);
      this.active = false;
      this.placement = "top";
      this.strategy = "absolute";
      this.distance = 0;
      this.skidding = 0;
      this.arrow = false;
      this.arrowPlacement = "anchor";
      this.arrowPadding = 10;
      this.flip = false;
      this.flipFallbackPlacements = "";
      this.flipFallbackStrategy = "best-fit";
      this.flipPadding = 0;
      this.shift = false;
      this.shiftPadding = 0;
      this.autoSizePadding = 0;
    }
    async connectedCallback() {
      super.connectedCallback();
      await this.updateComplete;
      this.start();
    }
    disconnectedCallback() {
      super.disconnectedCallback();
      this.stop();
    }
    async updated(changedProps) {
      super.updated(changedProps);
      if (changedProps.has("active")) {
        if (this.active) {
          this.start();
        } else {
          this.stop();
        }
      }
      if (changedProps.has("anchor")) {
        this.handleAnchorChange();
      }
      if (this.active) {
        await this.updateComplete;
        this.reposition();
      }
    }
    async handleAnchorChange() {
      await this.stop();
      if (this.anchor && typeof this.anchor === "string") {
        const root = this.getRootNode();
        this.anchorEl = root.getElementById(this.anchor);
      } else if (this.anchor instanceof Element || isVirtualElement(this.anchor)) {
        this.anchorEl = this.anchor;
      } else {
        this.anchorEl = this.querySelector('[slot="anchor"]');
      }
      if (this.anchorEl instanceof HTMLSlotElement) {
        this.anchorEl = this.anchorEl.assignedElements({ flatten: true })[0];
      }
      if (this.anchorEl) {
        this.start();
      }
    }
    start() {
      if (!this.anchorEl) {
        return;
      }
      this.cleanup = autoUpdate(this.anchorEl, this.popup, () => {
        this.reposition();
      });
    }
    async stop() {
      return new Promise((resolve) => {
        if (this.cleanup) {
          this.cleanup();
          this.cleanup = void 0;
          this.removeAttribute("data-current-placement");
          this.style.removeProperty("--auto-size-available-width");
          this.style.removeProperty("--auto-size-available-height");
          requestAnimationFrame(() => resolve());
        } else {
          resolve();
        }
      });
    }
    /** Forces the popup to recalculate and reposition itself. */
    reposition() {
      if (!this.active || !this.anchorEl) {
        return;
      }
      const middleware = [
        // The offset middleware goes first
        offset({ mainAxis: this.distance, crossAxis: this.skidding })
      ];
      if (this.sync) {
        middleware.push(
          size({
            apply: ({ rects }) => {
              const syncWidth = this.sync === "width" || this.sync === "both";
              const syncHeight = this.sync === "height" || this.sync === "both";
              this.popup.style.width = syncWidth ? `${rects.reference.width}px` : "";
              this.popup.style.height = syncHeight ? `${rects.reference.height}px` : "";
            }
          })
        );
      } else {
        this.popup.style.width = "";
        this.popup.style.height = "";
      }
      if (this.flip) {
        middleware.push(
          flip({
            boundary: this.flipBoundary,
            // @ts-expect-error - We're converting a string attribute to an array here
            fallbackPlacements: this.flipFallbackPlacements,
            fallbackStrategy: this.flipFallbackStrategy === "best-fit" ? "bestFit" : "initialPlacement",
            padding: this.flipPadding
          })
        );
      }
      if (this.shift) {
        middleware.push(
          shift({
            boundary: this.shiftBoundary,
            padding: this.shiftPadding
          })
        );
      }
      if (this.autoSize) {
        middleware.push(
          size({
            boundary: this.autoSizeBoundary,
            padding: this.autoSizePadding,
            apply: ({ availableWidth, availableHeight }) => {
              if (this.autoSize === "vertical" || this.autoSize === "both") {
                this.style.setProperty("--auto-size-available-height", `${availableHeight}px`);
              } else {
                this.style.removeProperty("--auto-size-available-height");
              }
              if (this.autoSize === "horizontal" || this.autoSize === "both") {
                this.style.setProperty("--auto-size-available-width", `${availableWidth}px`);
              } else {
                this.style.removeProperty("--auto-size-available-width");
              }
            }
          })
        );
      } else {
        this.style.removeProperty("--auto-size-available-width");
        this.style.removeProperty("--auto-size-available-height");
      }
      if (this.arrow) {
        middleware.push(
          arrow({
            element: this.arrowEl,
            padding: this.arrowPadding
          })
        );
      }
      const getOffsetParent = this.strategy === "absolute" ? (element) => platform.getOffsetParent(element, offsetParent) : platform.getOffsetParent;
      computePosition(this.anchorEl, this.popup, {
        placement: this.placement,
        middleware,
        strategy: this.strategy,
        platform: __spreadProps(__spreadValues({}, platform), {
          getOffsetParent
        })
      }).then(({ x, y, middlewareData, placement }) => {
        const isRtl = getComputedStyle(this).direction === "rtl";
        const staticSide = { top: "bottom", right: "left", bottom: "top", left: "right" }[placement.split("-")[0]];
        this.setAttribute("data-current-placement", placement);
        Object.assign(this.popup.style, {
          left: `${x}px`,
          top: `${y}px`
        });
        if (this.arrow) {
          const arrowX = middlewareData.arrow.x;
          const arrowY = middlewareData.arrow.y;
          let top = "";
          let right = "";
          let bottom = "";
          let left = "";
          if (this.arrowPlacement === "start") {
            const value = typeof arrowX === "number" ? `calc(${this.arrowPadding}px - var(--arrow-padding-offset))` : "";
            top = typeof arrowY === "number" ? `calc(${this.arrowPadding}px - var(--arrow-padding-offset))` : "";
            right = isRtl ? value : "";
            left = isRtl ? "" : value;
          } else if (this.arrowPlacement === "end") {
            const value = typeof arrowX === "number" ? `calc(${this.arrowPadding}px - var(--arrow-padding-offset))` : "";
            right = isRtl ? "" : value;
            left = isRtl ? value : "";
            bottom = typeof arrowY === "number" ? `calc(${this.arrowPadding}px - var(--arrow-padding-offset))` : "";
          } else if (this.arrowPlacement === "center") {
            left = typeof arrowX === "number" ? `calc(50% - var(--arrow-size-diagonal))` : "";
            top = typeof arrowY === "number" ? `calc(50% - var(--arrow-size-diagonal))` : "";
          } else {
            left = typeof arrowX === "number" ? `${arrowX}px` : "";
            top = typeof arrowY === "number" ? `${arrowY}px` : "";
          }
          Object.assign(this.arrowEl.style, {
            top,
            right,
            bottom,
            left,
            [staticSide]: "calc(var(--arrow-size-diagonal) * -1)"
          });
        }
      });
      this.emit("sl-reposition");
    }
    render() {
      return x`
      

      
   

        
        ${this.arrow ? x`
    
` : ""}
      
   

    `;
    }
  };
  SlPopup.styles = popup_styles_default;
  __decorateClass([
    e$4(".popup")
  ], SlPopup.prototype, "popup", 2);
  __decorateClass([
    e$4(".popup__arrow")
  ], SlPopup.prototype, "arrowEl", 2);
  __decorateClass([
    n$2()
  ], SlPopup.prototype, "anchor", 2);
  __decorateClass([
    n$2({ type: Boolean, reflect: true })
  ], SlPopup.prototype, "active", 2);
  __decorateClass([
    n$2({ reflect: true })
  ], SlPopup.prototype, "placement", 2);
  __decorateClass([
    n$2({ reflect: true })
  ], SlPopup.prototype, "strategy", 2);
  __decorateClass([
    n$2({ type: Number })
  ], SlPopup.prototype, "distance", 2);
  __decorateClass([
    n$2({ type: Number })
  ], SlPopup.prototype, "skidding", 2);
  __decorateClass([
    n$2({ type: Boolean })
  ], SlPopup.prototype, "arrow", 2);
  __decorateClass([
    n$2({ attribute: "arrow-placement" })
  ], SlPopup.prototype, "arrowPlacement", 2);
  __decorateClass([
    n$2({ attribute: "arrow-padding", type: Number })
  ], SlPopup.prototype, "arrowPadding", 2);
  __decorateClass([
    n$2({ type: Boolean })
  ], SlPopup.prototype, "flip", 2);
  __decorateClass([
    n$2({
      attribute: "flip-fallback-placements",
      converter: {
        fromAttribute: (value) => {
          return value.split(" ").map((p) => p.trim()).filter((p) => p !== "");
        },
        toAttribute: (value) => {
          return value.join(" ");
        }
      }
    })
  ], SlPopup.prototype, "flipFallbackPlacements", 2);
  __decorateClass([
    n$2({ attribute: "flip-fallback-strategy" })
  ], SlPopup.prototype, "flipFallbackStrategy", 2);
  __decorateClass([
    n$2({ type: Object })
  ], SlPopup.prototype, "flipBoundary", 2);
  __decorateClass([
    n$2({ attribute: "flip-padding", type: Number })
  ], SlPopup.prototype, "flipPadding", 2);
  __decorateClass([
    n$2({ type: Boolean })
  ], SlPopup.prototype, "shift", 2);
  __decorateClass([
    n$2({ type: Object })
  ], SlPopup.prototype, "shiftBoundary", 2);
  __decorateClass([
    n$2({ attribute: "shift-padding", type: Number })
  ], SlPopup.prototype, "shiftPadding", 2);
  __decorateClass([
    n$2({ attribute: "auto-size" })
  ], SlPopup.prototype, "autoSize", 2);
  __decorateClass([
    n$2()
  ], SlPopup.prototype, "sync", 2);
  __decorateClass([
    n$2({ type: Object })
  ], SlPopup.prototype, "autoSizeBoundary", 2);
  __decorateClass([
    n$2({ attribute: "auto-size-padding", type: Number })
  ], SlPopup.prototype, "autoSizePadding", 2);

  SlPopup.define("sl-popup");

  var dropdown_styles_default = i$3`
  ${component_styles_default}

  :host {
    display: inline-block;
  }

  .dropdown::part(popup) {
    z-index: var(--sl-z-index-dropdown);
  }

  .dropdown[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .dropdown[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .dropdown[data-current-placement^='left']::part(popup) {
    transform-origin: right;
  }

  .dropdown[data-current-placement^='right']::part(popup) {
    transform-origin: left;
  }

  .dropdown__trigger {
    display: block;
  }

  .dropdown__panel {
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    box-shadow: var(--sl-shadow-large);
    border-radius: var(--sl-border-radius-medium);
    pointer-events: none;
  }

  .dropdown--open .dropdown__panel {
    display: block;
    pointer-events: all;
  }

  /* When users slot a menu, make sure it conforms to the popup's auto-size */
  ::slotted(sl-menu) {
    max-width: var(--auto-size-available-width) !important;
    max-height: var(--auto-size-available-height) !important;
  }
`;

  // src/internal/tabbable.ts
  function isTakingUpSpace(elem) {
    return Boolean(elem.offsetParent || elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
  }
  function isTabbable(el) {
    const tag = el.tagName.toLowerCase();
    if (el.getAttribute("tabindex") === "-1") {
      return false;
    }
    if (el.hasAttribute("disabled")) {
      return false;
    }
    if (tag === "input" && el.getAttribute("type") === "radio" && !el.hasAttribute("checked")) {
      return false;
    }
    if (!isTakingUpSpace(el)) {
      return false;
    }
    if (window.getComputedStyle(el).visibility === "hidden") {
      return false;
    }
    if ((tag === "audio" || tag === "video") && el.hasAttribute("controls")) {
      return true;
    }
    if (el.hasAttribute("tabindex")) {
      return true;
    }
    if (el.hasAttribute("contenteditable") && el.getAttribute("contenteditable") !== "false") {
      return true;
    }
    return ["button", "input", "select", "textarea", "a", "audio", "video", "summary"].includes(tag);
  }
  function getTabbableBoundary(root) {
    var _a, _b;
    const tabbableElements = getTabbableElements(root);
    const start = (_a = tabbableElements[0]) != null ? _a : null;
    const end = (_b = tabbableElements[tabbableElements.length - 1]) != null ? _b : null;
    return { start, end };
  }
  function getTabbableElements(root) {
    const tabbableElements = [];
    function walk(el) {
      if (el instanceof Element) {
        if (el.hasAttribute("inert")) {
          return;
        }
        if (!tabbableElements.includes(el) && isTabbable(el)) {
          tabbableElements.push(el);
        }
        const slotChildrenOutsideRootElement = (slotElement) => {
          var _a;
          return ((_a = slotElement.getRootNode({ composed: true })) == null ? void 0 : _a.host) !== root;
        };
        if (el instanceof HTMLSlotElement && slotChildrenOutsideRootElement(el)) {
          el.assignedElements({ flatten: true }).forEach((assignedEl) => {
            walk(assignedEl);
          });
        }
        if (el.shadowRoot !== null && el.shadowRoot.mode === "open") {
          walk(el.shadowRoot);
        }
      }
      [...el.children].forEach((e) => walk(e));
    }
    walk(root);
    return tabbableElements.sort((a, b) => {
      const aTabindex = Number(a.getAttribute("tabindex")) || 0;
      const bTabindex = Number(b.getAttribute("tabindex")) || 0;
      return bTabindex - aTabindex;
    });
  }

  // src/utilities/animation-registry.ts
  var defaultAnimationRegistry = /* @__PURE__ */ new Map();
  var customAnimationRegistry = /* @__PURE__ */ new WeakMap();
  function ensureAnimation(animation) {
    return animation != null ? animation : { keyframes: [], options: { duration: 0 } };
  }
  function getLogicalAnimation(animation, dir) {
    if (dir.toLowerCase() === "rtl") {
      return {
        keyframes: animation.rtlKeyframes || animation.keyframes,
        options: animation.options
      };
    }
    return animation;
  }
  function setDefaultAnimation(animationName, animation) {
    defaultAnimationRegistry.set(animationName, ensureAnimation(animation));
  }
  function getAnimation(el, animationName, options) {
    const customAnimation = customAnimationRegistry.get(el);
    if (customAnimation == null ? void 0 : customAnimation[animationName]) {
      return getLogicalAnimation(customAnimation[animationName], options.dir);
    }
    const defaultAnimation = defaultAnimationRegistry.get(animationName);
    if (defaultAnimation) {
      return getLogicalAnimation(defaultAnimation, options.dir);
    }
    return {
      keyframes: [],
      options: { duration: 0 }
    };
  }

  // src/internal/event.ts
  function waitForEvent(el, eventName) {
    return new Promise((resolve) => {
      function done(event) {
        if (event.target === el) {
          el.removeEventListener(eventName, done);
          resolve();
        }
      }
      el.addEventListener(eventName, done);
    });
  }

  // src/internal/animate.ts
  function animateTo(el, keyframes, options) {
    return new Promise((resolve) => {
      if ((options == null ? void 0 : options.duration) === Infinity) {
        throw new Error("Promise-based animations must be finite.");
      }
      const animation = el.animate(keyframes, __spreadProps(__spreadValues({}, options), {
        duration: prefersReducedMotion() ? 0 : options.duration
      }));
      animation.addEventListener("cancel", resolve, { once: true });
      animation.addEventListener("finish", resolve, { once: true });
    });
  }
  function prefersReducedMotion() {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    return query.matches;
  }
  function stopAnimations(el) {
    return Promise.all(
      el.getAnimations().map((animation) => {
        return new Promise((resolve) => {
          const handleAnimationEvent = requestAnimationFrame(resolve);
          animation.addEventListener("cancel", () => handleAnimationEvent, { once: true });
          animation.addEventListener("finish", () => handleAnimationEvent, { once: true });
          animation.cancel();
        });
      })
    );
  }

  const connectedElements = new Set();
  const documentElementObserver = new MutationObserver(update);
  const translations = new Map();
  let documentDirection = document.documentElement.dir || 'ltr';
  let documentLanguage = document.documentElement.lang || navigator.language;
  let fallback;
  documentElementObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['dir', 'lang']
  });
  function registerTranslation(...translation) {
      translation.map(t => {
          const code = t.$code.toLowerCase();
          if (translations.has(code)) {
              translations.set(code, Object.assign(Object.assign({}, translations.get(code)), t));
          }
          else {
              translations.set(code, t);
          }
          if (!fallback) {
              fallback = t;
          }
      });
      update();
  }
  function update() {
      documentDirection = document.documentElement.dir || 'ltr';
      documentLanguage = document.documentElement.lang || navigator.language;
      [...connectedElements.keys()].map((el) => {
          if (typeof el.requestUpdate === 'function') {
              el.requestUpdate();
          }
      });
  }
  let LocalizeController$1 = class LocalizeController {
      constructor(host) {
          this.host = host;
          this.host.addController(this);
      }
      hostConnected() {
          connectedElements.add(this.host);
      }
      hostDisconnected() {
          connectedElements.delete(this.host);
      }
      dir() {
          return `${this.host.dir || documentDirection}`.toLowerCase();
      }
      just() {
          return `${this.host.lang || documentLanguage}`.toLowerCase();
      }
      getTranslationData(lang) {
          var _a, _b;
          const locale = new Intl.Locale(lang.replace(/_/g, '-'));
          const language = locale === null || locale === void 0 ? void 0 : locale.language.toLowerCase();
          const region = (_b = (_a = locale === null || locale === void 0 ? void 0 : locale.region) === null || _a === void 0 ? void 0 : _a.toLowerCase()) !== null && _b !== void 0 ? _b : '';
          const primary = translations.get(`${language}-${region}`);
          const secondary = translations.get(language);
          return { locale, language, region, primary, secondary };
      }
      exists(key, options) {
          var _a;
          const { primary, secondary } = this.getTranslationData((_a = options.lang) !== null && _a !== void 0 ? _a : this.lang());
          options = Object.assign({ includeFallback: false }, options);
          if ((primary && primary[key]) ||
              (secondary && secondary[key]) ||
              (options.includeFallback && fallback && fallback[key])) {
              return true;
          }
          return false;
      }
      term(key, ...args) {
          const { primary, secondary } = this.getTranslationData(this.lang());
          let term;
          if (primary && primary[key]) {
              term = primary[key];
          }
          else if (secondary && secondary[key]) {
              term = secondary[key];
          }
          else if (fallback && fallback[key]) {
              term = fallback[key];
          }
          else {
              console.error(`No translation found for: ${String(key)}`);
              return String(key);
          }
          if (typeof term === 'function') {
              return term(...args);
          }
          return term;
      }
      date(dateToFormat, options) {
          dateToFormat = new Date(dateToFormat);
          return new Intl.DateTimeFormat(this.lang(), options).format(dateToFormat);
      }
      number(numberToFormat, options) {
          numberToFormat = Number(numberToFormat);
          return isNaN(numberToFormat) ? '' : new Intl.NumberFormat(this.lang(), options).format(numberToFormat);
      }
      relativeTime(value, unit, options) {
          return new Intl.RelativeTimeFormat(this.lang(), options).format(value, unit);
      }
  };

  // src/translations/en.ts
  var translation = {
    $code: "en",
    $name: "English",
    $dir: "ltr",
    carousel: "Carousel",
    clearEntry: "Clear entry",
    close: "Close",
    copied: "Copied",
    copy: "Copy",
    currentValue: "Current value",
    error: "Error",
    goToSlide: (slide, count) => `Go to slide ${slide} of ${count}`,
    hidePassword: "Hide password",
    loading: "Loading",
    nextSlide: "Next slide",
    numOptionsSelected: (num) => {
      if (num === 0)
        return "No options selected";
      if (num === 1)
        return "1 option selected";
      return `${num} options selected`;
    },
    previousSlide: "Previous slide",
    progress: "Progress",
    remove: "Remove",
    resize: "Resize",
    scrollToEnd: "Scroll to end",
    scrollToStart: "Scroll to start",
    selectAColorFromTheScreen: "Select a color from the screen",
    showPassword: "Show password",
    slideNum: (slide) => `Slide ${slide}`,
    toggleColorFormat: "Toggle color format"
  };
  registerTranslation(translation);
  var en_default = translation;

  var LocalizeController = class extends LocalizeController$1 {
  };
  registerTranslation(en_default);

  // src/internal/watch.ts
  function watch(propertyName, options) {
    const resolvedOptions = __spreadValues({
      waitUntilFirstUpdate: false
    }, options);
    return (proto, decoratedFnName) => {
      const { update } = proto;
      const watchedProperties = Array.isArray(propertyName) ? propertyName : [propertyName];
      proto.update = function(changedProps) {
        watchedProperties.forEach((property) => {
          const key = property;
          if (changedProps.has(key)) {
            const oldValue = changedProps.get(key);
            const newValue = this[key];
            if (oldValue !== newValue) {
              if (!resolvedOptions.waitUntilFirstUpdate || this.hasUpdated) {
                this[decoratedFnName](oldValue, newValue);
              }
            }
          }
        });
        update.call(this, changedProps);
      };
    };
  }

  var SlDropdown = class extends ShoelaceElement {
    constructor() {
      super(...arguments);
      this.localize = new LocalizeController(this);
      this.open = false;
      this.placement = "bottom-start";
      this.disabled = false;
      this.stayOpenOnSelect = false;
      this.distance = 0;
      this.skidding = 0;
      this.hoist = false;
      this.handleKeyDown = (event) => {
        if (this.open && event.key === "Escape") {
          event.stopPropagation();
          this.hide();
          this.focusOnTrigger();
        }
      };
      this.handleDocumentKeyDown = (event) => {
        var _a;
        if (event.key === "Escape" && this.open) {
          event.stopPropagation();
          this.focusOnTrigger();
          this.hide();
          return;
        }
        if (event.key === "Tab") {
          if (this.open && ((_a = document.activeElement) == null ? void 0 : _a.tagName.toLowerCase()) === "sl-menu-item") {
            event.preventDefault();
            this.hide();
            this.focusOnTrigger();
            return;
          }
          setTimeout(() => {
            var _a2, _b, _c;
            const activeElement = ((_a2 = this.containingElement) == null ? void 0 : _a2.getRootNode()) instanceof ShadowRoot ? (_c = (_b = document.activeElement) == null ? void 0 : _b.shadowRoot) == null ? void 0 : _c.activeElement : document.activeElement;
            if (!this.containingElement || (activeElement == null ? void 0 : activeElement.closest(this.containingElement.tagName.toLowerCase())) !== this.containingElement) {
              this.hide();
            }
          });
        }
      };
      this.handleDocumentMouseDown = (event) => {
        const path = event.composedPath();
        if (this.containingElement && !path.includes(this.containingElement)) {
          this.hide();
        }
      };
      this.handlePanelSelect = (event) => {
        const target = event.target;
        if (!this.stayOpenOnSelect && target.tagName.toLowerCase() === "sl-menu") {
          this.hide();
          this.focusOnTrigger();
        }
      };
    }
    connectedCallback() {
      super.connectedCallback();
      if (!this.containingElement) {
        this.containingElement = this;
      }
    }
    firstUpdated() {
      this.panel.hidden = !this.open;
      if (this.open) {
        this.addOpenListeners();
        this.popup.active = true;
      }
    }
    disconnectedCallback() {
      super.disconnectedCallback();
      this.removeOpenListeners();
      this.hide();
    }
    focusOnTrigger() {
      const trigger = this.trigger.assignedElements({ flatten: true })[0];
      if (typeof (trigger == null ? void 0 : trigger.focus) === "function") {
        trigger.focus();
      }
    }
    getMenu() {
      return this.panel.assignedElements({ flatten: true }).find((el) => el.tagName.toLowerCase() === "sl-menu");
    }
    handleTriggerClick() {
      if (this.open) {
        this.hide();
      } else {
        this.show();
        this.focusOnTrigger();
      }
    }
    async handleTriggerKeyDown(event) {
      if ([" ", "Enter"].includes(event.key)) {
        event.preventDefault();
        this.handleTriggerClick();
        return;
      }
      const menu = this.getMenu();
      if (menu) {
        const menuItems = menu.getAllItems();
        const firstMenuItem = menuItems[0];
        const lastMenuItem = menuItems[menuItems.length - 1];
        if (["ArrowDown", "ArrowUp", "Home", "End"].includes(event.key)) {
          event.preventDefault();
          if (!this.open) {
            this.show();
            await this.updateComplete;
          }
          if (menuItems.length > 0) {
            this.updateComplete.then(() => {
              if (event.key === "ArrowDown" || event.key === "Home") {
                menu.setCurrentItem(firstMenuItem);
                firstMenuItem.focus();
              }
              if (event.key === "ArrowUp" || event.key === "End") {
                menu.setCurrentItem(lastMenuItem);
                lastMenuItem.focus();
              }
            });
          }
        }
      }
    }
    handleTriggerKeyUp(event) {
      if (event.key === " ") {
        event.preventDefault();
      }
    }
    handleTriggerSlotChange() {
      this.updateAccessibleTrigger();
    }
    //
    // Slotted triggers can be arbitrary content, but we need to link them to the dropdown panel with `aria-haspopup` and
    // `aria-expanded`. These must be applied to the "accessible trigger" (the tabbable portion of the trigger element
    // that gets slotted in) so screen readers will understand them. The accessible trigger could be the slotted element,
    // a child of the slotted element, or an element in the slotted element's shadow root.
    //

    //
    // To determine this, we assume the first tabbable element in the trigger slot is the "accessible trigger."
    //
    updateAccessibleTrigger() {
      const assignedElements = this.trigger.assignedElements({ flatten: true });
      const accessibleTrigger = assignedElements.find((el) => getTabbableBoundary(el).start);
      let target;
      if (accessibleTrigger) {
        switch (accessibleTrigger.tagName.toLowerCase()) {
          case "sl-button":
          case "sl-icon-button":
            target = accessibleTrigger.button;
            break;
          default:
            target = accessibleTrigger;
        }
        target.setAttribute("aria-haspopup", "true");
        target.setAttribute("aria-expanded", this.open ? "true" : "false");
      }
    }
    /** Shows the dropdown panel. */
    async show() {
      if (this.open) {
        return void 0;
      }
      this.open = true;
      return waitForEvent(this, "sl-after-show");
    }
    /** Hides the dropdown panel */
    async hide() {
      if (!this.open) {
        return void 0;
      }
      this.open = false;
      return waitForEvent(this, "sl-after-hide");
    }
    /**
     * Instructs the dropdown menu to reposition. Useful when the position or size of the trigger changes when the menu
     * is activated.
     */
    reposition() {
      this.popup.reposition();
    }
    addOpenListeners() {
      this.panel.addEventListener("sl-select", this.handlePanelSelect);
      this.panel.addEventListener("keydown", this.handleKeyDown);
      document.addEventListener("keydown", this.handleDocumentKeyDown);
      document.addEventListener("mousedown", this.handleDocumentMouseDown);
    }
    removeOpenListeners() {
      if (this.panel) {
        this.panel.removeEventListener("sl-select", this.handlePanelSelect);
        this.panel.removeEventListener("keydown", this.handleKeyDown);
      }
      document.removeEventListener("keydown", this.handleDocumentKeyDown);
      document.removeEventListener("mousedown", this.handleDocumentMouseDown);
    }
    async handleOpenChange() {
      if (this.disabled) {
        this.open = false;
        return;
      }
      this.updateAccessibleTrigger();
      if (this.open) {
        this.emit("sl-show");
        this.addOpenListeners();
        await stopAnimations(this);
        this.panel.hidden = false;
        this.popup.active = true;
        const { keyframes, options } = getAnimation(this, "dropdown.show", { dir: this.localize.dir() });
        await animateTo(this.popup.popup, keyframes, options);
        this.emit("sl-after-show");
      } else {
        this.emit("sl-hide");
        this.removeOpenListeners();
        await stopAnimations(this);
        const { keyframes, options } = getAnimation(this, "dropdown.hide", { dir: this.localize.dir() });
        await animateTo(this.popup.popup, keyframes, options);
        this.panel.hidden = true;
        this.popup.active = false;
        this.emit("sl-after-hide");
      }
    }
    render() {
      return x`
      
        
    

        
    

          
        
    

      
   
    `;
    }
  };
  SlDropdown.styles = dropdown_styles_default;
  SlDropdown.dependencies = { "sl-popup": SlPopup };
  __decorateClass([
    e$4(".dropdown")
  ], SlDropdown.prototype, "popup", 2);
  __decorateClass([
    e$4(".dropdown__trigger")
  ], SlDropdown.prototype, "trigger", 2);
  __decorateClass([
    e$4(".dropdown__panel")
  ], SlDropdown.prototype, "panel", 2);
  __decorateClass([
    n$2({ type: Boolean, reflect: true })
  ], SlDropdown.prototype, "open", 2);
  __decorateClass([
    n$2({ reflect: true })
  ], SlDropdown.prototype, "placement", 2);
  __decorateClass([
    n$2({ type: Boolean, reflect: true })
  ], SlDropdown.prototype, "disabled", 2);
  __decorateClass([
    n$2({ attribute: "stay-open-on-select", type: Boolean, reflect: true })
  ], SlDropdown.prototype, "stayOpenOnSelect", 2);
  __decorateClass([
    n$2({ attribute: false })
  ], SlDropdown.prototype, "containingElement", 2);
  __decorateClass([
    n$2({ type: Number })
  ], SlDropdown.prototype, "distance", 2);
  __decorateClass([
    n$2({ type: Number })
  ], SlDropdown.prototype, "skidding", 2);
  __decorateClass([
    n$2({ type: Boolean })
  ], SlDropdown.prototype, "hoist", 2);
  __decorateClass([
    watch("open", { waitUntilFirstUpdate: true })
  ], SlDropdown.prototype, "handleOpenChange", 1);
  setDefaultAnimation("dropdown.show", {
    keyframes: [
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1 }
    ],
    options: { duration: 100, easing: "ease" }
  });
  setDefaultAnimation("dropdown.hide", {
    keyframes: [
      { opacity: 1, scale: 1 },
      { opacity: 0, scale: 0.9 }
    ],
    options: { duration: 100, easing: "ease" }
  });

  SlDropdown.define("sl-dropdown");

  var menu_styles_default = i$3`
  ${component_styles_default}

  :host {
    display: block;
    position: relative;
    background: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding: var(--sl-spacing-x-small) 0;
    overflow: auto;
    overscroll-behavior: none;
  }

  ::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }
`;

  var SlMenu = class extends ShoelaceElement {
    connectedCallback() {
      super.connectedCallback();
      this.setAttribute("role", "menu");
    }
    handleClick(event) {
      const menuItemTypes = ["menuitem", "menuitemcheckbox"];
      const target = event.composedPath().find((el) => {
        var _a;
        return menuItemTypes.includes(((_a = el == null ? void 0 : el.getAttribute) == null ? void 0 : _a.call(el, "role")) || "");
      });
      if (!target)
        return;
      const item = target;
      if (item.type === "checkbox") {
        item.checked = !item.checked;
      }
      this.emit("sl-select", { detail: { item } });
    }
    handleKeyDown(event) {
      if (event.key === "Enter" || event.key === " ") {
        const item = this.getCurrentItem();
        event.preventDefault();
        event.stopPropagation();
        item == null ? void 0 : item.click();
      } else if (["ArrowDown", "ArrowUp", "Home", "End"].includes(event.key)) {
        const items = this.getAllItems();
        const activeItem = this.getCurrentItem();
        let index = activeItem ? items.indexOf(activeItem) : 0;
        if (items.length > 0) {
          event.preventDefault();
          event.stopPropagation();
          if (event.key === "ArrowDown") {
            index++;
          } else if (event.key === "ArrowUp") {
            index--;
          } else if (event.key === "Home") {
            index = 0;
          } else if (event.key === "End") {
            index = items.length - 1;
          }
          if (index < 0) {
            index = items.length - 1;
          }
          if (index > items.length - 1) {
            index = 0;
          }
          this.setCurrentItem(items[index]);
          items[index].focus();
        }
      }
    }
    handleMouseDown(event) {
      const target = event.target;
      if (this.isMenuItem(target)) {
        this.setCurrentItem(target);
      }
    }
    handleSlotChange() {
      const items = this.getAllItems();
      if (items.length > 0) {
        this.setCurrentItem(items[0]);
      }
    }
    isMenuItem(item) {
      var _a;
      return item.tagName.toLowerCase() === "sl-menu-item" || ["menuitem", "menuitemcheckbox", "menuitemradio"].includes((_a = item.getAttribute("role")) != null ? _a : "");
    }
    /** @internal Gets all slotted menu items, ignoring dividers, headers, and other elements. */
    getAllItems() {
      return [...this.defaultSlot.assignedElements({ flatten: true })].filter((el) => {
        if (el.inert || !this.isMenuItem(el)) {
          return false;
        }
        return true;
      });
    }
    /**
     * @internal Gets the current menu item, which is the menu item that has `tabindex="0"` within the roving tab index.
     * The menu item may or may not have focus, but for keyboard interaction purposes it's considered the "active" item.
     */
    getCurrentItem() {
      return this.getAllItems().find((i) => i.getAttribute("tabindex") === "0");
    }
    /**
     * @internal Sets the current menu item to the specified element. This sets `tabindex="0"` on the target element and
     * `tabindex="-1"` to all other items. This method must be called prior to setting focus on a menu item.
     */
    setCurrentItem(item) {
      const items = this.getAllItems();
      items.forEach((i) => {
        i.setAttribute("tabindex", i === item ? "0" : "-1");
      });
    }
    render() {
      return x`
      
    `;
    }
  };
  SlMenu.styles = menu_styles_default;
  __decorateClass([
    e$4("slot")
  ], SlMenu.prototype, "defaultSlot", 2);

  SlMenu.define("sl-menu");

  var menu_item_styles_default = i$3`
  ${component_styles_default}

  :host {
    --submenu-offset: -2px;

    /* Private */
    --safe-triangle-cursor-x: 0;
    --safe-triangle-cursor-y: 0;
    --safe-triangle-submenu-start-x: 0;
    --safe-triangle-submenu-start-y: 0;
    --safe-triangle-submenu-end-x: 0;
    --safe-triangle-submenu-end-y: 0;

    display: block;
  }

  :host([inert]) {
    display: none;
  }

  .menu-item {
    position: relative;
    display: flex;
    align-items: stretch;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-700);
    padding: var(--sl-spacing-2x-small) var(--sl-spacing-2x-small);
    transition: var(--sl-transition-fast) fill;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    cursor: pointer;
  }

  .menu-item.menu-item--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .menu-item .menu-item__label {
    flex: 1 1 auto;
    display: inline-block;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .menu-item .menu-item__prefix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__prefix::slotted(*) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .menu-item .menu-item__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  /* Safe triangle */
  .menu-item--submenu-expanded::after {
    content: '';
    position: fixed;
    z-index: calc(var(--sl-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--safe-triangle-cursor-x) var(--safe-triangle-cursor-y),
      var(--safe-triangle-submenu-start-x) var(--safe-triangle-submenu-start-y),
      var(--safe-triangle-submenu-end-x) var(--safe-triangle-submenu-end-y)
    );
  }

  :host(:focus-visible) {
    outline: none;
  }

  :host(:hover:not([aria-disabled='true'], :focus-visible)) .menu-item,
  .menu-item--submenu-expanded {
    background-color: var(--sl-color-neutral-100);
    color: var(--sl-color-neutral-1000);
  }

  :host(:focus-visible) .menu-item {
    outline: none;
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
    opacity: 1;
  }

  .menu-item .menu-item__check,
  .menu-item .menu-item__chevron {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.5em;
    visibility: hidden;
  }

  .menu-item--checked .menu-item__check,
  .menu-item--has-submenu .menu-item__chevron {
    visibility: visible;
  }

  /* Add elevation and z-index to submenus */
  sl-popup::part(popup) {
    box-shadow: var(--sl-shadow-large);
    z-index: var(--sl-z-index-dropdown);
    margin-left: var(--submenu-offset);
  }

  .menu-item--rtl sl-popup::part(popup) {
    margin-left: calc(-1 * var(--submenu-offset));
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .menu-item,
    :host(:focus-visible) .menu-item {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }
`;

  /**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */const e$1=(o,t)=>void 0===t?void 0!==o?._$litType$:o?._$litType$===t,f$1=o=>void 0===o.strings;

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */const s=(i,t)=>{const e=i._$AN;if(void 0===e)return !1;for(const i of e)i._$AO?.(t,!1),s(i,t);return !0},o$1=i=>{let t,e;do{if(void 0===(t=i._$AM))break;e=t._$AN,e.delete(i),i=t;}while(0===e?.size)},r=i=>{for(let t;t=i._$AM;i=t){let e=t._$AN;if(void 0===e)t._$AN=e=new Set;else if(e.has(i))break;e.add(i),c(t);}};function h$1(i){void 0!==this._$AN?(o$1(this),this._$AM=i,r(this)):this._$AM=i;}function n$1(i,t=!1,e=0){const r=this._$AH,h=this._$AN;if(void 0!==h&&0!==h.size)if(t)if(Array.isArray(r))for(let i=e;i<r.length;i++)s(r[i],!1),o$1(r[i]);else null!=r&&(s(r,!1),o$1(r));else s(this,i);}const c=i=>{i.type==t.CHILD&&(i._$AP??=n$1,i._$AQ??=h$1);};class f extends i{constructor(){super(...arguments),this._$AN=void 0;}_$AT(i,t,e){super._$AT(i,t,e),r(this),this.isConnected=i._$AU;}_$AO(i,t=!0){i!==this.isConnected&&(this.isConnected=i,i?this.reconnected?.():this.disconnected?.()),t&&(s(this,i),o$1(this));}setValue(t){if(f$1(this._$Ct))this._$Ct._$AI(t,this);else {const i=[...this._$Ct._$AH];i[this._$Ci]=t,this._$Ct._$AI(i,this,0);}}disconnected(){}reconnected(){}}

  /**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */const e=()=>new h;class h{}const o=new WeakMap,n=e$3(class extends f{render(i){return T}update(i,[s]){const e=s!==this.G;return e&&void 0!==this.G&&this.ot(void 0),(e||this.rt!==this.lt)&&(this.G=s,this.ct=i.options?.host,this.ot(this.lt=i.element)),T}ot(t){if("function"==typeof this.G){const i=this.ct??globalThis;let s=o.get(i);void 0===s&&(s=new WeakMap,o.set(i,s)),void 0!==s.get(this.G)&&this.G.call(this.ct,void 0),s.set(this.G,t),void 0!==t&&this.G.call(this.ct,t);}else this.G.value=t;}get rt(){return "function"==typeof this.G?o.get(this.ct??globalThis)?.get(this.G):this.G?.value}disconnected(){this.rt===this.lt&&this.ot(void 0);}reconnected(){this.ot(this.lt);}});

  // src/components/menu-item/submenu-controller.ts
  var SubmenuController = class {
    constructor(host, hasSlotController, localize) {
      this.popupRef = e();
      this.enableSubmenuTimer = -1;
      this.isConnected = false;
      this.isPopupConnected = false;
      this.skidding = 0;
      this.submenuOpenDelay = 100;
      // Set the safe triangle cursor position
      this.handleMouseMove = (event) => {
        this.host.style.setProperty("--safe-triangle-cursor-x", `${event.clientX}px`);
        this.host.style.setProperty("--safe-triangle-cursor-y", `${event.clientY}px`);
      };
      this.handleMouseOver = () => {
        if (this.hasSlotController.test("submenu")) {
          this.enableSubmenu();
        }
      };
      // Focus on the first menu-item of a submenu.
      this.handleKeyDown = (event) => {
        switch (event.key) {
          case "Escape":
          case "Tab":
            this.disableSubmenu();
            break;
          case "ArrowLeft":
            if (event.target !== this.host) {
              event.preventDefault();
              event.stopPropagation();
              this.host.focus();
              this.disableSubmenu();
            }
            break;
          case "ArrowRight":
          case "Enter":
          case " ":
            this.handleSubmenuEntry(event);
            break;
        }
      };
      this.handleClick = (event) => {
        var _a;
        if (event.target === this.host) {
          event.preventDefault();
          event.stopPropagation();
        } else if (event.target instanceof Element && (event.target.tagName === "sl-menu-item" || ((_a = event.target.role) == null ? void 0 : _a.startsWith("menuitem")))) {
          this.disableSubmenu();
        }
      };
      // Close this submenu on focus outside of the parent or any descendants.
      this.handleFocusOut = (event) => {
        if (event.relatedTarget && event.relatedTarget instanceof Element && this.host.contains(event.relatedTarget)) {
          return;
        }
        this.disableSubmenu();
      };
      // Prevent the parent menu-item from getting focus on mouse movement on the submenu
      this.handlePopupMouseover = (event) => {
        event.stopPropagation();
      };
      // Set the safe triangle values for the submenu when the position changes
      this.handlePopupReposition = () => {
        const submenuSlot = this.host.renderRoot.querySelector("slot[name='submenu']");
        const menu = submenuSlot == null ? void 0 : submenuSlot.assignedElements({ flatten: true }).filter((el) => el.localName === "sl-menu")[0];
        const isRtl = this.localize.dir() === "rtl";
        if (!menu) {
          return;
        }
        const { left, top, width, height } = menu.getBoundingClientRect();
        this.host.style.setProperty("--safe-triangle-submenu-start-x", `${isRtl ? left + width : left}px`);
        this.host.style.setProperty("--safe-triangle-submenu-start-y", `${top}px`);
        this.host.style.setProperty("--safe-triangle-submenu-end-x", `${isRtl ? left + width : left}px`);
        this.host.style.setProperty("--safe-triangle-submenu-end-y", `${top + height}px`);
      };
      (this.host = host).addController(this);
      this.hasSlotController = hasSlotController;
      this.localize = localize;
    }
    hostConnected() {
      if (this.hasSlotController.test("submenu") && !this.host.disabled) {
        this.addListeners();
      }
    }
    hostDisconnected() {
      this.removeListeners();
    }
    hostUpdated() {
      if (this.hasSlotController.test("submenu") && !this.host.disabled) {
        this.addListeners();
        this.updateSkidding();
      } else {
        this.removeListeners();
      }
    }
    addListeners() {
      if (!this.isConnected) {
        this.host.addEventListener("mousemove", this.handleMouseMove);
        this.host.addEventListener("mouseover", this.handleMouseOver);
        this.host.addEventListener("keydown", this.handleKeyDown);
        this.host.addEventListener("click", this.handleClick);
        this.host.addEventListener("focusout", this.handleFocusOut);
        this.isConnected = true;
      }
      if (!this.isPopupConnected) {
        if (this.popupRef.value) {
          this.popupRef.value.addEventListener("mouseover", this.handlePopupMouseover);
          this.popupRef.value.addEventListener("sl-reposition", this.handlePopupReposition);
          this.isPopupConnected = true;
        }
      }
    }
    removeListeners() {
      if (this.isConnected) {
        this.host.removeEventListener("mousemove", this.handleMouseMove);
        this.host.removeEventListener("mouseover", this.handleMouseOver);
        this.host.removeEventListener("keydown", this.handleKeyDown);
        this.host.removeEventListener("click", this.handleClick);
        this.host.removeEventListener("focusout", this.handleFocusOut);
        this.isConnected = false;
      }
      if (this.isPopupConnected) {
        if (this.popupRef.value) {
          this.popupRef.value.removeEventListener("mouseover", this.handlePopupMouseover);
          this.popupRef.value.removeEventListener("sl-reposition", this.handlePopupReposition);
          this.isPopupConnected = false;
        }
      }
    }
    handleSubmenuEntry(event) {
      const submenuSlot = this.host.renderRoot.querySelector("slot[name='submenu']");
      if (!submenuSlot) {
        console.error("Cannot activate a submenu if no corresponding menuitem can be found.", this);
        return;
      }
      let menuItems = null;
      for (const elt of submenuSlot.assignedElements()) {
        menuItems = elt.querySelectorAll("sl-menu-item, [role^='menuitem']");
        if (menuItems.length !== 0) {
          break;
        }
      }
      if (!menuItems || menuItems.length === 0) {
        return;
      }
      menuItems[0].setAttribute("tabindex", "0");
      for (let i = 1; i !== menuItems.length; ++i) {
        menuItems[i].setAttribute("tabindex", "-1");
      }
      if (this.popupRef.value) {
        event.preventDefault();
        event.stopPropagation();
        if (this.popupRef.value.active) {
          if (menuItems[0] instanceof HTMLElement) {
            menuItems[0].focus();
          }
        } else {
          this.enableSubmenu(false);
          this.host.updateComplete.then(() => {
            if (menuItems[0] instanceof HTMLElement) {
              menuItems[0].focus();
            }
          });
          this.host.requestUpdate();
        }
      }
    }
    setSubmenuState(state) {
      if (this.popupRef.value) {
        if (this.popupRef.value.active !== state) {
          this.popupRef.value.active = state;
          this.host.requestUpdate();
        }
      }
    }
    // Shows the submenu. Supports disabling the opening delay, e.g. for keyboard events that want to set the focus to the
    // newly opened menu.
    enableSubmenu(delay = true) {
      if (delay) {
        this.enableSubmenuTimer = window.setTimeout(() => {
          this.setSubmenuState(true);
        }, this.submenuOpenDelay);
      } else {
        this.setSubmenuState(true);
      }
    }
    disableSubmenu() {
      clearTimeout(this.enableSubmenuTimer);
      this.setSubmenuState(false);
    }
    // Calculate the space the top of a menu takes-up, for aligning the popup menu-item with the activating element.
    updateSkidding() {
      var _a;
      if (!((_a = this.host.parentElement) == null ? void 0 : _a.computedStyleMap)) {
        return;
      }
      const styleMap = this.host.parentElement.computedStyleMap();
      const attrs = ["padding-top", "border-top-width", "margin-top"];
      const skidding = attrs.reduce((accumulator, attr) => {
        var _a2;
        const styleValue = (_a2 = styleMap.get(attr)) != null ? _a2 : new CSSUnitValue(0, "px");
        const unitValue = styleValue instanceof CSSUnitValue ? styleValue : new CSSUnitValue(0, "px");
        const pxValue = unitValue.to("px");
        return accumulator - pxValue.value;
      }, 0);
      this.skidding = skidding;
    }
    isExpanded() {
      return this.popupRef.value ? this.popupRef.value.active : false;
    }
    renderSubmenu() {
      const isLtr = this.localize.dir() === "ltr";
      if (!this.isConnected) {
        return x` 
     `;
      }
      return x`
      
    
        
     
      
    
    `;
    }
  };

  // src/internal/slot.ts
  var HasSlotController = class {
    constructor(host, ...slotNames) {
      this.slotNames = [];
      this.handleSlotChange = (event) => {
        const slot = event.target;
        if (this.slotNames.includes("[default]") && !slot.name || slot.name && this.slotNames.includes(slot.name)) {
          this.host.requestUpdate();
        }
      };
      (this.host = host).addController(this);
      this.slotNames = slotNames;
    }
    hasDefaultSlot() {
      return [...this.host.childNodes].some((node) => {
        if (node.nodeType === node.TEXT_NODE && node.textContent.trim() !== "") {
          return true;
        }
        if (node.nodeType === node.ELEMENT_NODE) {
          const el = node;
          const tagName = el.tagName.toLowerCase();
          if (tagName === "sl-visually-hidden") {
            return false;
          }
          if (!el.hasAttribute("slot")) {
            return true;
          }
        }
        return false;
      });
    }
    hasNamedSlot(name) {
      return this.host.querySelector(`:scope > [slot="${name}"]`) !== null;
    }
    test(slotName) {
      return slotName === "[default]" ? this.hasDefaultSlot() : this.hasNamedSlot(slotName);
    }
    hostConnected() {
      this.host.shadowRoot.addEventListener("slotchange", this.handleSlotChange);
    }
    hostDisconnected() {
      this.host.shadowRoot.removeEventListener("slotchange", this.handleSlotChange);
    }
  };
  function getTextContent(slot) {
    if (!slot) {
      return "";
    }
    const nodes = slot.assignedNodes({ flatten: true });
    let text = "";
    [...nodes].forEach((node) => {
      if (node.nodeType === Node.TEXT_NODE) {
        text += node.textContent;
      }
    });
    return text;
  }

  var icon_styles_default = i$3`
  ${component_styles_default}

  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    box-sizing: content-box !important;
  }

  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`;

  // src/utilities/base-path.ts
  var basePath = "";
  function setBasePath(path) {
    basePath = path;
  }
  function getBasePath(subpath = "") {
    if (!basePath) {
      const scripts = [...document.getElementsByTagName("script")];
      const configScript = scripts.find((script) => script.hasAttribute("data-shoelace"));
      if (configScript) {
        setBasePath(configScript.getAttribute("data-shoelace"));
      } else {
        const fallbackScript = scripts.find((s) => {
          return /shoelace(\.min)?\.js($|\?)/.test(s.src) || /shoelace-autoloader(\.min)?\.js($|\?)/.test(s.src);
        });
        let path = "";
        if (fallbackScript) {
          path = fallbackScript.getAttribute("src");
        }
        setBasePath(path.split("/").slice(0, -1).join("/"));
      }
    }
    return basePath.replace(/\/$/, "") + (subpath ? `/${subpath.replace(/^\//, "")}` : ``);
  }

  // src/components/icon/library.default.ts
  var library = {
    name: "default",
    resolver: (name) => getBasePath(`assets/icons/${name}.svg`)
  };
  var library_default_default = library;

  // src/components/icon/library.system.ts
  var icons = {
    caret: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  `,
    check: `
    <svg part="checked-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor">
          <g transform="translate(3.428571, 3.428571)">
            <path d="M0,5.71428571 L3.42857143,9.14285714"></path>
            <path d="M9.14285714,0 L3.42857143,9.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,
    "chevron-down": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,
    "chevron-left": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
    </svg>
  `,
    "chevron-right": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,
    copy: `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V2Zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H6ZM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1H2Z"/>
    </svg>
  `,
    eye: `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
    </svg>
  `,
    "eye-slash": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
    </svg>
  `,
    eyedropper: `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">
      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>
    </svg>
  `,
    "grip-vertical": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">
      <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
    </svg>
  `,
    indeterminate: `
    <svg part="indeterminate-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor" stroke-width="2">
          <g transform="translate(2.285714, 6.857143)">
            <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,
    "person-fill": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
    </svg>
  `,
    "play-fill": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
    </svg>
  `,
    "pause-fill": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>
    </svg>
  `,
    radio: `
    <svg part="checked-icon" class="radio__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g fill="currentColor">
          <circle cx="8" cy="8" r="3.42857143"></circle>
        </g>
      </g>
    </svg>
  `,
    "star-fill": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
  `,
    "x-lg": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
    </svg>
  `,
    "x-circle-fill": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>
    </svg>
  `
  };
var systemLibrary = {
  name: "system",
  resolver: (name) => {
    if (name in icons) {
      return `data:image/svg+xml,${encodeURIComponent(icons[name])}`;
    }
    return "";
  }
};
var library_system_default = systemLibrary;

// src/components/icon/library.ts
var registry = [library_default_default, library_system_default];
var watchedIcons = [];
function watchIcon(icon) {
  watchedIcons.push(icon);
}
function unwatchIcon(icon) {
  watchedIcons = watchedIcons.filter((el) => el !== icon);
}
function getIconLibrary(name) {
  return registry.find((lib) => lib.name === name);
}

var CACHEABLE_ERROR = Symbol();
var RETRYABLE_ERROR = Symbol();
var parser;
var iconCache = /* @__PURE__ */ new Map();
var SlIcon = class extends ShoelaceElement {
  constructor() {
    super(...arguments);
    this.initialRender = false;
    this.svg = null;
    this.label = "";
    this.library = "default";
  }
  /** Given a URL, this function returns the resulting SVG element or an appropriate error symbol. */
  async resolveIcon(url, library) {
    var _a;
    let fileData;
    if (library == null ? void 0 : library.spriteSheet) {
      return x`<svg part="svg">
      <use part="use" href="${url}"></use>
    </svg>`;
    }
    try {
      fileData = await fetch(url, { mode: "cors" });
      if (!fileData.ok)
        return fileData.status === 410 ? CACHEABLE_ERROR : RETRYABLE_ERROR;
    } catch (e) {
      return RETRYABLE_ERROR;
    }
    try {
      const div = document.createElement("div");
      div.innerHTML = await fileData.text();
      const svg = div.firstElementChild;
      if (((_a = svg == null ? void 0 : svg.tagName) == null ? void 0 : _a.toLowerCase()) !== "svg")
        return CACHEABLE_ERROR;
      if (!parser)
        parser = new DOMParser();
      const doc = parser.parseFromString(svg.outerHTML, "text/html");
      const svgEl = doc.body.querySelector("svg");
      if (!svgEl)
        return CACHEABLE_ERROR;
      svgEl.part.add("svg");
      return document.adoptNode(svgEl);
    } catch (e) {
      return CACHEABLE_ERROR;
    }
  }
  connectedCallback() {
    super.connectedCallback();
    watchIcon(this);
  }
  firstUpdated() {
    this.initialRender = true;
    this.setIcon();
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    unwatchIcon(this);
  }
  getIconSource() {
    const library = getIconLibrary(this.library);
    if (this.name && library) {
      return {
        url: library.resolver(this.name),
        fromLibrary: true
      };
    }
    return {
      url: this.src,
      fromLibrary: false
    };
  }
  handleLabelChange() {
    const hasLabel = typeof this.label === "string" && this.label.length > 0;
    if (hasLabel) {
      this.setAttribute("role", "img");
      this.setAttribute("aria-label", this.label);
      this.removeAttribute("aria-hidden");
    } else {
      this.removeAttribute("role");
      this.removeAttribute("aria-label");
      this.setAttribute("aria-hidden", "true");
    }
  }
  async setIcon() {
    var _a;
    const { url, fromLibrary } = this.getIconSource();
    const library = fromLibrary ? getIconLibrary(this.library) : void 0;
    if (!url) {
      this.svg = null;
      return;
    }
    let iconResolver = iconCache.get(url);
    if (!iconResolver) {
      iconResolver = this.resolveIcon(url, library);
      iconCache.set(url, iconResolver);
    }
    if (!this.initialRender) {
      return;
    }
    const svg = await iconResolver;
    if (svg === RETRYABLE_ERROR) {
      iconCache.delete(url);
    }
    if (url !== this.getIconSource().url) {
      return;
    }
    if (e$1(svg)) {
      this.svg = svg;
      return;
    }
    switch (svg) {
      case RETRYABLE_ERROR:
      case CACHEABLE_ERROR:
        this.svg = null;
        this.emit("sl-error");
        break;
      default:
        this.svg = svg.cloneNode(true);
        (_a = library == null ? void 0 : library.mutator) == null ? void 0 : _a.call(library, this.svg);
        this.emit("sl-load");
    }
  }
  render() {
    return this.svg;
  }
  };
  SlIcon.styles = icon_styles_default;
  __decorateClass([
  r$1()
  ], SlIcon.prototype, "svg", 2);
  __decorateClass([
  n$2({ reflect: true })
  ], SlIcon.prototype, "name", 2);
  __decorateClass([
  n$2()
  ], SlIcon.prototype, "src", 2);
  __decorateClass([
  n$2()
  ], SlIcon.prototype, "label", 2);
  __decorateClass([
  n$2({ reflect: true })
  ], SlIcon.prototype, "library", 2);
  __decorateClass([
  watch("label")
  ], SlIcon.prototype, "handleLabelChange", 1);
  __decorateClass([
  watch(["name", "src", "library"])
  ], SlIcon.prototype, "setIcon", 1);

  var SlMenuItem = class extends ShoelaceElement {
  constructor() {
    super(...arguments);
    this.type = "normal";
    this.checked = false;
    this.value = "";
    this.disabled = false;
    this.localize = new LocalizeController(this);
    this.hasSlotController = new HasSlotController(this, "submenu");
    this.submenuController = new SubmenuController(this, this.hasSlotController, this.localize);
    this.handleHostClick = (event) => {
      if (this.disabled) {
        event.preventDefault();
        event.stopImmediatePropagation();
      }
    };
    this.handleMouseOver = (event) => {
      this.focus();
      event.stopPropagation();
    };
  }
  connectedCallback() {
    super.connectedCallback();
    this.addEventListener("click", this.handleHostClick);
    this.addEventListener("mouseover", this.handleMouseOver);
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener("click", this.handleHostClick);
    this.removeEventListener("mouseover", this.handleMouseOver);
  }
  handleDefaultSlotChange() {
    const textLabel = this.getTextLabel();
    if (typeof this.cachedTextLabel === "undefined") {
      this.cachedTextLabel = textLabel;
      return;
    }
    if (textLabel !== this.cachedTextLabel) {
      this.cachedTextLabel = textLabel;
      this.emit("slotchange", { bubbles: true, composed: false, cancelable: false });
    }
  }
  handleCheckedChange() {
    if (this.checked && this.type !== "checkbox") {
      this.checked = false;
      console.error('The checked attribute can only be used on menu items with type="checkbox"', this);
      return;
    }
    if (this.type === "checkbox") {
      this.setAttribute("aria-checked", this.checked ? "true" : "false");
    } else {
      this.removeAttribute("aria-checked");
    }
  }
  handleDisabledChange() {
    this.setAttribute("aria-disabled", this.disabled ? "true" : "false");
  }
  handleTypeChange() {
    if (this.type === "checkbox") {
      this.setAttribute("role", "menuitemcheckbox");
      this.setAttribute("aria-checked", this.checked ? "true" : "false");
    } else {
      this.setAttribute("role", "menuitem");
      this.removeAttribute("aria-checked");
    }
  }
  /** Returns a text label based on the contents of the menu item's default slot. */
  getTextLabel() {
    return getTextContent(this.defaultSlot);
  }
  isSubmenu() {
    return this.hasSlotController.test("submenu");
  }
  render() {
    const isRtl = this.localize.dir() === "rtl";
    const isSubmenuExpanded = this.submenuController.isExpanded();
    return x`
    <div
      id="anchor"
      part="base"
      class=${e$2({
    "menu-item": true,
    "menu-item--rtl": isRtl,
    "menu-item--checked": this.checked,
    "menu-item--disabled": this.disabled,
    "menu-item--has-submenu": this.isSubmenu(),
    "menu-item--submenu-expanded": isSubmenuExpanded
  })}
      ?aria-haspopup="${this.isSubmenu()}"
      ?aria-expanded="${isSubmenuExpanded ? true : false}"
    >
      <span part="checked-icon" class="menu-item__check">
        <sl-icon name="check" library="system" aria-hidden="true"></sl-icon>
      </span>

      <slot name="prefix" part="prefix" class="menu-item__prefix"></slot>

      <slot part="label" class="menu-item__label" @slotchange=${this.handleDefaultSlotChange}></slot>

      <slot name="suffix" part="suffix" class="menu-item__suffix"></slot>

      <span part="submenu-icon" class="menu-item__chevron">
        <sl-icon name=${isRtl ? "chevron-left" : "chevron-right"} library="system" aria-hidden="true"></sl-icon>
      </span>

      ${this.submenuController.renderSubmenu()}
    </div>
  `;
  }
  };
  SlMenuItem.styles = menu_item_styles_default;
  SlMenuItem.dependencies = {
  "sl-icon": SlIcon,
  "sl-popup": SlPopup
  };
  __decorateClass([
  e$4("slot:not([name])")
  ], SlMenuItem.prototype, "defaultSlot", 2);
  __decorateClass([
  e$4(".menu-item")
  ], SlMenuItem.prototype, "menuItem", 2);
  __decorateClass([
  n$2()
  ], SlMenuItem.prototype, "type", 2);
  __decorateClass([
  n$2({ type: Boolean, reflect: true })
  ], SlMenuItem.prototype, "checked", 2);
  __decorateClass([
  n$2()
  ], SlMenuItem.prototype, "value", 2);
  __decorateClass([
  n$2({ type: Boolean, reflect: true })
  ], SlMenuItem.prototype, "disabled", 2);
  __decorateClass([
  watch("checked")
  ], SlMenuItem.prototype, "handleCheckedChange", 1);
  __decorateClass([
  watch("disabled")
  ], SlMenuItem.prototype, "handleDisabledChange", 1);
  __decorateClass([
  watch("type")
  ], SlMenuItem.prototype, "handleTypeChange", 1);

  SlMenuItem.define("sl-menu-item");

  var menu_label_styles_default = i$3`
  ${component_styles_default}

  :host {
  display: block;
  }

  .menu-label {
  display: inline-block;
  font-family: var(--sl-font-sans);
  font-size: var(--sl-font-size-small);
  font-weight: var(--sl-font-weight-semibold);
  line-height: var(--sl-line-height-normal);
  letter-spacing: var(--sl-letter-spacing-normal);
  color: var(--sl-color-neutral-500);
  padding: var(--sl-spacing-2x-small) var(--sl-spacing-x-large);
  user-select: none;
  -webkit-user-select: none;
  }
  `;

  var SlMenuLabel = class extends ShoelaceElement {
  render() {
    return x` <slot part="base" class="menu-label"></slot> `;
  }
  };
  SlMenuLabel.styles = menu_label_styles_default;

  SlMenuLabel.define("sl-menu-label");

  SlIcon.define("sl-icon");

  var divider_styles_default = i$3`
  ${component_styles_default}

  :host {
  --color: var(--sl-panel-border-color);
  --width: var(--sl-panel-border-width);
  --spacing: var(--sl-spacing-medium);
  }

  :host(:not([vertical])) {
  display: block;
  border-top: solid var(--width) var(--color);
  margin: var(--spacing) 0;
  }

  :host([vertical]) {
  display: inline-block;
  height: 100%;
  border-left: solid var(--width) var(--color);
  margin: 0 var(--spacing);
  }
  `;

  var SlDivider = class extends ShoelaceElement {
  constructor() {
    super(...arguments);
    this.vertical = false;
  }
  connectedCallback() {
    super.connectedCallback();
    this.setAttribute("role", "separator");
  }
  handleVerticalChange() {
    this.setAttribute("aria-orientation", this.vertical ? "vertical" : "horizontal");
  }
  };
  SlDivider.styles = divider_styles_default;
  __decorateClass([
  n$2({ type: Boolean, reflect: true })
  ], SlDivider.prototype, "vertical", 2);
  __decorateClass([
  watch("vertical")
  ], SlDivider.prototype, "handleVerticalChange", 1);

  SlDivider.define("sl-divider");

  var img$3 = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-fast-forward-btn' viewBox='0 0 16 16'%3e %3cpath d='M8.79 5.093A.5.5 0 0 0 8 5.5v1.886L4.79 5.093A.5.5 0 0 0 4 5.5v5a.5.5 0 0 0 .79.407L8 8.614V10.5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5Z'/%3e %3cpath d='M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4Z'/%3e%3c/svg%3e";

  var img$2 = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-image' viewBox='0 0 16 16'%3e %3cpath d='M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z'/%3e %3cpath d='M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z'/%3e%3c/svg%3e";

  var img$1 = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-list' viewBox='0 0 16 16'%3e %3cpath fill-rule='evenodd' d='M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z'/%3e%3c/svg%3e";

  var img = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-download' viewBox='0 0 16 16'%3e %3cpath d='M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z'/%3e %3cpath d='M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z'/%3e%3c/svg%3e";

  const faq = [
    {
      title: 'Why is my learning progress not changing when I take classes at twice the speed',
      action: 'openDocsLink',
      lang: ['zh'],
      args: '/home/q&a#%E5%80%8D%E9%80%9F%E5%88%B7%E8%AF%BE%E4%B8%BA%E5%95%A5%E5%AD%A6 %E4%B9%A0%E8%BF%9B%E5%BA%A6%E6%B2%A1%E5%8F%98%E5%8C%96'
    },
    {
      title: 'Baidu network disk video cannot be played at double speed',
      action: 'openDocsLink',
      lang: ['zh'],
      args: '/home/q&a#%E7%99%BE%E5%BA%A6%E7%BD%91%E7%9B%98%E8%A7%86%E9%A2%91%E6%97%A0 %E6%B3%95%E5%80%8D%E9%80%9F%E6%92%AD%E6%94%BE'
    },
    {
      title: 'Speed ​​playback is laggy, there is no progress, and the audio and video are out of sync',
      action: 'openDocsLink',
      lang: ['zh'],
      args: '/home/q&a#%E5%80%8D%E9%80%9F%E6%92%AD%E6%94%BE%E5%8D%A1%E9%A1%BF%E3%80%81 %E6%97%A0%E8%BF%9B%E5%BA%A6%E3%80%81%E9%9F%B3%E7%94%BB%E4%B8%8D%E5%90%8C%E6 %AD%A5'
    },
    {
      title: 'Playback is stuttering, has no progress, or is out of sync',
      action: 'openDocsLink',
      lang: ['en', 'ru'],
      args: '/home/q&a#playback-is-stuttering-has-no-progress-or-is-out-of-sync'
    },
    {
      title: 'How to support double-speed playback of local video files',
      action: 'openDocsLink',
      lang: ['zh'],
      args: '/home/q&a#%E5%A6%82%E4%BD%95%E6%94%AF%E6%8C%81%E6%9C%AC%E5%9C%B0%E8%A7%86 %E9%A2%91%E6%96%87%E4%BB%B6%E7%9A%84%E5%80%8D%E9%80%9F%E6%92%AD%E6%94%BE'
    },
    {
      title: 'How can I support speed playback for local video files?',
      action: 'openDocsLink',
      lang: ['en', 'ru'],
      args: '/home/q&a#how-can-i-support-speed-playback-for-local-video-files'
    },
    {
      itle: 'The site\'s own speed control fails after enabling the plugin',
      action: 'openDocsLink',
      lang: ['en', 'ru'],
      args: '/home/q&a#the-site-s-own-speed-control-fails-after-enabling-the-plugin'
    },
    {
      title: 'The site\'s own speed control fails after enabling the plugin',
      action: 'openDocsLink',
      lang: ['en', 'ru'],
      args: '/home/q&a#the-site-s-own-speed-control-fails-after-enabling-the-plugin'
    },
    {
      title: 'Why are video and audio downloaded separately',
      action: 'openDocsLink',
      lang: ['zh'],
      args: '/home/q&a#%E4%B8%BA%E4%BB%80%E4%B9%88%E8%A7%86%E9%A2%91%E8%B7%9F%E9%9F%B3 %E9%A2%91%E6%98%AF%E5%88%86%E5%BC%80%E4%B8%8B%E8%BD%BD%E7%9A%84'
    },
    {
      title: 'Why are video and audio downloaded separately?',
      action: 'openDocsLink',
      lang: ['en', 'ru'],
      args: '/home/q&a#why-are-video-and-audio-downloaded-separately'
    },
    {
      title: 'How to merge downloaded audio and video files',
      action: 'openDocsLink',
      lang: ['zh'],
      args: '/home/q&a#%E5%A6%82%E4%BD%95%E5%90%88%E5%B9%B6%E4%B8%8B%E8%BD%BD%E5%88%B0 %E7%9A%84%E9%9F%B3%E8%A7%86%E9%A2%91%E6%96%87%E4%BB%B6'
    },
    {
      title: 'How to merge downloaded audio and video files',
      action: 'openDocsLink',
      lang: ['en', 'ru'],
      args: '/home/q&a#how-to-merge-downloaded-audio-and-video-files'
    },
    {
      title: 'Why do video screenshots appear inconsistent on different websites',
      action: 'openDocsLink',
      lang: ['zh'],
      args: '/home/q&a#%E4%B8%BA%E4%BB%80%E4%B9%88%E8%A7%86%E9%A2%91%E6%88%AA%E5%9B%BE%E4%B8%8D%E5%90%8C%E7%BD%91%E7%AB%99%E8%A1%A8%E7%8E%B0%E4%B8%8D%E4%B8%80%E8%87%B4'
    },
    {
      title: 'Why is video screenshot functionality inconsistent across websites?',
      action: 'openDocsLink',
      lang: ['en', 'ru'],
      args: '/home/q&a#why-is-video-screenshot-functionality-inconsistent-across-websites'
    },
    {
      title: 'How to disable or customize shortcut keys',
      action: 'openDocsLink',
      lang: ['zh'],
      args: '/home/q&a#%E5%A6%82%E4%BD%95%E7%A6%81%E7%94%A8%E6%88%96%E8%87%AA%E5%AE%9A %E4%B9%89%E5%BF%AB%E6%8D%B7%E9%94%AE'
    },
    {
      title: 'How to Disable or Customize Shortcut Keys',
      action: 'openDocsLink',
      lang: ['en', 'ru'],
      args: '/home/q&a#how-to-disable-or-customize-shortcut-keys'
    }
  ];

  const { i18n, debug: debug$1, globalFunctional, configManager: configManager$1 } = window.h5playerUIProvider;
  const isGlobalStorageUsable = configManager$1.isGlobalStorageUsable();

  const menuConfig = [
    {
      title: i18n.t('download'),
      desc: i18n.t('download'),
      icon: img,
      action: 'mediaDownload',
      args: null
    },
    {
      title: i18n.t('capture'),
      desc: i18n.t('capture'),
      icon: img$2,
      action: 'capture',
      args: null
    },
    {
      title: i18n.t('speed'),
      desc: i18n.t('speed'),
      icon: img$3,
      dropdownMenu: [
        {
          title: '0.5x',
          desc: '0.5x',
          action: 'setPlaybackRate',
          args: 0.5
        },
        {
          title: '0.75x',
          desc: '0.75x',
          action: 'setPlaybackRate',
          args: 0.75
        },
        {
          title: '1.0x',
          desc: '1.0x',
          action: 'setPlaybackRate',
          args: 1
        },
        {
          title: '1.25x',
          desc: '1.25x',
          action: 'setPlaybackRate',
          args: 1.25
        },
        {
          title: '1.5x',
          desc: '1.5x',
          action: 'setPlaybackRate',
          args: 1.5
        },
        {
          title: '2.0x',
          desc: '2.0x',
          action: 'setPlaybackRate',
          args: 2
        },
        {
          title: '3.0x',
          desc: '3.0x',
          action: 'setPlaybackRate',
          args: 3
        },
        {
          title: '4.0x',
          desc: '4.0x',
          action: 'setPlaybackRate',
          args: 4
        },
        {
          title: '8.0x',
          desc: '8.0x',
          action: 'setPlaybackRate',
          args: 8
        },
        {
          title: '16.0x',
          desc: '16.0x',
          action: 'setPlaybackRate',
          args: 16
        }
      ]
    },
    {
      title: i18n.t('menu'),
      desc: i18n.t('menu'),
      icon: img$1,
      dropdownMenu: [
        {
          title: i18n.t('graphicalInterface'),
          desc: i18n.t('graphicalInterface'),
          subMenu: [
            {
              title: i18n.t('disableCurrentInstanceGUI'),
              desc: i18n.t('disableCurrentInstanceGUI'),
              action: 'disableCurrentInstanceGUI',
              args: null
            },
            {
              title: i18n.t('disableGUITemporarily'),
              desc: i18n.t('disableGUITemporarily'),
              action: 'disableGUITemporarily',
              args: null
            },
            {
              ...globalFunctional.toggleGUIStatusUnderCurrentSite,
              action: 'toggleGUIStatusUnderCurrentSite',
              args: null
            },
            {
              ...globalFunctional.alwaysShowGraphicalInterface,
              action: 'alwaysShowGraphicalInterface',
              args: null,
              disabled: !debug$1.isDebugMode() || !isGlobalStorageUsable
            }
          ]
        },
        {
          title: i18n.t('videoFilter'),
          desc: i18n.t('videoFilter'),
          subMenu: [
            {
              title: i18n.t('resetFilterAndTransform'),
              desc: i18n.t('resetFilterAndTransform'),
              action: 'resetFilterAndTransform',
              args: null
            },
            {
              title: i18n.t('brightnessUp'),
              desc: i18n.t('brightnessUp'),
              action: 'setBrightnessUp',
              args: 0.1
            },
            {
              title: i18n.t('brightnessDown'),
              desc: i18n.t('brightnessDown'),
              action: 'setBrightnessDown',
              args: -0.1
            },
            {
              title: i18n.t('contrastUp'),
              desc: i18n.t('contrastUp'),
              action: 'setContrastUp',
              args: 0.1
            },
            {
              title: i18n.t('contrastDown'),
              desc: i18n.t('contrastDown'),
              action: 'setContrastDown',
              args: -0.1
            },
            {
              title: i18n.t('saturationUp'),
              desc: i18n.t('saturationUp'),
              action: 'setSaturationUp',
              args: 0.1
            },
            {
              title: i18n.t('saturationDown'),
              desc: i18n.t('saturationDown'),
              action: 'setSaturationDown',
              args: -0.1
            },
            {
              title: i18n.t('hueUp'),
              desc: i18n.t('hueUp'),
              action: 'setHueUp',
              args: 1
            },
            {
              title: i18n.t('hueDown'),
              desc: i18n.t('hueDown'),
              action: 'setHueDown',
              args: -1
            },
            {
              title: i18n.t('blurUp'),
              desc: i18n.t('blurUp'),
              action: 'setBlurUp',
              args: 1
            },
            {
              title: i18n.t('blurDown'),
              desc: i18n.t('blurDown'),
              action: 'setBlurDown',
              args: -1
            }
          ]
        },
        {
          title: i18n.t('rotateAndMirror'),
          desc: i18n.t('rotateAndMirror'),
          action: 'rotateAndMirror',
          subMenu: [
            {
              title: i18n.t('rotate90'),
              desc: i18n.t('rotate90'),
              action: 'setRotate',
              args: null
            },
            {
              title: i18n.t('horizontalMirror'),
              desc: i18n.t('horizontalMirror'),
              action: 'setMirror',
              args: null
            },
            {
              title: i18n.t('verticalMirror'),
              desc: i18n.t('verticalMirror'),
              action: 'setMirror',
              args: true
            }
          ]
        },
        {
          title: i18n.t('videoTransform'),
          desc: i18n.t('videoTransform'),
          action: 'translate',
          subMenu: [
            {
              title: i18n.t('translateRight'),
              desc: i18n.t('translateRight'),
              action: 'setTranslateRight',
              args: null
            },
            {
              title: i18n.t('translateLeft'),
              desc: i18n.t('translateLeft'),
              action: 'setTranslateLeft',
              args: null
            },
            {
              title: i18n.t('translateUp'),
              desc: i18n.t('translateUp'),
              action: 'setTranslateUp',
              args: null
            },
            {
              title: i18n.t('translateDown'),
              desc: i18n.t('translateDown'),
              action: 'setTranslateDown',
              args: null
            }
          ]
        },
        {
          title: i18n.t('moreActions'),
          desc: i18n.t('moreActions'),
          subMenu: [
            {
              title: 'Clean remote helper info',
              desc: 'Clean remote helper info',
              action: 'cleanRemoteHelperInfo',
              disabled: !debug$1.isDebugMode()
            },
            {
              title: 'Print Player info',
              desc: 'Print Player info',
              action: 'printPlayerInfo',
              disabled: !debug$1.isDebugMode()
            },
            {
              ...globalFunctional.openCustomConfigurationEditor,
              action: 'openCustomConfigurationEditor',
              args: null,
              disabled: true
            },
            {
              title: i18n.t('comingSoon'),
              desc: i18n.t('comingSoon')
            }
          ]
        },
        {
          divider: true
        },
        {
          title: i18n.t('keyboardControl'),
          desc: i18n.t('keyboardControl'),
          subMenu: [
            {
              ...globalFunctional.openHotkeysPage,
              action: 'openHotkeysPage',
              args: ''
            },
            {
              title: i18n.t('toggleHotkeysTemporarily'),
              desc: i18n.t('toggleHotkeysTemporarily'),
              action: 'toggleHotkeys'
            },
            {
              ...globalFunctional.toggleHotkeysStatusUnderCurrentSite,
              action: 'toggleHotkeysStatusUnderCurrentSite'
            },
            {
              ...globalFunctional.toggleHotkeysStatus,
              action: 'toggleHotkeysStatus',
              disabled: !isGlobalStorageUsable
            }
          ]
        },
        {
          title: i18n.t('mouseControl'),
          desc: i18n.t('mouseControl'),
          subMenu: [
            {
              ...globalFunctional.setMouseLongPressTime,
              action: 'setMouseLongPressTime'
            },
            {
              ...globalFunctional.toggleMouseControlUnderCurrentSite,
              action: 'toggleMouseControlUnderCurrentSite'
            },
            {
              ...globalFunctional.toggleMouseControl,
              action: 'toggleMouseControl',
              disabled: !isGlobalStorageUsable
            },
            {
              title: i18n.t('comingSoon'),
              desc: i18n.t('comingSoon')
            }
          ]
        },
        {
          title: i18n.t('mediaDownload.downloadOptions'),
          desc: i18n.t('mediaDownload.downloadOptions'),
          subMenu: [
            {
              ...globalFunctional.toggleDownloadControlUnderCurrentSite,
              action: 'toggleDownloadControlUnderCurrentSite'
            },
            {
              ...globalFunctional.toggleDownloadControl,
              action: 'toggleDownloadControl',
              disabled: !isGlobalStorageUsable
            },
            {
              title: `${i18n.t('toggleStates')} ${i18n.t('autoGotoBufferedTime')}`,
              desc: `${i18n.t('toggleStates')} ${i18n.t('autoGotoBufferedTime')}`,
              action: 'toggleAutoGotoBufferedTime'
            },
            {
              title: i18n.t('ffmpegScript'),
              desc: i18n.t('ffmpegScript'),
              url: 'https://u.anzz.top/ffmpegscript'
            }
          ]
        },
        {
          title: i18n.t('faq'),
          desc: i18n.t('faq'),
          subMenu: faq
        },
        {
          title: i18n.t('setting'),
          desc: i18n.t('setting'),
          subMenu: [
            {
              ...globalFunctional.openCustomConfigurationEditor,
              action: 'openCustomConfigurationEditor',
              args: ''
            },
            {
              ...globalFunctional.restoreGlobalConfiguration,
              action: 'restoreGlobalConfiguration',
              args: '',
              disabled: !isGlobalStorageUsable
            },
            {
              ...globalFunctional.toggleScriptEnableState,
              action: 'toggleScriptEnableState',
              args: null
            },
            {
              ...globalFunctional.toggleSetCurrentTimeFunctional,
              action: 'toggleSetCurrentTimeFunctional',
              args: ''
            },
            {
              ...globalFunctional.toggleSetVolumeFunctional,
              action: 'toggleSetVolumeFunctional',
              args: ''
            },
            {
              ...globalFunctional.toggleGUIStatus,
              action: 'toggleGUIStatus',
              args: null,
              disabled: !isGlobalStorageUsable
            },
            {
              ...globalFunctional.toggleSetPlaybackRateFunctional,
              action: 'toggleSetPlaybackRateFunctional',
              args: '',
              disabled: !isGlobalStorageUsable
            },
            {
              ...globalFunctional.toggleAcousticGainFunctional,
              action: 'toggleAcousticGainFunctional',
              args: '',
              disabled: !isGlobalStorageUsable
            },
            {
              ...globalFunctional.toggleCrossOriginControlFunctional,
              action: 'toggleCrossOriginControlFunctional',
              args: '',
              disabled: !isGlobalStorageUsable
            },
            {
              ...globalFunctional.toggleExperimentFeatures,
              action: 'toggleExperimentFeatures',
              args: '',
              disabled: !isGlobalStorageUsable
            },
            {
              ...globalFunctional.toggleExternalCustomConfiguration,
              action: 'toggleExternalCustomConfiguration',
              args: '',
              disabled: !isGlobalStorageUsable
            },
            {
              ...globalFunctional.toggleDebugMode,
              action: 'toggleDebugMode',
              args: '',
              disabled: !isGlobalStorageUsable
            },
            {
              title: `${i18n.t('languageSettings')}「${i18n.t('globalSetting')}」`,
              desc: `${i18n.t('languageSettings')}「${i18n.t('globalSetting')}」`,
              disabled: !isGlobalStorageUsable,
              subMenu: [
                {
                  title: i18n.t('autoChoose'),
                  desc: i18n.t('autoChoose'),
                  action: 'setLanguage',
                  args: 'auto'
                },
                {
                  title: 'Simplified Chinese',
                  desc: 'Simplified Chinese',
                  action: 'setLanguage',
                  args: 'zh-CN'
                },
                {
                  title: '繁體中文',
                  desc: '繁體中文',
                  action: 'setLanguage',
                  args: 'zh-TW'
                },
                {
                  title: 'English',
                  desc: 'English',
                  action: 'setLanguage',
                  args: 'en-US'
                },
                {
                  title: 'Russian',
                  desc: 'Russian',
                  action: 'setLanguage',
                  args: 'ru'
                }
              ]
            }
          ]
        },
        {
          title: i18n.t('about'),
          desc: i18n.t('about'),
          subMenu: [
            {
              ...globalFunctional.openWebsite,
              action: 'openWebsite',
              args: ''
            },
            {
              ...globalFunctional.openProjectGithub,
              action: 'openProjectGithub',
              args: ''
            },
            {
              ...globalFunctional.openIssuesPage,
              action: 'openIssuesPage',
              args: ''
            },
            {
              ...globalFunctional.openAddGroupChatPage,
              action: 'openAddGroupChatPage',
              args: ''
            },
            {
              ...globalFunctional.openChangeLogPage,
              action: 'openChangeLogPage',
              args: ''
            },
            {
              ...globalFunctional.openCheckVersionPage,
              action: 'openCheckVersionPage',
              args: ''
            },
            {
              ...globalFunctional.openDonatePage,
              action: 'openDonatePage',
              args: ''
            },
            {
              ...globalFunctional.openAboutDonatePage,
              action: 'openAboutDonatePage',
              args: ''
            },
            {
              ...globalFunctional.openAuthorHomePage,
              action: 'openAuthorHomePage',
              args: ''
            }
          ]
        },
        {
          title: i18n.t('more'),
          desc: i18n.t('more'),
          disabled: true,
          subMenu: [
            {
              title: i18n.t('ffmpegScript'),
              desc: i18n.t('ffmpegScript'),
              url: 'https://u.anzz.top/ffmpegscript'
            }
          ]
        }
      ]
    }
  ];

  /* menuConfig preprocessing function, based on the specified reference DOM element, determines whether to display only the menu icon by judging the width of the element to save display space*/
  function menuConfigPreprocess (menuConfig, refDom) {
    const refWidth = refDom.offsetWidth;
    const iconOnly = refWidth < 500;

    return menuConfig.map(item => {
      if (item.dropdownMenu) {
        item.dropdownMenu = menuConfigPreprocess(item.dropdownMenu, refDom);
      }

      return {
        ...item,
        iconOnly
      }
    })
  }

  /* Write a function to support building the data of menuConfig.dropdownMenu into the template of sl-menu component */
  function convertDropdownMenuToTemplate (dropdownMenu, isRootMenu = true) {
    const menuItems = dropdownMenu.map(item => {
      if (item.disabled) return ''

      const lang = item.lang || item.language || item.languages;
      if (lang && !i18n.isMatchCurLang(lang)) return ''

      const title = (item.title instanceof Function ? item.title() : item.title) || '';
      const desc = (item.desc instanceof Function ? item.desc() : item.desc) || '';
      const id = item.id || Math.random().toString(36).substr(2);

      if (item.subMenu) {
        return `
        <sl-menu-item class="h5p-menu-action" value="${id}" title="${desc || title}" data-action="${item.action || ''}" data-args='${JSON.stringify(item.args || null)}'>
          ${title}
          <sl-menu slot="submenu">
            ${convertDropdownMenuToTemplate(item.subMenu, false)}
          </sl-menu>
        </sl-menu-item>
      `
      } else if (item.divider) {
        return '<sl-divider></sl-divider>'
      } else {
        return `<sl-menu-item class="h5p-menu-action" value="${id}" title="${desc || title}" data-action="${item.action || ''}" data-args='${JSON.stringify(item.args || null)}' data-url="${item.url || ''}">
        ${title}
      </sl-menu-item>
      `
      }
    }).join('');

    return isRootMenu ? `<sl-menu>${menuItems}</sl-menu>` : menuItems
  }

  /* Write a function that can convert menuConfig into template for output*/
  function convertMenuConfigToTemplate (menuConfig) {
    return `
  <div class="h5p-action-mod">
      ${menuConfig.map(item => {
        if (item.disabled) return ''

        const lang = item.lang || item.language || item.languages;
        if (lang && !i18n.isMatchCurLang(lang)) return ''

        const title = (item.title instanceof Function ? item.title() : item.title) || '';
        const desc = (item.desc instanceof Function ? item.desc() : item.desc) || '';
        const iconHtml = item.icon ? `<sl-icon src="${item.icon}"></sl-icon>` : '';
        const menuDesc = item.iconOnly && iconHtml ? '' : `<span class="h5p-desc">${title}</span>`;

        if (item.dropdownMenu) {
          return `
            <sl-dropdown distance="6">
              <span slot="trigger" class="h5p-action-btn" title="${desc || title}" data-title="${title}" data-action="${item.action || ''}">
                ${iconHtml}
                ${menuDesc}
              </span>
              ${convertDropdownMenuToTemplate(item.dropdownMenu)}
            </sl-dropdown>
          `
        } else {
          return `
            <span class="h5p-action-btn h5p-menu-action" title="${desc || title}" data-title="${title}" data-action="${item.action || ''}" data-args='${JSON.stringify(item.args || null)}'>
              ${iconHtml}
              ${menuDesc}
            </span>
          `
        }
      }).join('')
    } 
  </div>
  `
  }

  function createMenuTemplate (config = menuConfig || []) {
    return convertMenuConfigToTemplate(config)
  }

  function createLogoModTemplate () {
    const homepage = globalFunctional.getHomePageLink.fn();
    return `<a class="h5p-logo-mod" href="${homepage}" target="_blank">h5player</a>`
  }

  const defaultRecommendList = [
    {
      title: '[h5player] User Manual',
      url: 'https://u.anzz.top/h5pmanual',
      priority: 99,
      i18n: {
        en: {
          title: '【h5player】User Manual'
        }
      }
    },
    {
      title: '[h5player] One-click audio and video merging tool, no need for secondary encoding',
      desc: 'Automatically merge the audio and video files downloaded by h5player into one file without secondary encoding and can be quickly merged',
      url: 'https://u.anzz.top/ffmpegscript',
      i18n: {
        en: {
          title: '【h5player】Audio and video merge tool, no secondary coding required',
          desc: 'Automatically merge the audio and video files downloaded by h5player into one file without secondary coding, which can be quickly merged'
        }
      }
    },
    {
      title: '[Hello-AI] It is not AI that will steal your job, but the people who master the use of AI tools',
      url: 'https://u.anzz.top/ai',
      i18n: {
        en: {
          title: '【Hello-AI】It\'s not AI that takes away your job, but the person who knows how to use AI tools'
        }
      }
    }
  ];

  function createRecommendModTemplate (refDom) {
    const refWidth = refDom.offsetWidth;
    if (refWidth < 500) { return '' }

    let recommendList = configManager$1.getGlobalStorage('recommendList') || defaultRecommendList;
    recommendList = recommendList.filter(item => !item.disabled);

    const curLang = i18n.language() || '';
    /* Compatible with various possible language configuration writing methods*/
    const curLang2 = curLang.replace('-', '');
    const curLang3 = curLang.replace('-', '_');
    const curLang4 = curLang.split('-')[0];

    /* Filter out the recommendList that matches the current language based on the current language and the languages ​​configuration of recommendList */
    recommendList = recommendList.filter(item => {
      const lang = item.lang || item.language || item.languages;
      if (just) {
        return i18n.isMatchCurLang(lang)
      } else {
        return true
      }
    });

    if (!recommendList.length) { return '' }

    /* Randomly select 5 data from recommendList, and do not display the remaining ones*/
    if (recommendList.length > 5) { recommendList = recommendList.sort(() => Math.random() - 0.5).slice(0, 5); }

    /* Sort by the priority field in recommendList, the larger the priority value, the higher the priority value*/
    recommendList = recommendList.sort((a, b) => (b.priority || 0) - (a.priority || 0));

    const recommendHtml = recommendList.map(item => {
      let title = item.title || '';
      let desc = item.desc || '';
      let url = item.url || '';

      if (item.i18n) {
        const i18nInfo = item.i18n[`${curLang}`] || item.i18n[`${curLang2}`] || item.i18n[`${curLang3}`] || item.i18n[`${curLang4}`];
        if (i18nInfo) {
          title = i18nInfo.title || title;
          desc = i18nInfo.desc || desc
          url = i18nInfo.url || url;
        }
      }

      return `
    ${title}`
    }).join('');

    return `
    
${recommendHtml}
    
`
  }

  /**
   * Register the Recommend switching logic, check every 4 seconds which h5p-recommend-item has h5p-recommend-item__active, then switch h5p-recommend-item__active to the next element, and so on
   * Stop switching when the mouse moves to recommendWrap, and continue switching after moving away
   */
  function registerRecommendModToggle (recommendWrap, reRender) {
    if (!reRender && (!recommendWrap || recommendWrap.__h5pRecommendModRegistered__)) { return }

    let recommendIndex = 0;
    recommendWrap.__stopToggle__ = false;

    const toggleRecommend = () => {
      if (recommendWrap.__stopToggle__) { return }
      const recommendItems = recommendWrap.querySelectorAll('.h5p-recommend-item');
      recommendItems.forEach((item, index) => {
        if (index === recommendIndex) {
          item.classList.add('h5p-recommend-item__active');
        } else {
          item.classList.remove('h5p-recommend-item__active');
        }
      });

      recommendIndex = (recommendIndex + 1) % recommendItems.length;
    };

    toggleRecommend();

    clearInterval(recommendWrap.__h5pRecommendModInterval__);
    recommendWrap.__h5pRecommendModInterval__ = setInterval(toggleRecommend, 3000);
    if (!reRender) {
      recommendWrap.addEventListener('mouseenter', () => { recommendWrap.__stopToggle__ = true; });
      recommendWrap.addEventListener('mouseleave', () => { recommendWrap.__stopToggle__ = false; });
    }

    recommendWrap.__h5pRecommendModRegistered__ = true;
  }

  /**
   * Handle menu click events through event delegation to reduce event binding and improve performance
   * @param { Event } event - required event object
   */
  function menuActionHandler (obj) {
    const { event, h5Player, h5playerUI, videoElement, popup, actionCallback } = obj;
    const target = event.target;

    /* Check if the target contains the data-action attribute. Note that you may need to use closest to search upwards*/
    const actionDOM = target.closest('.h5p-menu-action');
    if (!actionDOM) {
      debug$1.log('[menuActionHandler]', 'actionDOM not found', event.target);
      return
    }

    const action = actionDOM.getAttribute('data-action');
    const args = JSON.parse(actionDOM.getAttribute('data-args') || null);
    const url = actionDOM.getAttribute('data-url');

    if (url) {
      globalFunctional.openInTab(url);
      return
    }

    h5Player.setPlayerInstance(videoElement);

    if (action === 'disableGUITemporarily') {
      h5playerUI.disableGUITemporarily();
      debug$1.log('[menuActionHandler][disableGUITemporarily]');
      return
    }

    if (action && (h5Player[action] instanceof Function || globalFunctional[action])) {
      // debug.log('[menuActionHandler]', actionDOM, action, args)

      try {
        if (action === 'setPlaybackRate') {
          /* Use UI operations to forcibly skip the lock detection logic*/
          h5Player.setPlaybackRate(args, false, false, true);
        } else if (globalFunctional[action] && globalFunctional[action].fn instanceof Function) {
          globalFunctional[action].fn(args);
        } else {
          h5Player[action](args);
          popup && popup.reposition();
        }
      } catch (e) {
        debug$1.error('[menuActionHandler][error]', e);
      }

      if (actionCallback instanceof Function) {
        actionCallback(action, args);
      }
    }
  }

  // https://shoelace.style/getting-started/installation#bundling

  if (!window.h5playerUIProvider) {
    throw new Error('h5playerUIProvider is not defined, please check if you have imported h5playerUIProvider.js')
  }

  const { debug, parseHTML, observeVisibility, isOutOfDocument, configManager, device } = window.h5playerUIProvider;

  const popupWrapObjs = {};

  function removePopupWrapById (popupWrapId) {
    const popupWrap = document.querySelector(`#${popupWrapId}`);
    if (popupWrap) {
      popupWrap.remove();
    }

    delete popupWrapObjs[popupWrapId];
  }

  function removePopupWrapByElement (element) {
    if (!element) { return false }
    const popupWrapId = element.getAttribute('data-popup-wrap-id');
    if (popupWrapId) { removePopupWrapById(popupWrapId); }
  }

  /* Traverse popupWrapObjs, if the offsetParent of the element in popupWrapObjs is null, remove it*/
  function cleanPopupWrap () {
    const popupWrapIds = Object.keys(popupWrapObjs);
    popupWrapIds.forEach(popupWrapId => {
      const element = popupWrapObjs[popupWrapId];
      if (isOutOfDocument(element)) {
        removePopupWrapById(popupWrapId);
      }
    });
  }

  function getAllPopupWrapElement () {
    return document.querySelectorAll('.h5player-popup-wrap')
  }

  function findPopupWrapWithElement (videoElement) {
    const result = [];
    const popupWrapIds = Object.keys(popupWrapObjs);
    popupWrapIds.forEach(popupWrapId => {
      const element = popupWrapObjs[popupWrapId];
      if (element === videoElement) {
        result.push(popupWrapId);
      }
    });

    return result.map(id => document.querySelector(`#${id}`))
  }

  const h5playerUI = {
    async init () {
      debug.log('h5playerUI init');

      /* Insert component related styles */
      document.adoptedStyleSheets = [...document.adoptedStyleSheets, sheet];
    },

    disableGUITemporarily () {
      this.__disableGUITemporarily__ = true;
      const popupWrapIds = Object.keys(popupWrapObjs);
      popupWrapIds.forEach(popupWrapId => {
        removePopupWrapById(popupWrapId);
      });
    },

    getAllPopupWrapElement,
    findPopupWrapWithElement,
    cleanPopupWrap,
    removePopupWrapById,
    removePopupWrapByElement,

    popup (element, h5Player) {
      if (this.__disableGUITemporarily__ || element.__disableGUITemporarily__) { return false }

      /* If the aspect ratio of the element is greater than 2.5, it may be a video background, and the popup will not be displayed */
      if (element.videoWidth / element.videoHeight > 2.5) { return false }

      /* Prevent popup rendering too frequently */
      if (this.lastRenderedPopupTime && Date.now() - this.lastRenderedPopupTime < 100) {
        return false
      } else {
        this.lastRenderedPopupTime = Date.now();
      }

      /* Prevent popup from rendering in an infinite loop */
      if (element.__popupRenderedCount__ && element.__popupRenderedCount__ > 15) {
        return false
      } else {
        element.__popupRenderedCount__ = element.__popupRenderedCount__ ? element.__popupRenderedCount__ + 1 : 1;
      }

      if (!element || !element.tagName || element.tagName.toLowerCase() !== 'video' || isOutOfDocument(element)) {
        return false
      }

      let popupWrapId = element.getAttribute('data-popup-wrap-id');
      if (!popupWrapId) {
        popupWrapId = 'h5player-popup-wrap-' + Math.random().toString(36).substr(2);
        element.setAttribute('data-popup-wrap-id', popupWrapId);
      }

      let popupWrap = document.querySelector(`#${popupWrapId}`);

      if (!popupWrapObjs[popupWrapId]) {
        popupWrapObjs[popupWrapId] = element;
      }

      if (popupWrap) {
        const popup = popupWrap.querySelector('sl-popup');
        popup && popup.reposition();
        return
      }

      const menuTemplate = createMenuTemplate(menuConfigPreprocess(menuConfig, element));
      popupWrap = parseHTML(`
      <div id="${popupWrapId}" class="h5player-popup-wrap">
        <sl-popup placement="top" sync="width">
        <div class="h5player-popup-content">
          <div class="h5p-logo-wrap">
            ${createLogoModTemplate()}
          </div>
          <div class="h5p-recommend-wrap">
            <div style="overflow:hidden">${createRecommendModTemplate(element)}</div>
          </div>
          <div class="h5p-menu-wrap">
            ${menuTemplate}
          </div>
        </div>
        </sl-popup>
      </div>
    `, document.body)[0];

      setTimeout(() => { registerRecommendModToggle(popupWrap.querySelector('.h5p-recommend-wrap')); }, 100);

      const popup = popupWrap.querySelector('sl-popup');

       /**
       * Determine whether popup initialization is abnormal. Custom-elements-es5-adapter.js is used on YouTube, which will cause popup abnormality, so this judgment is made
       * For example: https://www.youtube.com/watch?v=jsb-5H_hy0M
       * For example: https://www.youtube.com/watch?v=-2xb7rGCi2k
       */
      function checkPopupUpdateComplete () {
        if (!popup || !popup.updateComplete || !popup.updateComplete.then) {
          // debug.error('[h5playerUI][popup][updateComplete], component initialization exception', popup, element)
          element.removeAttribute('data-popup-wrap-id');
          popupWrap.remove();
          delete popupWrapObjs[popupWrapId];
          return false
        }

        return true
      }

      /* Make sure the popup is rendered */
      customElements.whenDefined('sl-popup').then(() => {
        if (!checkPopupUpdateComplete()) {
          return false
        }

        popup.updateComplete.then(() => {
          popup.anchor = element;
          popup.distance = -48;
          popup.active = true;
          setTimeout(() => { popup.reposition(); }, 600);
        });
      });

      /* Re-render the menu corresponding to h5p-action-mod to update the menu status*/
      function reRenderMenuMod () {
        const menuWrap = popupWrap.querySelector('.h5player-popup-content .h5p-menu-wrap');
        const actionMod = popupWrap.querySelector('.h5p-action-mod');
        if (menuWrap && actionMod) {
          menuWrap.removeChild(actionMod);

          const newMenuTemplate = createMenuTemplate(menuConfigPreprocess(menuConfig, element));
          parseHTML(newMenuTemplate, menuWrap);

          /* Remove the icon element when icon loading fails*/
          const slIcons = popupWrap.querySelectorAll('sl-icon');
          slIcons && slIcons.forEach(slIcon => {
            slIcon.addEventListener('sl-error', (event) => {
              const parent = event.target.parentElement;
              event.target.remove();

              /*Change to display text title only*/
              if (parent.getAttribute('data-title')) {
                parent.innerText = parent.getAttribute('data-title');
              }
            }, { once: true });
          });

          // debug.log('[h5playerUI][popup][reRenderMenuMod]')
        }
      }

      /* YouTube will render inexplicably wrong for the first time, so here we delay for a while and re-render the menu*/
      setTimeout(() => { reRenderMenuMod(); }, 400);

      /* Re-render the recommended module corresponding to h5p-recommend-mod. If there is not enough space, hide the module*/
      function reRenderRecommendMod () {
        const recommendWrap = popupWrap.querySelector('.h5player-popup-content .h5p-recommend-wrap');
        const recommendMod = popupWrap.querySelector('.h5player-popup-content .h5p-recommend-wrap>div');
        if (recommendWrap && recommendMod) {
          recommendWrap.removeChild(recommendMod);

          const newRecommendModTemplate = `
    
${createRecommendModTemplate(element)}
    
`;
          parseHTML(newRecommendModTemplate, recommendWrap);

          registerRecommendModToggle(recommendWrap, true);
          // debug.log('[h5playerUI][popup][reRenderRecommendMod]')
        }
      }

      const activeClass = 'h5player-popup-active';
      const fullActiveClass = 'h5player-popup-full-active';
      const alwaysShowUIBar = configManager.getGlobalStorage('ui.alwaysShow');

      /**
       * When the mouse moves to popupWrap, add the fullActiveClass style class, and remove the fullActiveClass style class after moving out for a while
       * Used to prevent popupWrap from being quickly hidden when the mouse moves over it, to provide a better operation experience
       */
      let mouseleaveTimer = null;
      popupWrap.addEventListener('mouseenter', () => {
        /* The element ratio is abnormal, and the popup is not displayed */
        if (element.videoWidth / element.videoHeight > 2.5) {
          element.__disableGUITemporarily__ = true;
          removePopupWrapByElement(element);
          return false
        }

        clearTimeout(mouseleaveTimer);
        if (isOutOfDocument(element)) {
          popupWrap.classList.remove(fullActiveClass);
        } else {
          popupWrap.classList.add(fullActiveClass);
        }
        popup.reposition();
      });
      popupWrap.addEventListener('mouseleave', () => {
        clearTimeout(mouseleaveTimer);

        if (isOutOfDocument(element)) {
          popupWrap.classList.remove(fullActiveClass);
        } else {
          mouseleaveTimer = setTimeout(() => {
            !alwaysShowUIBar && !element.paused && popupWrap.classList.remove(activeClass);
            !alwaysShowUIBar && !element.paused && popupWrap.classList.remove(fullActiveClass);

            /* Close all sl-dropdown in popupWrap */
            const dropdowns = popupWrap.querySelectorAll('sl-dropdown');
            dropdowns.forEach(dropdown => {
              dropdown._open_ = false;
              dropdown.open = false;
            });

            reRenderMenuMod();
          }, 500);
        }
      });

      // let lastOpenDropdownTime = Date.now()
      async function openDropdown (event) {
        // if (Date.now() - lastOpenDropdownTime < 100) { return false }
        // lastOpenDropdownTime = Date.now()

        const target = event.target;

        const actionBtnClass = 'h5p-action-btn';
        if (!(target.classList.contains(actionBtnClass) || target.parentElement.classList.contains(actionBtnClass))) {
          return false
        }

        const dropdowns = popupWrap.querySelectorAll('sl-dropdown');
        const curDropdown = target.parentElement.tagName.toLowerCase() === 'sl-dropdown' ? target.parentElement : target.parentElement.parentElement;
        const isDropdownDom = curDropdown && curDropdown.tagName.toLowerCase() === 'sl-dropdown';

        if (!isDropdownDom) {
          dropdowns.forEach(dropdown => {
            dropdown.open = false;
            dropdown._open_ = false;
          });
          return false
        }

        dropdowns.forEach(async (dropdown) => {
          if (dropdown !== curDropdown) {
            dropdown._open_ = false;
            await dropdown.hide();
          }
        });

        if (event.type === 'mousemove') {
          curDropdown._open_ = true;
          await curDropdown.show();
          return false
        }

        if (!curDropdown._open_) {
          await curDropdown.show();
          curDropdown._open_ = true;

          curDropdown.addEventListener('sl-after-hide', () => {
            curDropdown._open_ = false;
          }, { once: true });
        } else {
          await curDropdown.hide();
          curDropdown._open_ = false;

          curDropdown.addEventListener('sl-after-show', () => {
            curDropdown._open_ = true;
          }, { once: true });
        }
      }

      /* If mousemove is registered on the mobile terminal, click will not be triggered, or the events will interfere with each other and sl-dropdown will not be triggered */
      if (!device.isMobile()) {
        /* When the mouse moves over popupWrap, if isOutOfDocument(element) is detected, remove the style class of fullActiveClass. Note that debounce needs to be added */
        let lastCheckIsOutOfDocumentTime = Date.now();
        popupWrap.addEventListener('mousemove', (event) => {
          const now = Date.now();
          if (now - lastCheckIsOutOfDocumentTime > 100) {
            lastCheckIsOutOfDocumentTime = now;
            if (isOutOfDocument(element)) {
              clearTimeout(mouseleaveTimer);
              popupWrap.classList.remove(fullActiveClass);
            } else {
              popup.reposition();
            }
          }

          openDropdown(event);
        });
      }

      popupWrap.addEventListener('click', (event) => {
        openDropdown(event);
        menuActionHandler({
          event,
          videoElement: element,
          h5Player,
          h5playerUI: this,
          popup,
          actionCallback: (action, args) => {
            reRenderMenuMod();
          }
        });
      });

      observeVisibility((entry, observer) => {
        let activeStatus = false;
        if (entry) {
          if (!isOutOfDocument(element)) {
            activeStatus = true;
          }

          if (element && element.paused && !isOutOfDocument(element)) {
            if (element.currentTime && element.currentTime > 1.5) {
              popupWrap.classList.add(activeClass);
            }
          } else {
            if (alwaysShowUIBar) {
              popupWrap.classList.add(activeClass);
              popupWrap.classList.add(fullActiveClass);
            } else {
              popupWrap.classList.remove(activeClass);
              popupWrap.classList.remove(fullActiveClass);
            }
          }
        } else {
          activeStatus = false;
          popupWrap.classList.remove(activeClass);
          popupWrap.classList.remove(fullActiveClass);
        }

        if (!checkPopupUpdateComplete()) { return false }

        popup.updateComplete.then(() => {
          popup.active = activeStatus;
          popup.reposition();
        });
      }, element);

      popup.oldRect = element.getBoundingClientRect();
      popup.addEventListener('sl-reposition', () => {
        if (isOutOfDocument(element)) {
          popup.active = false;
          popupWrap.classList.remove(activeClass);
          popupWrap.classList.remove(fullActiveClass);
        } else {
          const newRect = element.getBoundingClientRect();
          if (newRect.width !== popup.oldRect.width) {
            popup.oldRect = newRect;
            reRenderMenuMod();
            reRenderRecommendMod();
          }
        }
      });

      /* When the element switches the playback state, if it is in the playback state, hide the popup, otherwise show the popup */
      element.addEventListener('play', () => {
        if (alwaysShowUIBar) {
          popupWrap.classList.add(activeClass);
          popupWrap.classList.add(fullActiveClass);
        } else {
          popupWrap.classList.remove(activeClass);
          popupWrap.classList.remove(fullActiveClass);
        }

        if (isOutOfDocument(element)) {
          popup.active = false;
        } else {
          popup.active = true;
        }
        popup.reposition();
        cleanPopupWrap();

        reRenderMenuMod();
      });

      element.addEventListener('pause', () => {
        reRenderMenuMod();

        if (alwaysShowUIBar) {
          popupWrap.classList.add(activeClass);
          popupWrap.classList.add(fullActiveClass);
        } else {
          if (element.currentTime && element.currentTime > 1.5) {
            popupWrap.classList.add(activeClass);
          }
        }

        if (isOutOfDocument(element)) {
          popup.active = false;
          popupWrap.classList.remove(activeClass);
          popupWrap.classList.remove(fullActiveClass);
        } else {
          popup.active = true;
        }

        popup.reposition();
        cleanPopupWrap();
      });

      /* When the playback progress of an element changes, execute popup.reposition() once */
      let lastTimeupdateTime = Date.now();
      element.addEventListener('timeupdate', () => {
        const now = Date.now();
        if (!isOutOfDocument(element) && now - lastTimeupdateTime > 400) {
          lastTimeupdateTime = now;
          popup.reposition();
        }
      });

      /* Try to clear invalid elements in popupWrapObjs */
      cleanPopupWrap();

      // debug.log('[h5playerUI][popup]', popup, popupWrap, element)
    }
  };

  return h5playerUI;

})();return h5playerUI};

/* Define which media tags are supported */
// const supportMediaTags = ['video', 'bwp-video', 'audio']
const supportMediaTags = ['video', 'bwp-video'];

let TCC = null;
const h5Player = {
  version,
  mediaCore,
  mediaPlusApi: null,
  mediaSource,
  configManager,
  /* font size of the prompt text*/
  fontSize: 12,
  enable: true,
  globalMode: true,
  playerInstance: null,
  scale: 1,
  translate: {
    x: 0,
    y: 0
  },
  rotate: 0,

  /* Horizontal mirror flip, 0 or 180 */
  rotateY: 0,
  /* Vertical mirror flip, 0 or 180 */
  rotateX: 0,

  defaultTransform: {
    scale: 1,
    translate: {
      x: 0,
      y: 0
    },
    rotate: 0,
    rotateY: 0,
    rotateX: 0
  },

  /* Store the old Transform value */
  historyTransform: {},

  playbackRate: configManager.get('media.playbackRate'),
  volume: configManager.get('media.volume'),
  lastPlaybackRate: configManager.get('media.lastPlaybackRate'),
  /* Fast forward and rewind step length*/
  skipStep: 5,

  /* Observable object to monitor mouse activity*/
  mouseObserver: new MouseObserver(),

  disableHotkeysTemporarily () {
    this.__disableHotkeysTemporarily__ = true;
  },
  enableHotkeys () {
    this.__disableHotkeysTemporarily__ = false;
  },
  toggleHotkeys () {
    const confirm = window.confirm(this.__disableHotkeysTemporarily__ ? i18n.t('enableHotkeys') : i18n.t('disableHotkeys'));
    if (confirm) {
      this.__disableHotkeysTemporarily__ = !this.__disableHotkeysTemporarily__;
    }
  },

  debuggerNow () {
    if (debug.isDebugMode()) {
      const script = document.createElement('script');
      script.innerText = 'debugger';
      document.body.appendChild(script);
    }
  },

  /* Close the UI interface of the current video instance to eliminate the impact of the UI interface on other elements such as occlusion*/
  disableCurrentInstanceGUI () {
    const t = this;
    const player = t.player();
    if (player && t.UI && t.UI.removePopupWrapByElement) {
      player.__disableGUITemporarily__ = true;
      t.UI.removePopupWrapByElement(player);
    }
  },

  /* Get the instance of the current player */
  player: function () {
    const t = this;
    let playerInstance = t.playerInstance;

    if (!playerInstance) {
      const mediaList = t.getPlayerList();
      if (mediaList.length) {
        playerInstance = mediaList[mediaList.length - 1];
        t.playerInstance = playerInstance;
        t.initPlayerInstance(mediaList.length === 1);
      }
    }

    if (playerInstance && !t.mediaPlusApi) {
      t.mediaPlusApi = mediaCore.mediaPlus(playerInstance);
    }

    return playerInstance
  },

  isAudioInstance () {
    return isAudioElement(this.player())
  },

  /* Each web page may have multiple video players*/
  getPlayerList: function () {
    const list = mediaCore.mediaElementList || [];

    function findPlayer (context) {
      supportMediaTags.forEach(tagName => {
        context.querySelectorAll(tagName).forEach(function (player) {
          if (player.tagName.toLowerCase() === 'bwp-video') {
            /* Identify B station's BWP-VIDEO as HTMLVideoElement */
            player.HTMLVideoElement = true;
          }

          if (isMediaElement(player) && !list.includes(player)) {
            list.push(player);
          }
        });
      });
    }

    findPlayer(document);

    // Video encapsulated in shadow dom
    if (window._shadowDomList_) {
      window._shadowDomList_.forEach(function (shadowRoot) {
        findPlayer(shadowRoot);
      });
    }

    return list
  },

  getPlayerWrapDom: function () {
    const t = this;
    const player = t.player();
    if (!player) return

    let wrapDom = null;
    const playerBox = player.getBoundingClientRect();
    eachParentNode(player, function (parent) {
      if (parent === document || !parent.getBoundingClientRect) return
      const parentBox = parent.getBoundingClientRect();
      if (parentBox.width && parentBox.height) {
        if (parentBox.width === playerBox.width && parentBox.height === playerBox.height) {
          wrapDom = parent;
        }
      }
    });
    return wrapDom
  },

  /* Mounted to the window object on the page for debugging*/
  async mountToGlobal () {
    try {
      const pageWindow = await getPageWindow();
      if (pageWindow) {
        pageWindow._h5Player = h5Player || 'null';
        if (window.top !== window) {
          pageWindow._h5PlayerInFrame = h5Player || 'null';
        }
        pageWindow._window = window || '';
        debug.log('h5Player object has been successfully mounted globally');
      }
    } catch (e) {
      debug.error(e);
    }
  },

  /**
   * Initialize the player instance
   * @param isSingle Whether it is a single instance video tag
   */
  initPlayerInstance (isSingle) {
    const t = this;
    if (!t.playerInstance) return

    const player = t.playerInstance;

    t.mediaPlusApi = mediaCore.mediaPlus(player);

    t.initPlaybackRate();
    t.isFoucs();
    t.proxyPlayerInstance(player);

    t.unLockPlaybackRate();
    t.setPlaybackRate();
    t.lockPlaybackRate(1000);

    /* Add general full screen, web page full screen API */
    player._fullScreen_ = new FullScreen(player);
    player._fullPageScreen_ = new FullScreen(player, true);

    /* Register hotkey runner */
    t.registerHotkeysRunner();

    if (!player._hasCanplayEvent_) {
      player.addEventListener('canplay', function (event) {
        t.initAutoPlay(player);
      });
      player._hasCanplayEvent_ = true;
    }

    /* Perform relevant synchronization operations during playback*/
    if (!player._hasPlayerInitEvent_) {
      let setPlaybackRateOnPlayingCount = 0;
      player.addEventListener('playing', function (event) {
        t.unLockPlaybackRate();
        t.setPlaybackRate(null, true);
        t.lockPlaybackRate(1000);

        /* Synchronous playback volume */
        if (configManager.get('enhance.blockSetVolume') === true && event.target.muted === false) {
          t.setVolume(configManager.getGlobalStorage('media.volume'), true);
        }

        /* Disable default progress control */
        if (configManager.get('enhance.blockSetCurrentTime') === true) {
          t.lockCurrentTime();
        }

        /* Resume playback progress */
        t.setPlayProgress(player);

        if (setPlaybackRateOnPlayingCount === 0) {
          /* Synchronize the previously set playback speed, volume, etc.*/
          t.unLockPlaybackRate();
          t.setPlaybackRate();
          t.lockPlaybackRate(1000);

          /* Start playback progress recording*/
          setTimeout(() => {
            t.playProgressRecorder(player);
          }, 2000);
        } else {
          t.unLockPlaybackRate();
          t.setPlaybackRate(null, true);
          t.lockPlaybackRate(1000);
        }
        setPlaybackRateOnPlayingCount += 1;
      });

      player._hasPlayerInitEvent_ = true;
    }

    /* Perform custom initialization operations*/
    const taskConf = TCC.getTaskConfig();
    if (taskConf.init) {
      TCC.doTask('init', player);
    }

    const needInitEvent = !player.__registeredInitEvent__;

    /* Register mouse response events*/
    needInitEvent && t.mouseObserver.on(player, 'click', function (event, offset, target) {
      // debug.log('Captured mouse click event:', event, offset, target)
    });

    /* Picture-in-picture event monitoring*/
    needInitEvent && player.addEventListener('enterpictureinpicture', () => {
      monkeyMsg.send('globalPictureInPictureInfo', {
        usePictureInPicture: true
      });
      debug.log('enterpictureinpicture', player);
    });
    needInitEvent && player.addEventListener('leavepictureinpicture', () => {
      t.leavepictureinpictureTime = Date.now();

      monkeyMsg.send('globalPictureInPictureInfo', {
        usePictureInPicture: false
      });
      debug.log('leavepictureinpicture', player);
    });

    // if (debug.isDebugMode()) {}

    /* Record the src used by the player */
    function srcRecord (player) {
      const src = player.currentSrc || player.src;
      if (!src) { return }

      player.srcList = player.srcList || [src];
      if (!player.srcList.includes(src)) {
        player.srcList.push(src);
      }
    }

    function updataBufferedTime (player) {
      /* Record the time point of cache data at any time*/
      if (player.buffered.length > 0) {
        const bufferedTime = player.buffered.end(player.buffered.length - 1);
        player.bufferedTime = bufferedTime;
      }

      if (t.autoGotoBufferedTime && player.bufferedTime && t.player() === player && player.bufferedTime < player.duration - 1 && player.currentTime < player.bufferedTime - 1) {
        t.setCurrentTime(player.bufferedTime);
      }
    }

    needInitEvent && player.addEventListener('loadeddata', function () {
      debug.log(`[player][loadeddata] ${player.src} video duration: ${player.duration} video dom:`, player);
      srcRecord(player);
    });
    needInitEvent && player.addEventListener('durationchange', function () {
      debug.log(`[player][durationchange] ${player.duration}`);
      srcRecord(player);
    });

    needInitEvent && player.addEventListener('loadstart', function () {
      debug.log('[player][loadstart]', player.currentSrc, player.src);
      srcRecord(player);
    });

    /*Registration UI interface*/
    t.UI && t.UI.popup && t.UI.popup(player, t);

    /* When playing or pausing, try to register the UI interface, so that even if the popup is accidentally deleted, it can still be created again normally*/
    needInitEvent && player.addEventListener('play', function () {
      t.UI && t.UI.popup && t.UI.popup(player, t);
    });
    needInitEvent && player.addEventListener('pause', function () {
      t.UI && t.UI.popup && t.UI.popup(player, t);
    });
    let lastRegisterUIPopupTime = Date.now();
    let tryRegisterUIPopupCount = 0;
    needInitEvent && player.addEventListener('timeupdate', function () {
      // updataBufferedTime(player)

      if (Date.now() - lastRegisterUIPopupTime > 800 && tryRegisterUIPopupCount < 60) {
        lastRegisterUIPopupTime = Date.now();
        tryRegisterUIPopupCount += 1;
        t.UI && t.UI.popup && t.UI.popup(player, t);
      }

      srcRecord(player);
      mediaSource.connectMediaSourceWithMediaElement(player);
    });

    let lastCleanMediaSourceDataTime = Date.now();
    needInitEvent && player.addEventListener('progress', () => {
      updataBufferedTime(player);
      mediaSource.connectMediaSourceWithMediaElement(player);

      if (Date.now() - lastCleanMediaSourceDataTime > 1000 * 10) {
        lastCleanMediaSourceDataTime = Date.now();
        mediaSource.cleanMediaSourceData();
      }
    });

    needInitEvent && player.addEventListener('durationchange', function () {
      lastRegisterUIPopupTime = Date.now();
      tryRegisterUIPopupCount = 0;
      t.UI && t.UI.popup && t.UI.popup(player, t);
    });

    player.__registeredInitEvent__ = true;
  },

  registerHotkeysRunner () {
    if (!this.hotkeysRunner) {
      this.hotkeysRunner = new HotkeysRunner(configManager.get('hotkeys'));

      if ( isInIframe ( ) && ! isInCrossOriginFrame ()) {
        /* Allow the top-level page to also listen to the triggering of the key combination*/
        this.hotkeysRunner.setCombinationKeysMonitor(window.top);
      }
    }
  },

  /* Picture-in-picture has just been closed, cross-TAB control is allowed during this period*/
  isLeavepictureinpictureAwhile () {
    const t = this;
    return t.leavepictureinpictureTime && (Date.now() - t.leavepictureinpictureTime < 1000 * 10)
  },

  /**
   * Proxy the methods or properties of the player instance
   * @param player
   */
  proxyPlayerInstance (player) {
    if (!player) return

    /* List of methods or properties to proxy */
    const proxyList = [
      'play',
      'pause'
    ];

    proxyList.forEach(key => {
      const originKey = 'origin_' + key;
      if (Reflect.has(player, key) && !Reflect.has(player, originKey)) {
        player[originKey] = player[key];
        const proxy = new Proxy(player[key], {
          apply (target, ctx, args) {
            // debug.log(key + 'called')

            /* Handle the hang logic */
            const hangUpInfo = player._hangUpInfo_ || {};
            const hangUpDetail = hangUpInfo[key] || hangUpInfo['hangUp_' + key];
            const needHangUp = hangUpDetail && hangUpDetail.timeout >= Date.now();
            if (needHangUp) {
              debug.log(key + 'has been suspended, this call will be ignored');
              return false
            }

            return target.apply(ctx || player, args)
          }
        });

        player[key] = proxy;
      }
    });

    if (!player._hangUp_) {
      player._hangUpInfo_ = {};
      /**
       * Suspend the call of a certain function of the player
       * @param name {String} - required player method or attribute name, the name is written to the outside, and the method or attribute must be proxied to be suspended, otherwise it will be an invalid call
       * @param timeout {Number} - optional suspend time, default 200ms
       * @private
       */
      player._hangUp_ = function (name, timeout) {
        timeout = Number(timeout) || 200;
        // debug.log('_hangUp_', name, timeout)
        player._hangUpInfo_[name] = {
          timeout: Date.now() + timeout
        };
      };

      /* Cancel suspension */
      player._unHangUp_ = function (name) {
        if (player._hangUpInfo_ && player._hangUpInfo_[name]) {
          player._hangUpInfo_[name].timeout = Date.now() - 1;
        }
      };
    }
  },

  /**
   * Initialize the automatic playback logic
   * The autoplay button selector must be configured for automatic playback
   */
  initAutoPlay: function (p) {
    const t = this;
    const player = p || t.player();
    const taskConf = TCC.getTaskConfig();

    /* Register to enable the control menu to disable automatic playback*/
    if (taskConf.autoPlay) {
      if (configManager.getLocalStorage('media.autoPlay') === null) {
        configManager.setLocalStorage('media.autoPlay', true);
      }

      addMenu({
        title: () => configManager.getLocalStorage('media.autoPlay') ? i18n.t('disableInitAutoPlay') : i18n.t('enableInitAutoPlay'),
        fn: () => {
          const confirm = window.confirm(configManager.getLocalStorage('media.autoPlay') ? i18n.t('disableInitAutoPlay') : i18n.t('enableInitAutoPlay'));
          if (confirm) {
            const autoPlay = configManager.getLocalStorage('media.autoPlay');
            if (autoPlay === null) {
              alert(i18n.t('configFail'));
            } else {
              configManager.setLocalStorage('media.autoPlay', !autoPlay);
            }
          }
        }
      });
    }

    // During polling retries, if the instance has changed or is in a hidden page, the automatic playback operation will not be performed
    if (!configManager.get('media.autoPlay') || (!p && t.hasInitAutoPlay) || !player || (p && p !== t.player()) || document.hidden) {
      return false
    }

    /**
     * The element is not in the visible range, and the initialization of the automatic playback logic is not allowed
     * Because the visual range of elements in iframe is not accurately judged, the initialization of automatic playback logic is also prohibited in iframe
     * TODO To be optimized
     */
    if ( ! isInViewPort ( player ) || isInIframe ()) {
      return false
    }

    if (!taskConf.autoPlay) {
      return false
    }

    t.hasInitAutoPlay = true;

    if (player && taskConf.autoPlay && player.paused) {
      TCC.doTask('autoPlay');
      if (player.paused) {
        // Poll retry
        if (!player._initAutoPlayCount_) {
          player._initAutoPlayCount_ = 1;
        }
        player._initAutoPlayCount_ += 1;
        if (player._initAutoPlayCount_ >= 10) {
          return false
        }
        setTimeout(function () {
          t.initAutoPlay(player);
        }, 200);
      }
    }
  },

  printPlayerInfo (p) {
    const t = this;
    const player = p || t.player();

    const info = {
      curPlayer: player,
      srcList: player.srcList,
      h5player: t,
      h5playerUI: t.UI,
      mediaSource,
      window
    };

    if (t.UI && t.UI.findPopupWrapWithElement) {
      info.curlPopupWrap = t.UI.findPopupWrapWithElement(player);
      info.allPopupWrap = t.UI.getAllPopupWrapElement();
    }

    debug.info('[playerInfo]', info);
  },

  /* Set the video to full screen */
  setFullScreen () {
    const player = this.player();
    const isDo = TCC.doTask('fullScreen');
    if (!isDo && player && player._fullScreen_) {
      player._fullScreen_.toggle();
    }
  },

  /* Set the page to full screen */
  setWebFullScreen: function () {
    const t = this;
    const player = t.player();
    const isDo = TCC.doTask('webFullScreen');
    if (!isDo && player && player._fullPageScreen_) {
      player._fullPageScreen_.toggle();
    }
  },

  initPlaybackRate () {
    const t = this;
    t.playbackRate = t.getPlaybackRate();
  },

  playbackRateInfo: {
    lockTimeout: Date.now() - 1,
    time: Date.now(),
    /* Before initializing the playback queue, the speed is unknown, so it is set to -1 */
    value: -1
  },

  getPlaybackRate () {
    let playbackRate = configManager.get('media.playbackRate') || this.playbackRate;
    if ( isInIframe ( ) ) {
      const globalPlaybackRate = configManager.getGlobalStorage('media.playbackRate');
      if (globalPlaybackRate) {
        playbackRate = globalPlaybackRate;
      }
    }
    return Number(Number(playbackRate).toFixed(1))
  },

  /* Lock playbackRate and disable speed adjustment*/
  lockPlaybackRate: function (timeout = 200) {
    if (this.mediaPlusApi) {
      if (configManager.get('enhance.blockSetPlaybackRate') === true) {
        // If you want to lock external operations on playbackRate, just give it a very large value
        timeout = 1000 * 60 * 60 * 24 * 365;
      }

      this.mediaPlusApi.lockPlaybackRate(timeout);
      return true
    }

    this.playbackRateInfo.lockTimeout = Date.now() + timeout;
  },

  unLockPlaybackRate: function () {
    if (this.mediaPlusApi) {
      this.mediaPlusApi.unLockPlaybackRate();
      return true
    }

    this.playbackRateInfo.lockTimeout = Date.now() - 1;
  },

  isLockPlaybackRate: function () {
    if (this.mediaPlusApi) {
      return this.mediaPlusApi.isLockPlaybackRate()
    }

    return Date.now() - this.playbackRateInfo.lockTimeout < 0
  },

  /* Solve the problem of audio and video being out of sync after frequent switching between high and low speeds*/
  fixPlaybackRate: function (oldPlaybackRate) {
    const t = this;
    const curPlaybackRate = t.getPlaybackRate();

    if (Math.abs(curPlaybackRate - oldPlaybackRate) > 1) {
      t.setCurrentTimeUp(0.1, true);
    }
  },

  /* Set the playback speed */
  setPlaybackRate: function (num, notips, duplicate, skipLock) {
    const t = this;
    const player = t.player();

    if (!skipLock && t.isLockPlaybackRate()) {
      debug.info('Speed ​​regulation capability has been locked');
      return false
    }

    if (TCC.doTask('playbackRate')) {
      // debug.log('[TCC][playbackRate]', 'suc')
      return
    }

    if (!player) return

    const oldPlaybackRate = t.getPlaybackRate();

    let curPlaybackRate;
    if (num) {
      num = Number(num);
      if (Number.isNaN(num)) {
        debug.error('h5player: playback speed conversion error');
        return false
      }

      if (num <= 0) {
        num = 0.1;
      } else if (num > 16) {
        num = 16;
      }

      num = Number(num.toFixed(1));
      curPlaybackRate = num;
    } else {
      curPlaybackRate = t.getPlaybackRate();
    }

    /* Record playback speed information*/
    t.playbackRate = curPlaybackRate;
    if ( isInIframe ( ) ) {
      configManager.setGlobalStorage('media.playbackRate', curPlaybackRate);
    } else {
      configManager.set('media.playbackRate', curPlaybackRate);
    }

    if (t.mediaPlusApi) {
      t.mediaPlusApi.setPlaybackRate(curPlaybackRate);

      if (!(!num && curPlaybackRate === 1) && !notips) {
        t.tips(i18n.t('tipsMsg.playspeed') + player.playbackRate);
      }

      /* Synchronize playback speed to all media elements*/
      const mediaList = t.getPlayerList();
      mediaList.forEach(media => {
        if (media !== player) {
          const mediaPlusApi = mediaCore.mediaPlus(media);
          mediaPlusApi && mediaPlusApi.setPlaybackRate(curPlaybackRate);
        }
      });

      t.fixPlaybackRate(oldPlaybackRate);
      return true
    }

    delete player.playbackRate;
    player.playbackRate = curPlaybackRate;

    t.playbackRateInfo.time = Date.now();
    t.playbackRateInfo.value = curPlaybackRate;
    player._setPlaybackRate_ = {
      time: Date.now(),
      value: curPlaybackRate
    };

    try {
      const playbackRateDescriptor = Object.getOwnPropertyDescriptor(HTMLMediaElement.prototype, 'playbackRate');
      originalMethods.Object.defineProperty.call(Object, player, 'playbackRate', {
        configurable: true,
        get: function () {
          /**
           * In YouTube, if playbackRateDescriptor.get.apply(player, arguments) is returned, the speed adjustment will fluctuate and be abnormal
           * I don't know why yet, so I'll return curPlaybackRate first
           */
          return curPlaybackRate || playbackRateDescriptor.get.apply(player, arguments)
        },
        set: function (val) {
          if (typeof val !== 'number') {
            return false
          }

          /* Some websites use a timer to continuously refresh the playbackRate, so the timer is used to reduce unnecessary information output*/
          !Number.isInteger(player._blockSetPlaybackRateTips_) && (player._blockSetPlaybackRateTips_ = 0);

          if (TCC.doTask('blockSetPlaybackRate')) {
            player._blockSetPlaybackRateTips_++;
            player._blockSetPlaybackRateTips_ < 3 && debug.info('The speed adjustment capability has been processed by the custom speed adjustment task');
            return false
          }

          if (configManager.get('enhance.blockSetPlaybackRate') === true) {
            player._blockSetPlaybackRateTips_++;
            player._blockSetPlaybackRateTips_ < 3 && debug.info('Speed ​​adjustment capability has been locked by blockSetPlaybackRate');
            return false
          } else {
            t.setPlaybackRate(val);
          }
        }
      });
    } catch (e) {
      debug.error('Unlock playbackRate failed', e);
    }

    /* No more prompts when the playback speed is 1x*/
    if (!num && curPlaybackRate === 1) {
      return true
    } else {
      !notips && t.tips(i18n.t('tipsMsg.playspeed') + player.playbackRate);
    }

    /**
     * Repeat the last speed setting
     * Fixed the issue that YouTube fast speed adjustment did not work and had to be paused and adjusted again for it to work
     */
    if (!duplicate && configManager.get('enhance.blockSetPlaybackRate') === true) {
      clearTimeout(t._setPlaybackRateDuplicate_);
      clearTimeout(t._setPlaybackRateDuplicate2_);
      const duplicatePlaybackRate = () => {
        t.unLockPlaybackRate();
        t.setPlaybackRate(curPlaybackRate, true, true);
        t.lockPlaybackRate(1000);
      };
      t._setPlaybackRateDuplicate_ = setTimeout(duplicatePlaybackRate, 600);
      /* If re-triggering at 600ms is invalid, trigger it again after 1200ms. If it takes 1200ms to take effect, the delay in the speed regulation taking effect is already very obvious*/
      t._setPlaybackRateDuplicate2_ = setTimeout(duplicatePlaybackRate, 1200);
    }

    t.fixPlaybackRate(oldPlaybackRate);
  },

  /**
   * Enhanced speed adjustment. When the same value is set in a short period of time, it will be considered that a faster jump speed is required.
   * The speed adjustment value will be superimposed and amplified, so as to achieve the purpose of fast jump speed adjustment
   * Can be used for fast forwarding of video ads, quick viewing of the opening and ending credits, etc.
   * @param {*} num
   */
  setPlaybackRatePlus: function (num) {
    num = Number(num);
    if (!num || Number.isNaN(num)) {
      return false
    }

    const t = this;
    t.playbackRatePlusInfo = t.playbackRatePlusInfo || {};
    t.playbackRatePlusInfo[num] = t.playbackRatePlusInfo[num] || {
      time: Date.now() - 1000,
      value: num
    };

    if (Date.now() - t.playbackRatePlusInfo[num].time < 300) {
      t.playbackRatePlusInfo[num].value = t.playbackRatePlusInfo[num].value + num;
    } else {
      t.playbackRatePlusInfo[num].value = num;
    }

    t.playbackRatePlusInfo[num].time = Date.now();

    t.unLockPlaybackRate();
    t.setPlaybackRate(t.playbackRatePlusInfo[num].value);
    t.lockPlaybackRate(1000);
  },

  /* Restore the playback speed to 1x speed or to the last speed*/
  resetPlaybackRate: function (player) {
    const t = this;
    player = player || t.player();

    t.unLockPlaybackRate();

    const oldPlaybackRate = Number(player.playbackRate);
    const playbackRate = oldPlaybackRate === 1 ? t.lastPlaybackRate : 1;
    if (oldPlaybackRate !== 1) {
      t.lastPlaybackRate = oldPlaybackRate;
      configManager.setLocalStorage('media.lastPlaybackRate', oldPlaybackRate);
    }

    t.setPlaybackRate(playbackRate);

    /* To prevent interference from external speed control logic, lock for a period of time*/
    t.lockPlaybackRate(1000);
  },

  /* Increase playback speed */
  setPlaybackRateUp (num) {
    num = numUp(num) || 0.1;
    if (this.player()) {
      this.unLockPlaybackRate();
      this.setPlaybackRate(this.player().playbackRate + num);

      /* To prevent interference from external speed control logic, lock for a period of time*/
      this.lockPlaybackRate(1000);
    }
  },

  /* Reduce playback rate */
  setPlaybackRateDown (num) {
    num = numDown(num) || -0.1;
    if (this.player()) {
      this.unLockPlaybackRate();
      this.setPlaybackRate(this.player().playbackRate + num);

      /* To prevent interference from external speed control logic, lock for a period of time*/
      this.lockPlaybackRate(1000);
    }
  },

  /**
   * Control logic for locking playback progress
   * Unlike locking volume and speed, playback progress is closely related to the video instance, so its locking information must be attached to the playback instance
   */
  lockCurrentTime: function (timeout = 200) {
    if (this.mediaPlusApi) {
      if (configManager.get('enhance.blockSetCurrentTime') === true) {
        // If you want to lock external operations on currentTime, just give it a very large value
        timeout = 1000 * 60 * 60 * 24 * 365;
      }

      this.mediaPlusApi.lockCurrentTime(timeout);
      return true
    }

    const player = this.player();
    if (player) {
      player.currentTimeInfo = player.currentTimeInfo || {};
      player.currentTimeInfo.lockTimeout = Date.now() + timeout;
    }
  },

  unLockCurrentTime: function () {
    if (this.mediaPlusApi) {
      this.mediaPlusApi.unLockCurrentTime();
      return true
    }

    const player = this.player();
    if (player) {
      player.currentTimeInfo = player.currentTimeInfo || {};
      player.currentTimeInfo.lockTimeout = Date.now() - 1;
    }
  },

  isLockCurrentTime: function () {
    if (this.mediaPlusApi) {
      return this.mediaPlusApi.isLockCurrentTime()
    }

    const player = this.player();
    if (player && player.currentTimeInfo && player.currentTimeInfo.lockTimeout) {
      return Date.now() - player.currentTimeInfo.lockTimeout < 0
    } else {
      return false
    }
  },

  /* Set the playback progress */
  setCurrentTime: function (num) {
    if (!num && num !== 0) return
    num = Number(num);
    const _num = Math.abs(Number(num.toFixed(1)));

    const t = this;
    const player = t.player();

    if (t.isLockCurrentTime()) {
      return false
    }

    if (TCC.doTask('currentTime')) {
      // debug.log('[TCC][currentTime]', 'suc')
      return
    }

    if (this.mediaPlusApi) {
      this.mediaPlusApi.setCurrentTime(_num);
      return true
    }

    delete player.currentTime;
    player.currentTime = _num;
    player.currentTimeInfo = player.currentTimeInfo || {};
    player.currentTimeInfo.time = Date.now();
    player.currentTimeInfo.value = _num;

    try {
      const currentTimeDescriptor = Object.getOwnPropertyDescriptor(HTMLMediaElement.prototype, 'currentTime');
      originalMethods.Object.defineProperty.call(Object, player, 'currentTime', {
        configurable: true,
        enumerable: true,
        get: function () {
          return currentTimeDescriptor.get.apply(player, arguments)
        },
        set: function (val) {
          if (typeof val !== 'number' || TCC.doTask('blockSetCurrentTime') || configManager.get('enhance.blockSetCurrentTime') === true) {
            return false
          }

          if (t.isLockCurrentTime()) {
            return false
          }

          player.currentTimeInfo.time = Date.now();
          player.currentTimeInfo.value = val;

          return currentTimeDescriptor.set.apply(player, arguments)
        }
      });
    } catch (e) {
      debug.error('Unlock currentTime failed', e);
    }
  },

  setCurrentTimeUp (num, hideTips) {
    num = Number(numUp(num) || this.skipStep);

    if (TCC.doTask('addCurrentTime')) ; else {
      if (this.player()) {
        this.unLockCurrentTime();
        this.setCurrentTime(this.player().currentTime + num);

        /* To prevent interference from external progress control logic, lock it for a while*/
        this.lockCurrentTime(500);

        if (!hideTips) {
          this.tips(i18n.t('tipsMsg.forward') + num + i18n.t('tipsMsg.seconds'));
        }
      }
    }
  },

  setCurrentTimeDown (num) {
    num = Number(numDown(num) || -this.skipStep);

    if (TCC.doTask('subtractCurrentTime')) ; else {
      if (this.player()) {
        let currentTime = this.player().currentTime + num;
        if (currentTime < 1) {
          currentTime = 0;
        }

        this.unLockCurrentTime();
        this.setCurrentTime(currentTime);

        /* To prevent interference from external progress control logic, lock it for a while*/
        this.lockCurrentTime(500);

        this.tips(i18n.t('tipsMsg.backward') + Math.abs(num) + i18n.t('tipsMsg.seconds'));
      }
    }
  },

  volumeInfo: {
    lockTimeout: Date.now() - 1,
    time: Date.now(),
    /* Before initializing the playback queue, the volume is unknown, so it is set to -1 */
    value: -1
  },

  getVolume: function () {
    let volume = configManager.get('media.volume');
    if (isInIframe() || configManager.get('enhance.blockSetVolume') === true) {
      const globalVolume = configManager.getGlobalStorage('media.volume');
      if (globalVolume !== null) {
        volume = globalVolume;
      }
    }
    return Number(Number(volume).toFixed(2))
  },

  /* Lock the volume and disable tuning*/
  lockVolume: function (timeout = 200) {
    if (this.mediaPlusApi) {
      if (configManager.get('enhance.blockSetVolume') === true) {
        // If you want to lock external operations on volume, just give it a very large value
        timeout = 1000 * 60 * 60 * 24 * 365;
      }

      this.mediaPlusApi.lockVolume(timeout);
      return true
    }

    this.volumeInfo.lockTimeout = Date.now() + timeout;
  },

  unLockVolume: function () {
    if (this.mediaPlusApi) {
      this.mediaPlusApi.unLockVolume();
      return true
    }

    this.volumeInfo.lockTimeout = Date.now() - 1;
  },

  isLockVolume: function () {
    if (this.mediaPlusApi) {
      return this.mediaPlusApi.isLockVolume()
    }

    return Date.now() - this.volumeInfo.lockTimeout < 0
  },

  /* Set the volume */
  setVolume: function (num, notips, outerCall) {
    const t = this;
    const player = t.player();

    if (t.isLockVolume()) {
      return false
    }

    if (!num && num !== 0) {
      num = t.getVolume();
    }

    num = Number(num).toFixed(2);
    if (num < 0) {
      num = 0;
    }

    if (num > 1 && configManager.get('enhance.allowAcousticGain')) {
      num = Math.ceil(num);

      try {
        player._amp_ = player._amp_ || new MediaElementAmplifier(player);
      } catch (e) {
        num = 1;
        debug.error('Media sound loudness gain logic abnormality', e);
      }

      /* Limit the maximum gain value */
      if (num > 6) {
        num = 6;
      }

      if (!player._amp_ || !player._amp_.setLoudness) {
        num = 1;
      }
    } else if (num > 1) {
      num = 1;
    }

    /* Record playback volume information*/
    t.volume = num;

    /* Use volume gain logic, the gain volume is not stored locally*/
    if (num > 1 && player._amp_ && player._amp_.setLoudness) {
      player._amp_.setLoudness(num);

      if (!outerCall) { player.muted = false; }

      !notips && t.tips(i18n.t('tipsMsg.volume') + parseInt(num * 100) + '%');
      return true
    }

    if (isInIframe() || configManager.get('enhance.blockSetVolume') === true) {
      configManager.setGlobalStorage('media.volume', num);
    } else {
      configManager.setLocalStorage('media.volume', num);
    }

    if (t.mediaPlusApi) {
      t.mediaPlusApi.setVolume(num);

      /* Synchronize playback volume to all media elements */
      const mediaList = t.getPlayerList();
      mediaList.forEach(media => {
        if (media !== player) {
          const mediaPlusApi = mediaCore.mediaPlus(media);
          mediaPlusApi && mediaPlusApi.setVolume(num);
        }
      });
    } else {
      delete player.volume;
      player.volume = num;
      t.volumeInfo.time = Date.now();
      t.volumeInfo.value = num;

      try {
        const volumeDescriptor = Object.getOwnPropertyDescriptor(HTMLMediaElement.prototype, 'volume');
        originalMethods.Object.defineProperty.call(Object, player, 'volume', {
          configurable: true,
          get: function () {
            return volumeDescriptor.get.apply(player, arguments)
          },
          set: function (val) {
            if (typeof val !== 'number' || val < 0) {
              return false
            }

            if (TCC.doTask('blockSetVolume') || configManager.get('enhance.blockSetVolume') === true) {
              return false
            } else {
              t.setVolume(val, false, true);
            }
          }
        });
      } catch (e) {
        debug.error('Unlock volume failed', e);
      }
    }

    /* Turn off silent mode when adjusting the volume*/
    if (!outerCall) { player.muted = false; }

    !notips && t.tips(i18n.t('tipsMsg.volume') + parseInt(player.volume * 100) + '%');
  },

  setVolumeUp (number) {
    num = numUp(num) || 0.2;
    const player = this.player();
    if (player) {
      this.unLockVolume();

      if (this.volume > 1 && player._amp_) {
        this.setVolume(this.volume + num);
      } else {
        this.setVolume(player.volume + num);
      }

      /* To prevent interference from external tuning logic, lock it for a while*/
      this.lockVolume(500);
    }
  },

  setVolumeDown (num) {
    num = numDown(num) || -0.2;
    const player = this.player();
    if (player) {
      this.unLockVolume();

      if (this.volume > 1 && player._amp_) {
        this.setVolume(Math.floor(this.volume + num));
      } else {
        this.setVolume(player.volume + num);
      }

      /* To prevent interference from external tuning logic, lock it for a while*/
      this.lockVolume(500);
    }
  },

  /* Collect the historical change records of Transform values ​​for subsequent restoration*/
  collectTransformHistoryInfo () {
    const t = this;
    Object.keys(t.defaultTransform).forEach(key => {
      if (key === 'translate') {
        const translate = t.defaultTransform.translate;
        t.historyTransform.translate = t.historyTransform.translate || {};
        Object.keys(translate).forEach(subKey => {
          if (Number(t.translate[subKey]) !== t.defaultTransform.translate[subKey]) {
            t.historyTransform.translate[subKey] = t.translate[subKey];
          }
        });
      } else {
        if (Number(t[key]) !== t.defaultTransform[key]) {
          t.historyTransform[key] = t[key];
        }
      }
    });
  },

  /* Determine whether the Transform value under h5Player is consistent with the default Transform value*/
  isSameAsDefaultTransform () {
    let result = true;
    const t = this;
    Object.keys(t.defaultTransform).forEach(key => {
      if (isObj$1(t.defaultTransform[key])) {
        Object.keys(t.defaultTransform[key]).forEach(subKey => {
          if (Number(t[key][subKey]) !== t.defaultTransform[key][subKey]) {
            result = false;
          }
        });
      } else {
        if (Number(t[key]) !== t.defaultTransform[key]) {
          result = false;
        }
      }
    });
    return result
  },

  /* Set the zoom and displacement of the video screen*/
  setTransform (notTips) {
    const t = this;
    const player = t.player();
    const scale = t.scale = Number(t.scale).toFixed(2);
    const translate = t.translate;

    const mirror = t.rotateX === 180 ? `rotateX(${t.rotateX}deg)` : (t.rotateY === 180 ? `rotateY(${t.rotateY}deg)` : '');
    player.style.transform = `scale(${scale}) translate(${translate.x}px, ${translate.y}px) rotate(${t.rotate}deg) ${mirror}`;

    let tipsMsg = i18n.t('tipsMsg.videozoom') + `${(scale * 100).toFixed(0)}%`;
    if (translate.x) {
      tipsMsg += ` ${i18n.t('tipsMsg.horizontal')}${t.translate.x}px`;
    }
    if (translate.y) {
      tipsMsg += ` ${i18n.t('tipsMsg.vertical')}${t.translate.y}px`;
    }

    if (notTips === true) ; else {
      t.collectTransformHistoryInfo();
      t.tips(tipsMsg);
    }

    /* Always keep the transform style normal*/
    if (!t._transformStateGuard_) {
      t._transformStateGuard_ = setInterval(() => {
        t.setTransform(true);
      }, 300);
    }
  },

  /* Rotate the video screen 90 degrees*/
  setRotate () {
    const t = this;
    t.rotate += 90;
    if (t.rotate % 360 === 0) t.rotate = 0;
    t.setTransform(true);
    t.tips(i18n.t('tipsMsg.imgrotate') + t.rotate + '°');
  },

  /* Set mirror flip */
  setMirror (vertical = false) {
    const t = this;
    let tipsMsg = '';
    if (vertical) {
      t.rotateX = t.rotateX === 0 ? 180 : 0;
      tipsMsg += ` ${i18n.t('tipsMsg.verticalMirror')} ${t.rotateX}deg`;
    } else {
      t.rotateY = t.rotateY === 0 ? 180 : 0;
      tipsMsg += ` ${i18n.t('tipsMsg.horizontalMirror')} ${t.rotateY}deg`;
    }

    t.setTransform(true);
    t.tips(tipsMsg);
  },

  /* Zoom the video screen */
  setScale (num) {
    if (Number.isNaN(this.scale) || Number.isNaN(num)) {
      this.scale = 1;
    } else {
      this.scale = num;
    }

    this.setTransform();
  },

  /* Video zoom +0.1 */
  setScaleUp (num) {
    num = numUp(num) || 0.05;
    this.setScale(Number(this.scale) + num);
  },

  /* Video reduction -0.1 */
  setScaleDown (num) {
    num = numDown(num) || -0.05;
    this.setScale(Number(this.scale) + num);
  },

  /* Set the displacement properties of the video screen*/
  setTranslate (x, y) {
    if (typeof x === 'number') {
      this.translate.x = x;
    }

    if (typeof y === 'number') {
      this.translate.y = y;
    }

    this.setTransform();
  },

  /* Video screen moves to the right */
  setTranslateRight (num) {
    num = numUp(num) || 10;
    this.setTranslate(this.translate.x + num);
  },

  /* Video screen pans to the left*/
  setTranslateLeft (num) {
    num = numDown(num) || -10;
    this.setTranslate(this.translate.x + num);
  },

  /* Video screen moves upwards */
  setTranslateUp (num) {
    num = numUp(num) || 10;
    this.setTranslate(null, this.translate.y - num);
  },

  /* Video screen moves downwards */
  setTranslateDown (num) {
    num = numDown(num) || -10;
    this.setTranslate(null, this.translate.y - num);
  },

  resetTransform (notTips) {
    const t = this;

    if (t.isSameAsDefaultTransform() && Object.keys(t.historyTransform).length) {
      /* Restore the Transform value in the history record*/
      Object.keys(t.historyTransform).forEach(key => {
        if (isObj$1(t.historyTransform[key])) {
          Object.keys(t.historyTransform[key]).forEach(subKey => {
            t[key][subKey] = t.historyTransform[key][subKey];
          });
        } else {
          t[key] = t.historyTransform[key];
        }
      });
    } else {
      /* Restore to default Transform value*/
      const defaultTransform = clone(t.defaultTransform);
      Object.keys(defaultTransform).forEach(key => {
        t[key] = defaultTransform[key];
      });
    }

    t.setTransform(notTips);
  },

  /**
   * Rated screen size
   * @param perFps {Number} - optional. Default is 1, which means freeze at the next frame. If it is -1, it means freeze at the previous frame.
   */
  freezeFrame (perFps) {
    perFps = perFps || 1;
    const t = this;
    const player = t.player();

    /* Skip frame */
    player.currentTime += Number(perFps / t.fps);

    /* Rated screen */
    if (!player.paused) player.pause();

    /* Some players will automatically play when they find that the position of the picture has changed, so you need to suspend the playback operation at this time*/
    player._hangUp_ && player._hangUp_('play', 400);

    if (perFps === 1) {
      t.tips(i18n.t('tipsMsg.nextframe'));
    } else if (perFps === -1) {
      t.tips(i18n.t('tipsMsg.previousframe'));
    } else {
      t.tips(i18n.t('tipsMsg.stopframe') + perFps);
    }
  },

  autoGotoBufferedTime: false,
  toggleAutoGotoBufferedTime () {
    const t = this;
    t.autoGotoBufferedTime = !t.autoGotoBufferedTime;
    t.tips(t.autoGotoBufferedTime ? i18n.t('autoGotoBufferedTime') : i18n.t('disableAutoGotoBufferedTime'));
  },

  /**
   * Switch to picture-in-picture function
   */
  togglePictureInPicture () {
    const player = this.player();
    if (window._isPictureInPicture_ && document.pictureInPictureElement) {
      document.exitPictureInPicture().then(() => {
        window._isPictureInPicture_ = null;
      }).catch((e) => {
        window._isPictureInPicture_ = null;
        debug.error('[togglePictureInPicture]', e);
      });
    } else {
      player.requestPictureInPicture && player.requestPictureInPicture().then(() => {
        window._isPictureInPicture_ = true;
      }).catch((e) => {
        window._isPictureInPicture_ = null;
        debug.error('[togglePictureInPicture]', e);
      });
    }
  },

  /* Play the next video. This function is not available by default. It is available only when the next field is configured in TCC*/
  setNextVideo () {
    const isDo = TCC.doTask('next');
    if (!isDo) {
      debug.log('The current webpage does not support the one-click play next video function~');
    }
  },

  /* Switch playback status */
  switchPlayStatus () {
    const t = this;
    const player = t.player();

    if (TCC.doTask('switchPlayStatus')) {
      // debug.log('[TCC][switchPlayStatus]', 'suc')
      return
    }

    if (player.paused) {
      if (TCC.doTask('play')) ; else {
        if (t.mediaPlusApi) {
          t.mediaPlusApi.lockPause(400);
          t.mediaPlusApi.applyPlay();
        } else {
          /* Suspend the pause operation of other logic to ensure that the playback status is effective*/
          if (player._hangUp_ instanceof Function) {
            player._hangUp_('pause', 400);
            player._unHangUp_('play');
          }

          player.play();
        }

        t.tips(i18n.t('tipsMsg.play'));
      }

      TCC.doTask('afterPlay');
    } else {
      if (TCC.doTask('pause')) ; else {
        if (t.mediaPlusApi) {
          t.mediaPlusApi.lockPlay(400);
          t.mediaPlusApi.applyPause();
        } else {
          /* Suspend the playback operation of other logic to ensure that the pause state is effective*/
          if (player._hangUp_ instanceof Function) {
            player._hangUp_('play', 400);
            player._unHangUp_('pause');
          }

          player.pause();
        }

        t.tips(i18n.t('tipsMsg.pause'));
      }

      TCC.doTask('afterPause');
    }
  },

  isAllowRestorePlayProgress: function () {
    const allowRestoreVal = configManager.get(`media.allowRestorePlayProgress.${window.location.host}`);
    return allowRestoreVal === null || allowRestoreVal
  },
  /* Switch the state of automatically resuming playback progress*/
  switchRestorePlayProgressStatus: function () {
    const t = h5Player;
    let isAllowRestorePlayProgress = t.isAllowRestorePlayProgress();

    if (isInCrossOriginFrame()) {
      isAllowRestorePlayProgress = false;
    } else {
      /* Invert the value */
      isAllowRestorePlayProgress = !isAllowRestorePlayProgress;
    }

    configManager.set(`media.allowRestorePlayProgress.${window.location.host}`, isAllowRestorePlayProgress);

    /* Operation Tips */
    if (isAllowRestorePlayProgress) {
      t.tips(i18n.t('tipsMsg.arpl'));
      t.setPlayProgress(t.player());
    } else {
      t.tips(i18n.t('tipsMsg.drpl'));
    }
  },
  tipsClassName: 'html_player_enhance_tips',

  getTipsContainer: function (videoEl) {
    const t = h5Player;
    const player = videoEl || t.player();
    // There are too many disadvantages to using getContainer to obtain the parent node, so it is temporarily abandoned
    // const _tispContainer_ = player._tispContainer_  ||  getContainer(player);

    let bitchContainer = player.parentNode || player;

    /* If the parent node is an element with no length or width, search one level up*/
    const containerBox = tispContainer.getBoundingClientRect();
    if ((!containerBox.width || !containerBox.height) && tispContainer.parentNode) {
      tispContainer = tispContainer.parentNode;
    }

    return tispContainer
  },
  tips: function (str) {
    const t = h5Player;
    const player = t.player();
    if (!player) {
      debug.log('h5Player Tips:', str);
      return true
    }

    const isAudio = t.isAudioInstance();
    const parentNode = isAudio ? document.body : t.getTipsContainer();

    if (parentNode === player) {
      debug.info('Get tips package container exception:', player, str);
      return false
    }

    let backupStyle = '';
    if (!isAudio) {
      //Fixed the abnormal position of some prompt buttons
      const defStyle = parentNode.getAttribute('style') || '';

      backupStyle = parentNode.getAttribute('style-backup') || '';
      if (!backupStyle) {
        let backupSty = defStyle || 'style-backup: none';
        const backupStyObj = inlineStyleToObj(backupSty);

        /**
         * Fixed the problem of getting wrong style due to cache timing
         * For example: https://www.xuetangx.com/
         */
        if (backupStyObj.opacity === '0') {
          backupStyObj.opacity = '1';
        }
        if (backupStyObj.visibility === 'hidden') {
          backupStyObj.visibility = 'visible';
        }

        backupSty = objToInlineStyle(backupStyObj);

        parentNode.setAttribute('style-backup', backupSty);
        backupStyle = defStyle;
      } else {
        /* If defStyle is modified externally, the backup style needs to be updated*/
        if (defStyle && !defStyle.includes('style-backup')) {
          backupStyle = defStyle;
        }
      }

      const newStyleArr = backupStyle.split(';');

      const oldPosition = parentNode.getAttribute('def-position') || window.getComputedStyle(parentNode).position;
      if (parentNode.getAttribute('def-position') === null) {
        parentNode.setAttribute('def-position', oldPosition || '');
      }
      if (['static', 'inherit', 'initial', 'unset', ''].includes(oldPosition)) {
        newStyleArr.push('position: relative');
      }

      const playerBox = player.getBoundingClientRect();
      const parentNodeBox = parentNode.getBoundingClientRect();
      /* When height and width do not exist, give the wrapped node a minimum height and width to ensure that the prompt can be displayed normally*/
      if (!parentNodeBox.width || !parentNodeBox.height) {
        newStyleArr.push('min-width:' + playerBox.width + 'px');
        newStyleArr.push('min-height:' + playerBox.height + 'px');
      }

      parentNode.setAttribute('style', newStyleArr.join(';'));

      const newPlayerBox = player.getBoundingClientRect();
      if (Math.abs(newPlayerBox.height - playerBox.height) > 50) {
        parentNode.setAttribute('style', backupStyle);
        // debug.info('Applying the new style caused serious deviations in the player's height and width. The style has been restored:', player, playerBox, newPlayerBox)
      }
    }

    const tipsSelector = '.' + t.tipsClassName;

    /* When multiple tips elements appear, remove all of them*/
    const tipsList = document.querySelectorAll(tipsSelector);
    if (tipsList.length > 1) {
      tipsList.forEach(tipsItem => {
        tipsItem.remove();
      });
    }

    let tipsDom = parentNode.querySelector(tipsSelector);

    /* If the DOM is not initialized, initialize it*/
    if (!tipsDom) {
      t.initTips();
      tipsDom = parentNode.querySelector(tipsSelector);
      if (!tipsDom) {
        debug.log('init h5player tips dom error...');
        return false
      }
    }

    const style = tipsDom.style;
    tipsDom.innerText = str;

    for (let i = 0; i < 3; i++) {
      if (this.on_off[i]) clearTimeout(this.on_off[i]);
    }

    function showTips () {
      style.display = 'block';
      t.on_off[0] = setTimeout(function () {
        style.opacity = 1;
      }, 50);
      t.on_off[1] = setTimeout(function () {
        // Hide the prompt box and restore the style
        style.opacity = 0;
        style.display = 'none';
        if (backupStyle) {
          parentNode.setAttribute('style', backupStyle);
        }
      }, 2000);
    }

    if (style.display === 'block') {
      style.display = 'none';
      clearTimeout(this.on_off[3]);
      t.on_off[2] = setTimeout(function () {
        showTips();
      }, 100);
    } else {
      showTips();
    }
  },

  /* Set the prompt DOM style */
  initTips: function() {
    const t = h5Player;
    const isAudio = t.isAudioInstance();
    const parentNode = isAudio ? document.body : t.getTipsContainer();
    if (parentNode.querySelector('.' + t.tipsClassName)) return

    // top: 50%;
    // left: 50%;
    // transform: translate(-50%,-50%);
    let tipsStyle = `
      position: absolute;
      z-index: 999999;
      font-size: ${t.fontSize || 16}px;
      padding: 5px 10px;
      background: rgba(0,0,0,0.4);
      color:white;
      top: 0;
      left: 0;
      transition: all 500ms ease;
      opacity: 0;
      border-bottom-right-radius: 5px;
      display: none;
      -webkit-font-smoothing: subpixel-antialiased;
      font-family: 'microsoft yahei', Verdana, Geneva, sans-serif;
      -webkit-user-select: none;
    `;

    if (isAudio) {
      tipsStyle = `
        position: fixed;
        z-index: 999999;
        font-size: ${t.fontSize || 16}px;
        padding: 5px 10px;
        background: rgba(0,0,0,0.4);
        color:white;
        bottom: 0;
        right: 0;
        transition: all 500ms ease;
        opacity: 0;
        border-top-left-radius: 5px;
        display: none;
        -webkit-font-smoothing: subpixel-antialiased;
        font-family: 'microsoft yahei', Verdana, Geneva, sans-serif;
        -webkit-user-select: none;
      `;
    }

    const tips = document.createElement('div');
    tips.setAttribute('style', tipsStyle);
    tips.setAttribute('class', t.tipsClassName);
    parentNode.appendChild(tips);
  },
  on_off: new Array(3),
  fps: 30,
  /* Filter effect*/
  filter: {
    key: [1, 1, 1, 0, 0],
    setup: function () {
      let view = 'brightness({0}) contrast({1}) saturate({2}) hue-rotate({3}deg) blur({4}px)';
      for (let i = 0; i < 5; i++) {
        view = view.replace('{' + i + '}', String(this.key[i]));
        this.key[i] = Number(this.key[i]);
      }
      h5Player.player().style.filter = view;
    },
    reset: function () {
      this.key[0] = 1;
      this.key[1] = 1;
      this.key[2] = 1;
      this.key[3] = 0;
      this.key[4] = 0;
      this.setup();
    }
  },

  setFilter (item, num, isDown) {
    if (![0, 1, 2, 3, 4].includes(item) || typeof num !== 'number') {
      debug.error('[setFilter]', 'Parameter error', item, num);
      return false
    }

    /* If the flag is down, it will automatically take a negative value*/
    if (isDown === true) {
      if (num && num > 0) { num = -num; }
    }

    const nameMap = {
      0: 'brightness',
      1: 'contrast',
      2: 'saturation',
      3: 'hue',
      4: 'blur'
    };

    const t = this;
    t.filter.key[item] += num || 0.1;
    t.filter.key[item] = t.filter.key[item].toFixed(2);

    if (t.filter.key[item] < 0 && nameMap[item] !== 'hue') {
      t.filter.key[item] = 0;
    }

    t.filter.setup();
    t.tips(i18n.t(`tipsMsg.${nameMap[item]}`) + parseInt(t.filter.key[item] * 100) + '%');
  },

  /* Set the brightness of the video */
  setBrightness (num) {
    this.setFilter(0, num);
  },

  /* Increase the brightness of the video */
  setBrightnessUp (num) {
    this.setFilter(0, num || 0.1);
  },

  /* Reduce the brightness of the video */
  setBrightnessDown (num) {
    this.setFilter(0, num || -0.1, true);
  },

  /* Set the video contrast */
  setContrast (num) {
    this.setFilter(1, num);
  },

  /* Increase the contrast of the video */
  setContrastUp (num) {
    this.setFilter(1, num || 0.1);
  },

  /* Reduce the contrast of the video */
  setContrastDown (num) {
    this.setFilter(1, num || -0.1, true);
  },

  /* Set saturation */
  setSaturation (num) {
    this.setFilter(2, num);
  },

  /* Increase saturation */
  setSaturationUp (num) {
    this.setFilter(2, num || 0.1);
  },

  /* Reduce saturation */
  setSaturationDown (num) {
    this.setFilter(2, num || -0.1, true);
  },

  /* Set hue */
  setHue (num) {
    this.setFilter(3, num);
  },

  /* Increase hue */
  setHueUp (num) {
    this.setFilter(3, num || 1);
  },

  /*Reduce hue*/
  setHueDown (num) {
    this.setFilter(3, num || -1, true);
  },

  /* Set the blur level */
  setBlur (num) {
    this.setFilter(4, num);
  },

  /* Increase blur */
  setBlurUp (num) {
    this.setFilter(4, num || 1);
  },

  /* Reduce blur */
  setBlurDown (num) {
    this.setFilter(4, num || -1, true);
  },

  resetFilterAndTransform () {
    const t = this;

    t.resetTransform(true);
    t.filter.reset();
    t.tips(i18n.t('tipsMsg.imgattrreset'));
  },

  mediaDownload () {
    if (configManager.get('enhance.allowExperimentFeatures')) {
      debug.warn('[experimentFeatures][mediaDownload]');
      mediaDownload(this.player());
    } else {
      const result = window.confirm(i18n.t('useMediaDownloadTips'));
      if (result) {
        configManager.setGlobalStorage('enhance.allowExperimentFeatures', !configManager.get('enhance.allowExperimentFeatures'));
        window.location.reload();
      }
    }
  },

  capture () {
    const player = this.player();
    videoCapturer.capture(player, true);

    /* Pause screen */
    if (!player.paused && !document.pictureInPictureElement && document.visibilityState !== 'visible') {
      this.freezeFrame();
    }
  },

  _isFoucs: false,

  /* Player focus event*/
  isFoucs: function () {
    const t = h5Player;
    const player = t.player();
    if (!player) return

    player.onmouseenter = function (e) {
      h5Player._isFoucs = true;
    };
    player.onmouseleave = function (e) {
      h5Player._isFoucs = false;
    };
  },
  /* Player event responder */
  palyerTrigger: function (player, event) {
    if (!player || !event) return
    const t = h5Player;
    const keyCode = event.keyCode;
    const key = event.key.toLowerCase();

    if (event.shiftKey && !event.ctrlKey && !event.altKey && !event.metaKey) {
      // Full screen web page
      if (key === 'enter') {
        t.setWebFullScreen();
      }

      // Enter or exit picture-in-picture mode
      if (key === 'p') {
        t.togglePictureInPicture();
      }

      // Take a screenshot and download it
      if (key === 's') {
        t.capture();
      }

      if (key === 'r') {
        t.switchRestorePlayProgressStatus();
      }

      if (key === 'm') {
        /* Vertical mirror flip */
        t.setMirror(true);
      }

      if (key === 'd') {
        t.mediaDownload();
      }

      // Video screen zoom related events
      const allowKeys = ['x', 'c', 'z', 'arrowright', 'arrowleft', 'arrowup', 'arrowdown'];
      if (!allowKeys.includes(key)) return

      t.scale = Number(t.scale);
      switch (key) {
        // shift+X: video zoom out -0.1
        case 'x':
          t.setScaleDown();
          break
        // shift+C: video zoom +0.1
        case 'c':
          t.setScaleUp();
          break
        // shift+Z: video returns to normal size
        case 'z':
          t.resetTransform();
          break
        case 'arrowright':
          t.setTranslateRight();
          break
        case 'arrowleft':
          t.setTranslateLeft();
          break
        case 'arrowup':
          t.setTranslateUp();
          break
        case 'arrowdown':
          t.setTranslateDown();
          break
      }

      // Stop event bubbling
      event.stopPropagation();
      event.preventDefault();
      return true
    }

    // ctrl+right arrow key→: fast forward 30 seconds
    if (event.ctrlKey && keyCode === 39) {
      t.setCurrentTimeUp(t.skipStep * 6);
    }
    // ctrl+left arrow key←: go back 30 seconds
    if (event.ctrlKey && keyCode === 37) {
      t.setCurrentTimeDown(-t.skipStep * 6);
    }

    // ctrl+up arrow key↑: volume increases by 20%
    if (event.ctrlKey && keyCode === 38) {
      t.setVolumeUp(0.2);
    }
    // Press the arrow key↓: volume decreases by 20%
    if (event.ctrlKey && keyCode === 40) {
      t.setVolumeDown(-0.2);
    }

    // Prevent conflicts with other irrelevant key combinations
    if (event.altKey || event.ctrlKey || event.shiftKey || event.metaKey) return

    // Right arrow key →: fast forward 5 seconds
    if (keyCode === 39) {
      t.setCurrentTimeUp();
    }
    // Left arrow key←: go back 5 seconds
    if (keyCode === 37) {
      t.setCurrentTimeDown();
    }

    // ↑ on the arrow key: volume increases by 10%
    if (keyCode === 38) {
      t.setVolumeUp(0.05);
    }
    // Press the arrow key↓: volume decreases by 10%
    if (keyCode === 40) {
      t.setVolumeDown(-0.05);
    }

    // Spacebar: Pause/Play
    if (keyCode === 32) {
      t.switchPlayStatus();
    }

    // Button X: slow down playback -0.1
    if (keyCode === 88) {
      t.setPlaybackRateDown();
    }
    // Button C: speed up playback +0.1
    if (keyCode === 67) {
      t.setPlaybackRateUp();
    }
    // Button Z: play at normal speed
    if (keyCode === 90) {
      t.resetPlaybackRate();
    }

    // Press 1-4 to set the playback speed to 49-52; 97-100
    if ((keyCode >= 49 && keyCode <= 52) || (keyCode >= 97 && keyCode <= 100)) {
      t.setPlaybackRatePlus(event.key);
    }

    // Button F: next frame
    if (keyCode === 70) {
      t.freezeFrame(1);
    }
    // Button D: Previous frame
    if (keyCode === 68) {
      t.freezeFrame(-1);
    }

    // Button E: Brightness increase by %
    if (keyCode === 69) {
      t.setBrightnessUp();
    }
    // Button W: Brightness reduction %
    if (keyCode === 87) {
      t.setBrightnessDown();
    }

    // Button T: increase contrast by %
    if (keyCode === 84) {
      t.setContrastUp();
    }
    // Button R: Contrast reduction%
    if (keyCode === 82) {
      t.setContrastDown();
    }

    // Button U: Saturation increase %
    if (keyCode === 85) {
      t.setSaturationUp();
    }
    // Button Y: saturation reduction %
    if (keyCode === 89) {
      t.setSaturationDown();
    }

    // Button O: Hue increases by 1 degree
    if (keyCode === 79) {
      t.setHueUp();
    }
    // Button I: Hue decreases by 1 degree
    if (keyCode === 73) {
      t.setHueDown();
    }

    // Button K: increase blur by 1 px
    if (keyCode === 75) {
      t.setBlurUp();
    }
    // Button J: Blur reduction by 1 px
    if (keyCode === 74) {
      t.setBlurDown();
    }

    // Button Q: Image reset
    if (keyCode === 81) {
      t.resetFilterAndTransform();
    }

    // Button S: Rotate the screen 90 degrees
    if (keyCode === 83) {
      t.setRotate();
    }

    /* Horizontal mirror flip */
    if (keyCode === 77) {
      t.setMirror();
    }

    // Press Enter to enter full screen
    if (keyCode === 13) {
      t.setFullScreen();
    }

    if (key === 'n') {
      t.setNextVideo();
    }

    // Stop event bubbling
    event.stopPropagation();
    event.preventDefault();
    return true
  },

  /* Run the custom shortcut key operation, if it runs, it will return true */
  runCustomShortcuts: function (player, event) {
    if (!player || !event) return
    const key = event.key.toLowerCase();
    const taskConf = TCC.getTaskConfig();
    const confIsCorrect = isObj$1(taskConf.shortcuts) &&
      Array.isArray(taskConf.shortcuts.register) &&
      taskConf.shortcuts.callback instanceof Function;

    /* Determine whether the currently triggered shortcut key has been registered*/
    function isRegister () {
      const list = taskConf.shortcuts.register;

      /*Currently triggered key combination*/
      const combineKey = [];
      if (event.ctrlKey) {
        combineKey.push('ctrl');
      }
      if (event.shiftKey) {
        combineKey.push('shift');
      }
      if (event.altKey) {
        combineKey.push('alt');
      }
      if (event.metaKey) {
        combineKey.push('command');
      }

      combineKey.push(key);

      /* Determine through a loop whether the currently triggered key combination is exactly the same as the registered key combination*/
      let hasReg = false;
      list.forEach((shortcut) => {
        const regKey = shortcut.split('+');
        if (combineKey.length === regKey.length) {
          let allMatch = true;
          regKey.forEach((key) => {
            if (!combineKey.includes(key)) {
              allMatch = false;
            }
          });
          if (allMatch) {
            hasReg = true;
          }
        }
      });

      return hasReg
    }

    if (confIsCorrect && isRegister()) {
      // Execute custom shortcut key operation
      const isDo = TCC.doTask('shortcuts', {
        event,
        player,
        h5Player
      });

      if (isDo) {
        event.stopPropagation();
        event.preventDefault();
      }

      return isDo
    } else {
      return false
    }
  },

  /* Button response method */
  keydownEvent: function (event) {
    const t = h5Player;
    const keyCode = event.keyCode;
    // const key = event.key.toLowerCase()
    const player = t.player();

    /* Do not execute any shortcut keys in editable elements*/
    const target = event.composedPath ? event.composedPath()[0] || event.target : event.target;
    if (t.__disableHotkeysTemporarily__ || isEditableTarget(target)) return

    /* Broadcast key messages for cross-domain control*/
    monkeyMsg.send('globalKeydownEvent', event, 0);

    if (!player) {
      if (t.hasCrossOriginVideoDetected) {
        if (!configManager.get('enhance.allowCrossOriginControl')) {
          return false
        }

        /**
         * Use the matching ability of the hotkey runner to decide whether to disable event bubbling and prevent default events
         * Solve the problem that other default shortcut keys respond abnormally when in cross-TAB and cross-domain control
         */
        if (t.hotkeysRunner && t.hotkeysRunner.run) {
          t.hotkeysRunner.run({
            event,
            stopPropagation: true,
            preventDefault: true
          });
        } else {
          t.registerHotkeysRunner();
          event.stopPropagation();
          event.preventDefault();
        }

        // debug.log('The current page has detected a cross-domain restricted video, and the default event and event bubbling still need to be prevented')
      }

      // debug.log('No media element available, no related operations performed')
      return false
    }

    /* Toggle the plugin's enabled state */
    if (event.ctrlKey && keyCode === 32) {
      t.enable = !t.enable;
      if (t.enable) {
        t.tips(i18n.t('tipsMsg.onplugin'));
      } else {
        t.tips(i18n.t('tipsMsg.offplugin'));
      }
    }

    if (!t.enable) {
      debug.log('h5Player is disabled~');
      return false
    }

    // Press ctrl+\ to enter focus or cancel focus state, used in scenes where the video label is blocked
    if (event.ctrlKey && keyCode === 220) {
      t.globalMode = !t.globalMode;
      if (t.globalMode) {
        t.tips(i18n.t('tipsMsg.globalmode') + ' ON');
      } else {
        t.tips(i18n.t('tipsMsg.globalmode') + ' OFF');
      }
    }

    /* In non-global mode, shortcut key operations will not be executed if not focused*/
    if (!t.globalMode && !t._isFoucs) return

    /* Determine whether the custom shortcut key operation is executed. If so, no longer respond to the default defined operation*/
    if (t.runCustomShortcuts(player, event) === true) return

    /* The hotkey runner will not execute subsequent palyerTriggers when it matches the relevant execution task */
    if (t.hotkeysRunner && t.hotkeysRunner.run) {
      const matchResult = t.hotkeysRunner.run({
        event,
        target: t,
        stopPropagation: true,
        preventDefault: true,
        conditionHandler (condition) {
          // TODO Improve the conditional callback logic
          if (condition) {
            return true
          }
        }
      });

      if (matchResult) {
        debug.info('[hotkeysRunner][matchResult]', matchResult);
        return true
      }
    } else {
      /* Unused keys do not listen for any events*/
      if (!isRegisterKey(event)) { return false }

      /* Respond to player related operations*/
      t.palyerTrigger(player, event);
    }
  },

  /**
   * Get playback progress
   * @param player - optional corresponding h5 player object. If not passed, the entire playback progress table will be obtained. If passed, the playback progress of the current player will be obtained.
   */
  getPlayProgress: function (player) {
    const progressMap = configManager.get('media.progress') || {};

    if (!player) {
      return progressMap
    } else {
      const keyName = window.location.href + player.duration;
      if (progressMap[keyName]) {
        /* For live video streams, the recorded duration may be inconsistent with the current video duration. In this case, return currentTime to ignore the playback progress.*/
        if (Number.isNaN(Number(player.duration)) || Number(progressMap[keyName].duration) !== Number(player.duration)) {
          return player.currentTime
        } else {
          return progressMap[keyName].progress
        }
      } else {
        return player.currentTime
      }
    }
  },
  /* Play progress recorder */
  playProgressRecorder: function (player) {
    const t = h5Player;
    clearTimeout(player._playProgressTimer_);
    function recorder (player) {
      player._playProgressTimer_ = setTimeout(function () {
        /* Videos shorter than two minutes will not record playback progress*/
        const isToShort = !player.duration || Number.isNaN(Number(player.duration)) || player.duration < 120;
        const isLeave = document.visibilityState !== 'visible' && player.paused;

        if (!t.isAllowRestorePlayProgress() || isToShort || isLeave) {
          recorder(player);
          return true
        }

        const progressMap = t.getPlayProgress() || {};
        const list = Object.keys(progressMap);
        const keyName = window.location.href + player.duration;

        /**
         * Mark the value recorded in progressMap for the first time
         * Used to prevent the wrong recovery logic from being executed when manually switching the playback progress
         */
        if (!progressMap[keyName]) {
          t._firstProgressRecord_ = keyName;
          t._hasRestorePlayProgress_ = keyName;
        }

        /* Only save the playback progress of the last 10 videos*/
        if (list.length > 10) {
          /*According to the updated timestamp, retrieve the earliest record item for adding playback progress*/
          let timeList = [];
          list.forEach(function (keyName) {
            progressMap[keyName] && progressMap[keyName].t && timeList.push(progressMap[keyName].t);
          });
          timeList = quickSort(timeList);
          const timestamp = timeList[0];

          /* Delete the earliest added record*/
          list.forEach(function (keyName) {
            if (progressMap[keyName].t === timestamp) {
              delete progressMap[keyName];
            }
          });
        }

        /* Record the current playback progress*/
        progressMap[keyName] = {
          progress: player.currentTime,
          duration: player.duration,
          t: new Date().getTime()
        };

        /*Store playback progress table*/
        configManager.setLocalStorage('media.progress', progressMap);

        /* Loop listening */
        recorder(player);
      }, 1000 * 2);
    }
    recorder(player);
  },

  /* Set the playback progress */
  setPlayProgress: function (player) {
    const t = h5Player;
    if (!player || !player.duration || Number.isNaN(player.duration)) return

    const curTime = Number(t.getPlayProgress(player));

    /* The time to restore progress is too short or too long as player.duration, which does not meet the specification, and the progress restoration operation will not be performed*/
    if (!curTime || Number.isNaN(curTime) || curTime < 10 || curTime >= player.duration) return

    /* Ignore the situation where the recovery progress time is not much different from the current playback progress time*/
    if (Math.abs(curTime - player.currentTime) < 2) {
      return false
    }

    const progressKey = window.location.href + player.duration;
    t._hasRestorePlayProgress_ = t._hasRestorePlayProgress_ || '';

    if (t._hasRestorePlayProgress_ === progressKey || t._firstProgressRecord_ === progressKey) {
      if (t._hasRestorePlayProgress_ === progressKey) {
        t._firstProgressRecord_ = '';
      }
      return false
    }

    if (t.isAllowRestorePlayProgress()) {
      // 1.5s less than curTime allows users to know that it is the previous screen, so that they feel connected
      player.currentTime = curTime - 1.5;
      t._hasRestorePlayProgress_ = progressKey;
      t.tips(i18n.t('tipsMsg.playbackrestored'));
    } else {
      t.tips(i18n.t('tipsMsg.playbackrestoreoff'));
    }
  },

  setPlayerInstance (el) {
    if (!el && !el.getBoundingClientRect) {
      return false
    }

    const t = h5Player;

    if (t.player() === el) {
      return false
    }

    if (!t.playerInstance && isMediaElement(el)) {
      t.playerInstance = el;
      t.initPlayerInstance(false);
      return true
    }

    if (isVideoElement(el)) {
      const elParentNode = t.getTipsContainer(el);
      const elInfo = el.getBoundingClientRect();
      const parentElInfo = elParentNode && elParentNode.getBoundingClientRect();
      if (elInfo && elInfo.width > 200 && parentElInfo && parentElInfo.width > 200) {
        t.playerInstance = el;
        t.initPlayerInstance(false);
      }
    } else if (isAudioElement(el)) {
      if (isAudioElement(t.playerInstance) || (isVideoElement(t.playerInstance) && !t.playerInstance.isConnected)) {
        t.playerInstance = el;
        t.initPlayerInstance(false);
      }
    }
  },

  /**
   * Whether the video element appears in the viewport's observation object, used to optimize instance switching of multiple video instances
   * https://developer.mozilla.org/zh-CN/docs/Web/API/Intersection_Observer_API
   */
  intersectionObserver: new IntersectionObserver(function (entries, observer) {
    const t = h5Player;
    // debug.log('[intersectionObserver]', entries)

    let tmpIntersectionRatio = 0;
    entries.forEach(entrie => {
      entrie.target._intersectionInfo_ = entrie;

      if (entrie.intersectionRatio > tmpIntersectionRatio && entrie.intersectionRatio > 0.4) {
        tmpIntersectionRatio = entrie.intersectionRatio;

        const oldPlayer = t.player();
        if (oldPlayer && oldPlayer._intersectionInfo_ && tmpIntersectionRatio < oldPlayer._intersectionInfo_.intersectionRatio) {
          /* If the view range of the new instance is smaller than the old one, do not switch instances*/
          return
        }

        /* Switch video instance */
        const toggleResult = t.setPlayerInstance(entrie.target);
        toggleResult && debug.log('[intersectionObserver] Switch video instance', entrie);
      }
    });
  }, {
    threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]
  }),

  /**
   * Check if the h5 player exists
   * @param callback
   */
  detecH5Player: function () {
    const t = this;
    const playerList = t.getPlayerList();

    if (playerList.length) {
      // debug.log('HTML5 video detected!', location.href, h5Player, playerList)

      /* Single video instance tag case*/
      if (playerList.length === 1) {
        t.playerInstance = playerList[0];
        t.initPlayerInstance(true);
      }

      /* Multiple video instance tags*/
      playerList.forEach(function (player) {
        /* Reassign the instance when the mouse moves over it*/
        if (!player._hasMouseRedirectEvent_) {
          player.addEventListener('mouseenter', function (event) {
            t.setPlayerInstance(event.target);
          });
          player._hasMouseRedirectEvent_ = true;
        }

        /* Redirect the player to the instance when it starts playing*/
        if (!player._hasPlayingRedirectEvent_) {
          player.addEventListener('playing', function (event) {
            const media = event.target;

            /* For very short audio and video, it may be a special effect of some operation feedback, and the playback instance switch can be ignored*/
            if (media.duration && media.duration < 8) {
              return false
            }

            t.setPlayerInstance(media);
          });
          player._hasPlayingRedirectEvent_ = true;
        }

        /* Switch video instance when observed in browser viewport */
        if (!player._hasIntersectionObserver_) {
          t.intersectionObserver.observe(player);
          player._hasIntersectionObserver_ = true;
        }
      });

      if (isInCrossOriginFrame()) {
        /* Broadcast the message that H5Player is detected*/
        monkeyMsg.send('videoDetected', {
          src: t.playerInstance.src
        });
      }

      registerH5playerMenus(h5Player);
    }
  },

  /* Respond to the broadcast from the key message */
  bindFakeEvent () {
    const t = this;
    if (t._hasBindFakeEvent_) return

    /* Trigger simulated events from message broadcast to achieve cross-domain and cross-tab control of video playback*/
    let triggerFakeEvent = function (name, oldVal, newVal, remote) {
      const player = t.player();
      if (player && !t.__disableHotkeysTemporarily__) {
        const fakeEvent = newVal.data;
        fakeEvent.stopPropagation = () => { };
        fakeEvent.preventDefault = () => { };
        t.palyerTrigger(player, fakeEvent);

        debug.log('Response to cross-Tab/cross-domain key control information:', newVal);
      }
    };

    /**
     * Operation throttling control, reducing the frequency of key messages,
     * Note that after turning on throttling control, compound keys (such as shift+s) will not work
     */
    if (!crossTabCtl.hasOpenPictureInPicture() && !t.hasCrossOriginVideoDetected) {
      triggerFakeEvent = throttle(triggerFakeEvent, 80);
    }

    /* Register to respond to events broadcast from key messages*/
    monkeyMsg.on('globalKeydownEvent', async (name, oldVal, newVal, remote) => {
      if (remote) {
        if (isInCrossOriginFrame()) {
          /**
           * Both are in the same cross-domain restricted page and are visible. They are likely to be in the same tab, but not 100%
           * If the tabId is the same, then 100% of them are under the same tab
           */
          if (document.visibilityState === 'visible' && newVal.originTab) {
            triggerFakeEvent(name, oldVal, newVal, remote);
          }
        } else if (crossTabCtl.hasOpenPictureInPicture()) {
          /* Control the video playback in the picture-in-picture across tabs*/
          if (!newVal.originTab && (document.pictureInPictureElement || t.isLeavepictureinpictureAwhile())) {
            triggerFakeEvent(name, oldVal, newVal, remote);
          }
        }
      }
    });

    t._hasBindFakeEvent_ = true;
  },

  /* Binding related events */
  bindEvent: function () {
    const t = this;
    if (t._hasBindEvent_) return

    document.removeEventListener('keydown', t.keydownEvent);
    document.addEventListener('keydown', t.keydownEvent, true);

    /* Compatible with iframe operation */
    if ( isInIframe ( ) && ! isInCrossOriginFrame ()) {
      window.top.document.removeEventListener('keydown', t.keydownEvent);
      window.top.document.addEventListener('keydown', t.keydownEvent, true);
    }

    t._hasBindEvent_ = true;
  },

  setCustomConfiguration (config, tag = 'Default') {
    if (!config) return false

    const configuration = configManager.mergeDefConf(config.customConfiguration);
    const taskConf = mergeTaskConf(config.customTaskControlCenter);
    if (TCC && TCC.setTaskConf) {
      TCC.setTaskConf(taskConf);
    }

    h5Player.hasSetCustomConfiguration = tag;
    debug.info(`[CustomConfiguration][${tag}]`, configuration, taskConf);
  },

  mergeExternalConfiguration (config, tag = 'Default') {
    if (!config || !configManager.getGlobalStorage('enhance.allowExternalCustomConfiguration')) return false
    h5Player.setCustomConfiguration(config, 'External');
    h5Player.hasExternalCustomConfiguration = tag;
  },

  init: function (global) {
    const t = this;

    if (window.unsafeWindow && window.unsafeWindow.__h5PlayerCustomConfiguration__) {
      !t.hasExternalCustomConfiguration && t.mergeExternalConfiguration(window.unsafeWindow.__h5PlayerCustomConfiguration__);
    }

    if (TCC && TCC.doTask('disable') === true) {
      debug.info(`[TCC][disable][${location.host}] has disabled the running of video detection logic on this website. You can view the relevant configuration in the Task Configuration Center for details`);
      return true
    }

    if (!global) {
      /* Detect whether there is an H5 player*/
      t.detecH5Player();
      return true
    }

    if (configManager.get('debug') === true) {
      window._debugMode_ = true;
      t.mountToGlobal();
    }

    setFakeUA();

    /* Initialize the task configuration center*/
    TCC = h5PlayerTccInit(t);

    /* Bind keyboard events */
    if (configManager.get('enableHotkeys') !== false) {
      t.bindEvent();
      t.bindFakeEvent();
    } else {
      debug.warn('Shortcut key capability has been disabled');
    }

    /* Respond to video detection events from cross-domain restrictions*/
    monkeyMsg.on('videoDetected', async (name, oldVal, newVal, remote) => {
      if (newVal.originTab) {
        t.hasCrossOriginVideoDetected = true;
      }

      debug.log('[hasCrossOriginVideoDetected]', t, name, oldVal, newVal, remote);
    });

    /* When the page is in the visual state, initialize the custom playback logic*/
    document.addEventListener('visibilitychange', function () {
      h5Player.initAutoPlay();
    });

    if (window.unsafeWindow && configManager.getGlobalStorage('enhance.allowExternalCustomConfiguration')) {
      window.unsafeWindow.__setH5PlayerCustomConfiguration__ = t.mergeExternalConfiguration;
    }
  }
};

async function h5PlayerInit () {
  const isEnabled = configManager.get('enable');
  const blackUrlList = configManager.get('blacklist.urls') || [];
  const blackDomainList = configManager.get('blacklist.domains') || [];
  const isInBlackList = blackUrlList.includes(location.href) || blackDomainList.includes(location.host);

  if (isInBlackList) {
    console.warn(`[h5player][config][blacklist][${location.href}] \nThe current page has been added to the blacklist. The relevant logic of the h5player enhanced script will not be executed. If you need to enable it, please remove the corresponding address from the blacklist in the configuration`);
  }

  try {
    if (isEnabled && !isInBlackList) {
      mediaCore.init(function (mediaElement) {
        h5Player.init();
      });

      if (configManager.get('enhance.allowExperimentFeatures') && configManager.get('download.enable')) {
        mediaSource.init();
        debug.warn(`[experimentFeatures][warning] ${i18n.t('experimentFeaturesWarning')}`);
        debug.warn('[experimentFeatures][mediaSource][activated]');
      }

      /* Disable locking of playbackRate and other properties*/
      hackDefineProperty();

      /* Disable close mode for shadowdom*/
      hackAttachShadow();

      /* Take over all events*/
      proxyHTMLMediaElementEvent();
      // hackEventListener()
    }
  } catch (e) {
    console.error('h5player hack error', e);
  }

  /* Note: Greasemonkey's menu registration cannot be disabled based on isEnabled, otherwise it cannot be enabled through Greasemonkey's menu*/
  menuRegister();

  if (!isEnabled || isInBlackList) {
    debug.warn(`[config][disable][${location.host}] The current website has disabled scripts. If you want to enable scripts, please turn it on in the menu`);
    return false
  }

  try {
    /* Initialize the global related methods*/
    h5Player.init(true);

    /* Initialize when a video tag is detected*/
    supportMediaTags.forEach(tagName => {
      ready(tagName, function () {
        h5Player.init();
      });
    });

    /* Detect the video under the shadow dom */
    document.addEventListener('addShadowRoot', function (e) {
      const shadowRoot = e.detail.shadowRoot;
      supportMediaTags.forEach(tagName => {
        ready(tagName, function (element) {
          h5Player.init();
        }, shadowRoot);
      });
    });

    /* Initialize cross-Tab control logic*/
    crossTabCtl.init();

    if ( isInIframe ( ) ) {
      debug.log('h5Player init suc, in iframe:');
    } else {
      debug.log('h5Player init suc');
    }

    if (isInCrossOriginFrame()) {
      debug.log('Currently in a cross-domain restricted iframe, some functions of h5Player may not be enabled normally', window.location.href);
    }

    /* Register mouse control events */
    if (configManager.get('mouse.enable')) {
      registerMouseEvent(h5Player);
    }
  } catch (e) {
    debug.error('h5Player init fail', e);
  }

  /* Note: The GUI is only hidden if it is explicitly set to false */
  if (configManager.get('ui.enable') !== false) {
    if (window.customElements && document.adoptedStyleSheets) {
      h5Player.UI = h5playerUI(windowSandbox);
      setTimeout(async () => {
        h5Player.UI.init();
      }, 400);
    } else {
      /* Webkit kernel recommends that only browsers above version 73 are allowed to use UI components, otherwise compatibility or performance will be a big problem*/
      debug.warn('The current browser does not support customElements or adoptedStyleSheets, so UI components cannot be used. It is recommended to use Chrome 83+, Edge 83+');
    }
  } else {
    debug.warn('UI component has been disabled', configManager.get('ui.enable'));
  }

  /**
   * Interact with the official website remote assistant. People with serious security or information cleanliness concerns can manually comment out the following code
   * The following code will not affect the normal use of the main functions
   * Not commenting the code and disabling the UI interface has the same effect
   */
  try {
    configManager.get('ui.enable') !== false && remoteHelper.init();
  } catch (e) {
    debug.error('[remoteHelper.init]', e);
  }

  // console.clear = () => {}
}

function init (retryCount = 0) {
  if (!window.document || !window.document.documentElement) {
    setTimeout(() => {
      if (retryCount < 200) {
        init(retryCount + 1);
      } else {
        console.error('[h5player message:]', 'not documentElement detected!', window);
      }
    }, 10);

    return false
  } else if (retryCount > 0) {
    console.warn('[h5player message:]', 'documentElement detected!', retryCount, window);
  }

  h5PlayerInit();
}

/**
 * In some extreme cases, directly accessing the window object will result in an error, so the entire init is tried
 * For example: www.icourse163.org has a certain probability of abnormality
 */
let initTryCount = 0;
try {
  heat(0);
} catch (e) {
  setTimeout(() => {
    if (initTryCount < 200) {
      initTryCount++;
      heat(0);
      console.error('[h5player message:]', 'init error', initTryCount, e);
    }
  }, 10);
}
