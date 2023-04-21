export const dashboards = {
  "dashboards": [
      {
          "id": 81125,
          "name": "Ethereum Shanghai ETH Withdraw",
          "slug": "ethereum-shanghai-eth-withdraw",
          "is_private": false,
          "is_archived": false,
          "created_at": "2023-04-12T14:42:47.038028+00:00",
          "updated_at": "2023-04-17T11:33:31.511816+00:00",
          "tags": [
              "ETH",
              "shanghai",
              "ETH2.0"
          ],
          "user": null,
          "team": {
              "id": 101,
              "name": "Impossible Finance",
              "handle": "impossiblefinance",
              "profile_image_url": "https://prod-dune-media.s3.eu-west-1.amazonaws.com/profile_img_5836a3d0-7c8e-4e6b-a19b-bd296806bbb2_kjcyj.png",
              "__typename": "teams"
          },
          "forked_dashboard": null,
          "text_widgets": [
              {
                  "id": 1154808,
                  "created_at": "2023-04-12T14:53:00.344442+00:00",
                  "updated_at": "2023-04-17T11:33:31.511816+00:00",
                  "text": "---\n# After Shanghai Unlock\n---",
                  "options": {
                      "position": {
                          "col": 0,
                          "row": 35,
                          "sizeX": 6,
                          "sizeY": 2
                      }
                  },
                  "__typename": "text_widgets"
              },
              {
                  "id": 1154790,
                  "created_at": "2023-04-12T14:46:07.197695+00:00",
                  "updated_at": "2023-04-17T11:33:31.511816+00:00",
                  "text": "![](https://pbs.twimg.com/media/EoEj6kuW4AIuOIE?format=jpg&name=4096x4096)",
                  "options": {
                      "position": {
                          "col": 3,
                          "row": 0,
                          "sizeX": 3,
                          "sizeY": 11
                      }
                  },
                  "__typename": "text_widgets"
              },
              {
                  "id": 1154809,
                  "created_at": "2023-04-12T14:53:46.086738+00:00",
                  "updated_at": "2023-04-17T11:33:31.511816+00:00",
                  "text": "![](https://public.bnbstatic.com/static/academy/uploads/934ba45d2e6948048b71c4592fad02b3.png)",
                  "options": {
                      "position": {
                          "col": 4,
                          "row": 41,
                          "sizeX": 2,
                          "sizeY": 7
                      }
                  },
                  "__typename": "text_widgets"
              },
              {
                  "id": 1154785,
                  "created_at": "2023-04-12T14:45:43.45364+00:00",
                  "updated_at": "2023-04-17T11:33:31.511816+00:00",
                  "text": "## This part we took from our [Liquid Staking dashboard](https://dune.com/impossiblefinance/liquid-staking-derivatives)\n## ***Credit to [hildobby](https://dune.com/hildobby) for his beautiful ethereum staking table***\n## [Beacon Deposit Contract](https://etherscan.io/address/0x00000000219ab540356cbb839cbe05303d7705fa)",
                  "options": {
                      "position": {
                          "col": 0,
                          "row": 2,
                          "sizeX": 3,
                          "sizeY": 4
                      }
                  },
                  "__typename": "text_widgets"
              },
              {
                  "id": 1154783,
                  "created_at": "2023-04-12T14:44:38.842252+00:00",
                  "updated_at": "2023-04-17T11:33:31.511816+00:00",
                  "text": "---\n# Validators war (Deposits on Ethereum Beacon Chain)\n---",
                  "options": {
                      "position": {
                          "col": 0,
                          "row": 0,
                          "sizeX": 3,
                          "sizeY": 2
                      }
                  },
                  "__typename": "text_widgets"
              },
              {
                  "id": 1160545,
                  "created_at": "2023-04-17T11:21:16.429298+00:00",
                  "updated_at": "2023-04-17T11:33:31.511816+00:00",
                  "text": "# Receivers table",
                  "options": {
                      "position": {
                          "col": 0,
                          "row": 78,
                          "sizeX": 6,
                          "sizeY": 2
                      }
                  },
                  "__typename": "text_widgets"
              }
          ],
          "visualization_widgets": [
              {
                  "id": 1158115,
                  "created_at": "2023-04-14T15:35:35.538801+00:00",
                  "updated_at": "2023-04-17T11:33:31.511816+00:00",
                  "options": {
                      "position": {
                          "col": 0,
                          "row": 62,
                          "sizeX": 3,
                          "sizeY": 8
                      }
                  },
                  "visualization": {
                      "id": 3867951,
                      "type": "chart",
                      "name": "Validators",
                      "options": {
                          "sortX": true,
                          "xAxis": {
                              "type": "-",
                              "title": {
                                  "text": "Date"
                              }
                          },
                          "yAxis": [
                              {
                                  "type": "linear",
                                  "title": {
                                      "text": "Validators"
                                  }
                              }
                          ],
                          "legend": {
                              "enabled": false
                          },
                          "series": {
                              "stacking": "stack"
                          },
                          "reverseX": false,
                          "columnMapping": {
                              "time": "x",
                              "category": "series",
                              "validators": "y"
                          },
                          "seriesOptions": {
                              "Reward": {
                                  "type": "column",
                                  "color": "#3fa24e",
                                  "yAxis": 0,
                                  "zIndex": 0
                              },
                              "Full Withdraw": {
                                  "type": "column",
                                  "color": "#bb2828",
                                  "yAxis": 0,
                                  "zIndex": 1
                              }
                          },
                          "valuesOptions": {},
                          "showDataLabels": false,
                          "globalSeriesType": "column"
                      },
                      "created_at": "2023-04-12T15:12:15.812818+00:00",
                      "query_details": {
                          "query_id": 2360815,
                          "name": "ETH Withdrawals after Shanghai Unlock",
                          "description": "",
                          "show_watermark": true,
                          "parameters": [],
                          "dataset_id": 11,
                          "user": {
                              "id": 31626,
                              "name": "KARTOD",
                              "profile_image_url": "https://prod-dune-media.s3.eu-west-1.amazonaws.com/profile_img_1041177d-69b0-4c4f-82ee-8f929758aef8_hhgyb.jpeg",
                              "__typename": "users"
                          },
                          "team": null,
                          "__typename": "query_details"
                      },
                      "__typename": "visualizations"
                  },
                  "__typename": "visualization_widgets"
              },
              {
                  "id": 1154807,
                  "created_at": "2023-04-12T14:52:28.408933+00:00",
                  "updated_at": "2023-04-17T11:33:31.511816+00:00",
                  "options": {
                      "position": {
                          "col": 0,
                          "row": 26,
                          "sizeX": 2,
                          "sizeY": 9
                      }
                  },
                  "visualization": {
                      "id": 3867772,
                      "type": "chart",
                      "name": "",
                      "options": {
                          "sortX": true,
                          "xAxis": {
                              "type": "-"
                          },
                          "yAxis": [
                              {
                                  "type": "linear"
                              }
                          ],
                          "legend": {
                              "enabled": false
                          },
                          "reverseX": false,
                          "numberFormat": "0,000",
                          "columnMapping": {
                              "staked": "y",
                              "depositor_entity_category": "x"
                          },
                          "seriesOptions": {
                              "staked": {
                                  "name": "ETH Staked",
                                  "type": "pie",
                                  "yAxis": 0,
                                  "zIndex": 0
                              }
                          },
                          "valuesOptions": {
                              "CEX": {
                                  "color": "#f00c0c"
                              },
                              "Other": {
                                  "color": "#000000"
                              },
                              "Others": {
                                  "color": "#000000"
                              },
                              "Staking Pools": {
                                  "color": "#3995ce"
                              },
                              "Liquid Staking": {
                                  "color": "#c1ba2a"
                              }
                          },
                          "showDataLabels": true,
                          "globalSeriesType": "pie"
                      },
                      "created_at": "2023-04-12T14:51:55.093382+00:00",
                      "query_details": {
                          "query_id": 2360788,
                          "name": "Liquid Staking validators - All",
                          "description": "",
                          "show_watermark": true,
                          "parameters": [],
                          "dataset_id": 1,
                          "user": null,
                          "team": {
                              "id": 101,
                              "name": "Impossible Finance",
                              "handle": "impossiblefinance",
                              "profile_image_url": "https://prod-dune-media.s3.eu-west-1.amazonaws.com/profile_img_5836a3d0-7c8e-4e6b-a19b-bd296806bbb2_kjcyj.png",
                              "__typename": "teams"
                          },
                          "__typename": "query_details"
                      },
                      "__typename": "visualizations"
                  },
                  "__typename": "visualization_widgets"
              },
              {
                  "id": 1160535,
                  "created_at": "2023-04-17T11:13:05.141202+00:00",
                  "updated_at": "2023-04-17T11:33:31.511816+00:00",
                  "options": {
                      "position": {
                          "col": 0,
                          "row": 49,
                          "sizeX": 2,
                          "sizeY": 4
                      }
                  },
                  "visualization": {
                      "id": 3897664,
                      "type": "counter",
                      "name": "Addresses that received ETH",
                      "options": {
                          "rowNumber": 1,
                          "counterColName": "receivers"
                      },
                      "created_at": "2023-04-17T10:55:49.643011+00:00",
                      "query_details": {
                          "query_id": 2360932,
                          "name": "Total ETH withdrawn after Shanghai Unlock",
                          "description": "",
                          "show_watermark": true,
                          "parameters": [],
                          "dataset_id": 11,
                          "user": {
                              "id": 31626,
                              "name": "KARTOD",
                              "profile_image_url": "https://prod-dune-media.s3.eu-west-1.amazonaws.com/profile_img_1041177d-69b0-4c4f-82ee-8f929758aef8_hhgyb.jpeg",
                              "__typename": "users"
                          },
                          "team": null,
                          "__typename": "query_details"
                      },
                      "__typename": "visualizations"
                  },
                  "__typename": "visualization_widgets"
              },
              {
                  "id": 1154792,
                  "created_at": "2023-04-12T14:46:39.643629+00:00",
                  "updated_at": "2023-04-17T11:33:31.511816+00:00",
                  "options": {
                      "position": {
                          "col": 0,
                          "row": 6,
                          "sizeX": 3,
                          "sizeY": 5
                      }
                  },
                  "visualization": {
                      "id": 3361480,
                      "type": "counter",
                      "name": "ETH deposited",
                      "options": {
                          "rowNumber": 1,
                          "counterColName": "deposited"
                      },
                      "created_at": "2023-02-22T05:11:12.863424+00:00",
                      "query_details": {
                          "query_id": 2030584,
                          "name": "Ethereum Beacon Chain Deposits",
                          "description": "",
                          "show_watermark": true,
                          "parameters": [],
                          "dataset_id": 1,
                          "user": {
                              "id": 123584,
                              "name": "impossible_finance",
                              "profile_image_url": "https://prod-dune-media.s3.eu-west-1.amazonaws.com/profile_img_5836a3d0-7c8e-4e6b-a19b-bd296806bbb2_yrbam.png",
                              "__typename": "users"
                          },
                          "team": null,
                          "__typename": "query_details"
                      },
                      "__typename": "visualizations"
                  },
                  "__typename": "visualization_widgets"
              },
              {
                  "id": 1160536,
                  "created_at": "2023-04-17T11:13:16.072236+00:00",
                  "updated_at": "2023-04-17T11:33:31.511816+00:00",
                  "options": {
                      "position": {
                          "col": 2,
                          "row": 49,
                          "sizeX": 2,
                          "sizeY": 4
                      }
                  },
                  "visualization": {
                      "id": 3897723,
                      "type": "counter",
                      "name": "Addresses that received ETH reward",
                      "options": {
                          "rowNumber": 1,
                          "counterColName": "receivers"
                      },
                      "created_at": "2023-04-17T11:06:04.926056+00:00",
                      "query_details": {
                          "query_id": 2377352,
                          "name": "Total ETH rewards after Shanghai Unlock",
                          "description": "",
                          "show_watermark": true,
                          "parameters": [],
                          "dataset_id": 11,
                          "user": {
                              "id": 31626,
                              "name": "KARTOD",
                              "profile_image_url": "https://prod-dune-media.s3.eu-west-1.amazonaws.com/profile_img_1041177d-69b0-4c4f-82ee-8f929758aef8_hhgyb.jpeg",
                              "__typename": "users"
                          },
                          "team": null,
                          "__typename": "query_details"
                      },
                      "__typename": "visualizations"
                  },
                  "__typename": "visualization_widgets"
              },
              {
                  "id": 1160537,
                  "created_at": "2023-04-17T11:13:17.379209+00:00",
                  "updated_at": "2023-04-17T11:33:31.511816+00:00",
                  "options": {
                      "position": {
                          "col": 2,
                          "row": 41,
                          "sizeX": 2,
                          "sizeY": 4
                      }
                  },
                  "visualization": {
                      "id": 3897725,
                      "type": "counter",
                      "name": "Total ETH reward",
                      "options": {
                          "rowNumber": 1,
                          "counterColName": "ETH"
                      },
                      "created_at": "2023-04-17T11:06:04.926056+00:00",
                      "query_details": {
                          "query_id": 2377352,
                          "name": "Total ETH rewards after Shanghai Unlock",
                          "description": "",
                          "show_watermark": true,
                          "parameters": [],
                          "dataset_id": 11,
                          "user": {
                              "id": 31626,
                              "name": "KARTOD",
                              "profile_image_url": "https://prod-dune-media.s3.eu-west-1.amazonaws.com/profile_img_1041177d-69b0-4c4f-82ee-8f929758aef8_hhgyb.jpeg",
                              "__typename": "users"
                          },
                          "team": null,
                          "__typename": "query_details"
                      },
                      "__typename": "visualizations"
                  },
                  "__typename": "visualization_widgets"
              },
              {
                  "id": 1160543,
                  "created_at": "2023-04-17T11:20:51.094174+00:00",
                  "updated_at": "2023-04-17T11:33:31.511816+00:00",
                  "options": {
                      "position": {
                          "col": 3,
                          "row": 80,
                          "sizeX": 3,
                          "sizeY": 10
                      }
                  },
                  "visualization": {
                      "id": 3897815,
                      "type": "table",
                      "name": "",
                      "options": {
                          "columns": [
                              {
                                  "name": "address",
                                  "title": "ETH receivers"
                              },
                              {
                                  "name": "validators",
                                  "title": "Validators",
                                  "numberFormat": "0,000.ma"
                              },
                              {
                                  "name": "ETH",
                                  "title": "ETH received",
                                  "numberFormat": "0,000.ma"
                              }
                          ]
                      },
                      "created_at": "2023-04-17T11:20:23.207353+00:00",
                      "query_details": {
                          "query_id": 2377402,
                          "name": "Top ETH withdraw recipients after Shanghai Unlock",
                          "description": "Rewards",
                          "show_watermark": true,
                          "parameters": [],
                          "dataset_id": 11,
                          "user": {
                              "id": 31626,
                              "name": "KARTOD",
                              "profile_image_url": "https://prod-dune-media.s3.eu-west-1.amazonaws.com/profile_img_1041177d-69b0-4c4f-82ee-8f929758aef8_hhgyb.jpeg",
                              "__typename": "users"
                          },
                          "team": null,
                          "__typename": "query_details"
                      },
                      "__typename": "visualizations"
                  },
                  "__typename": "visualization_widgets"
              },
              {
                  "id": 1160544,
                  "created_at": "2023-04-17T11:20:54.429064+00:00",
                  "updated_at": "2023-04-17T11:33:31.511816+00:00",
                  "options": {
                      "position": {
                          "col": 0,
                          "row": 80,
                          "sizeX": 3,
                          "sizeY": 10
                      }
                  },
                  "visualization": {
                      "id": 3897635,
                      "type": "table",
                      "name": "",
                      "options": {
                          "columns": [
                              {
                                  "name": "address",
                                  "title": "ETH receivers"
                              },
                              {
                                  "name": "validators",
                                  "title": "Validators",
                                  "numberFormat": "0,000.ma"
                              },
                              {
                                  "name": "ETH",
                                  "title": "ETH received",
                                  "numberFormat": "0,000.ma"
                              }
                          ]
                      },
                      "created_at": "2023-04-17T10:49:29.440874+00:00",
                      "query_details": {
                          "query_id": 2377304,
                          "name": "Top ETH withdraw recipients after Shanghai Unlock",
                          "description": "Full withdraw",
                          "show_watermark": true,
                          "parameters": [],
                          "dataset_id": 11,
                          "user": {
                              "id": 31626,
                              "name": "KARTOD",
                              "profile_image_url": "https://prod-dune-media.s3.eu-west-1.amazonaws.com/profile_img_1041177d-69b0-4c4f-82ee-8f929758aef8_hhgyb.jpeg",
                              "__typename": "users"
                          },
                          "team": null,
                          "__typename": "query_details"
                      },
                      "__typename": "visualizations"
                  },
                  "__typename": "visualization_widgets"
              },
              {
                  "id": 1160553,
                  "created_at": "2023-04-17T11:32:56.481366+00:00",
                  "updated_at": "2023-04-17T11:33:31.511816+00:00",
                  "options": {
                      "position": {
                          "col": 0,
                          "row": 37,
                          "sizeX": 6,
                          "sizeY": 4
                      }
                  },
                  "visualization": {
                      "id": 3897857,
                      "type": "counter",
                      "name": "Total ETH withdrawn",
                      "options": {
                          "rowNumber": 1,
                          "counterColName": "ETH_cum"
                      },
                      "created_at": "2023-04-17T11:32:36.366015+00:00",
                      "query_details": {
                          "query_id": 2360815,
                          "name": "ETH Withdrawals after Shanghai Unlock",
                          "description": "",
                          "show_watermark": true,
                          "parameters": [],
                          "dataset_id": 11,
                          "user": {
                              "id": 31626,
                              "name": "KARTOD",
                              "profile_image_url": "https://prod-dune-media.s3.eu-west-1.amazonaws.com/profile_img_1041177d-69b0-4c4f-82ee-8f929758aef8_hhgyb.jpeg",
                              "__typename": "users"
                          },
                          "team": null,
                          "__typename": "query_details"
                      },
                      "__typename": "visualizations"
                  },
                  "__typename": "visualization_widgets"
              },
              {
                  "id": 1158123,
                  "created_at": "2023-04-14T15:38:47.855525+00:00",
                  "updated_at": "2023-04-17T11:33:31.511816+00:00",
                  "options": {
                      "position": {
                          "col": 3,
                          "row": 53,
                          "sizeX": 3,
                          "sizeY": 9
                      }
                  },
                  "visualization": {
                      "id": 3868024,
                      "type": "chart",
                      "name": "ETH price",
                      "options": {
                          "sortX": true,
                          "xAxis": {
                              "type": "-",
                              "title": {
                                  "text": "Date"
                              }
                          },
                          "yAxis": [
                              {
                                  "type": "logarithmic"
                              }
                          ],
                          "legend": {
                              "enabled": false
                          },
                          "reverseX": false,
                          "numberFormat": "0,000.00$",
                          "columnMapping": {
                              "time": "x",
                              "eth_price": "y"
                          },
                          "seriesOptions": {
                              "eth_price": {
                                  "name": "ETH price",
                                  "type": "line",
                                  "color": "#000000",
                                  "yAxis": 0,
                                  "zIndex": 0
                              }
                          },
                          "valuesOptions": {},
                          "globalSeriesType": "line"
                      },
                      "created_at": "2023-04-12T15:21:58.603867+00:00",
                      "query_details": {
                          "query_id": 2360905,
                          "name": "ETH Withdrawals after Shanghai Unlock vs ETH price",
                          "description": "",
                          "show_watermark": true,
                          "parameters": [],
                          "dataset_id": 11,
                          "user": {
                              "id": 31626,
                              "name": "KARTOD",
                              "profile_image_url": "https://prod-dune-media.s3.eu-west-1.amazonaws.com/profile_img_1041177d-69b0-4c4f-82ee-8f929758aef8_hhgyb.jpeg",
                              "__typename": "users"
                          },
                          "team": null,
                          "__typename": "query_details"
                      },
                      "__typename": "visualizations"
                  },
                  "__typename": "visualization_widgets"
              },
              {
                  "id": 1158125,
                  "created_at": "2023-04-14T15:38:50.197402+00:00",
                  "updated_at": "2023-04-17T11:33:31.511816+00:00",
                  "options": {
                      "position": {
                          "col": 3,
                          "row": 70,
                          "sizeX": 3,
                          "sizeY": 8
                      }
                  },
                  "visualization": {
                      "id": 3868020,
                      "type": "chart",
                      "name": "ETH withdrawals",
                      "options": {
                          "sortX": true,
                          "xAxis": {
                              "type": "-",
                              "title": {
                                  "text": "Date"
                              }
                          },
                          "yAxis": [
                              {
                                  "type": "linear"
                              },
                              {
                                  "type": "linear"
                              }
                          ],
                          "legend": {
                              "enabled": false
                          },
                          "reverseX": false,
                          "numberFormat": "0,000.ma",
                          "columnMapping": {
                              "ETH": "y",
                              "time": "x",
                              "eth_price": "y"
                          },
                          "seriesOptions": {
                              "ETH": {
                                  "name": "ETH withdrawn",
                                  "type": "column",
                                  "color": "#2a768a",
                                  "yAxis": 0,
                                  "zIndex": 0
                              },
                              "eth_price": {
                                  "name": "ETH price",
                                  "type": "line",
                                  "color": "#000000",
                                  "yAxis": 1,
                                  "zIndex": 1
                              }
                          },
                          "valuesOptions": {},
                          "globalSeriesType": "column",
                          "numberFormatRightYAxisSeries": "0,000.00$"
                      },
                      "created_at": "2023-04-12T15:21:46.046527+00:00",
                      "query_details": {
                          "query_id": 2360905,
                          "name": "ETH Withdrawals after Shanghai Unlock vs ETH price",
                          "description": "",
                          "show_watermark": true,
                          "parameters": [],
                          "dataset_id": 11,
                          "user": {
                              "id": 31626,
                              "name": "KARTOD",
                              "profile_image_url": "https://prod-dune-media.s3.eu-west-1.amazonaws.com/profile_img_1041177d-69b0-4c4f-82ee-8f929758aef8_hhgyb.jpeg",
                              "__typename": "users"
                          },
                          "team": null,
                          "__typename": "query_details"
                      },
                      "__typename": "visualizations"
                  },
                  "__typename": "visualization_widgets"
              },
              {
                  "id": 1154794,
                  "created_at": "2023-04-12T14:46:42.314862+00:00",
                  "updated_at": "2023-04-17T11:33:31.511816+00:00",
                  "options": {
                      "position": {
                          "col": 2,
                          "row": 11,
                          "sizeX": 2,
                          "sizeY": 3
                      }
                  },
                  "visualization": {
                      "id": 3361478,
                      "type": "counter",
                      "name": "Unique depositors",
                      "options": {
                          "rowNumber": 1,
                          "counterColName": "depositors"
                      },
                      "created_at": "2023-02-22T05:11:01.466864+00:00",
                      "query_details": {
                          "query_id": 2030584,
                          "name": "Ethereum Beacon Chain Deposits",
                          "description": "",
                          "show_watermark": true,
                          "parameters": [],
                          "dataset_id": 1,
                          "user": {
                              "id": 123584,
                              "name": "impossible_finance",
                              "profile_image_url": "https://prod-dune-media.s3.eu-west-1.amazonaws.com/profile_img_5836a3d0-7c8e-4e6b-a19b-bd296806bbb2_yrbam.png",
                              "__typename": "users"
                          },
                          "team": null,
                          "__typename": "query_details"
                      },
                      "__typename": "visualizations"
                  },
                  "__typename": "visualization_widgets"
              },
              {
                  "id": 1154791,
                  "created_at": "2023-04-12T14:46:38.179985+00:00",
                  "updated_at": "2023-04-17T11:33:31.511816+00:00",
                  "options": {
                      "position": {
                          "col": 4,
                          "row": 11,
                          "sizeX": 2,
                          "sizeY": 3
                      }
                  },
                  "visualization": {
                      "id": 3361482,
                      "type": "counter",
                      "name": "Unique validators",
                      "options": {
                          "rowNumber": 1,
                          "stringSuffix": "%",
                          "stringDecimal": 1,
                          "counterColName": "pct_of_depositors"
                      },
                      "created_at": "2023-02-22T05:11:16.53322+00:00",
                      "query_details": {
                          "query_id": 2030584,
                          "name": "Ethereum Beacon Chain Deposits",
                          "description": "",
                          "show_watermark": true,
                          "parameters": [],
                          "dataset_id": 1,
                          "user": {
                              "id": 123584,
                              "name": "impossible_finance",
                              "profile_image_url": "https://prod-dune-media.s3.eu-west-1.amazonaws.com/profile_img_5836a3d0-7c8e-4e6b-a19b-bd296806bbb2_yrbam.png",
                              "__typename": "users"
                          },
                          "team": null,
                          "__typename": "query_details"
                      },
                      "__typename": "visualizations"
                  },
                  "__typename": "visualization_widgets"
              },
              {
                  "id": 1154793,
                  "created_at": "2023-04-12T14:46:40.974433+00:00",
                  "updated_at": "2023-04-17T11:33:31.511816+00:00",
                  "options": {
                      "position": {
                          "col": 0,
                          "row": 11,
                          "sizeX": 2,
                          "sizeY": 3
                      }
                  },
                  "visualization": {
                      "id": 3361479,
                      "type": "counter",
                      "name": "Number of validators",
                      "options": {
                          "rowNumber": 1,
                          "counterColName": "validators"
                      },
                      "created_at": "2023-02-22T05:11:09.398478+00:00",
                      "query_details": {
                          "query_id": 2030584,
                          "name": "Ethereum Beacon Chain Deposits",
                          "description": "",
                          "show_watermark": true,
                          "parameters": [],
                          "dataset_id": 1,
                          "user": {
                              "id": 123584,
                              "name": "impossible_finance",
                              "profile_image_url": "https://prod-dune-media.s3.eu-west-1.amazonaws.com/profile_img_5836a3d0-7c8e-4e6b-a19b-bd296806bbb2_yrbam.png",
                              "__typename": "users"
                          },
                          "team": null,
                          "__typename": "query_details"
                      },
                      "__typename": "visualizations"
                  },
                  "__typename": "visualization_widgets"
              },
              {
                  "id": 1158124,
                  "created_at": "2023-04-14T15:38:49.032382+00:00",
                  "updated_at": "2023-04-17T11:33:31.511816+00:00",
                  "options": {
                      "position": {
                          "col": 0,
                          "row": 70,
                          "sizeX": 3,
                          "sizeY": 8
                      }
                  },
                  "visualization": {
                      "id": 3868021,
                      "type": "chart",
                      "name": "Validators and ETH price",
                      "options": {
                          "sortX": true,
                          "xAxis": {
                              "type": "-",
                              "title": {
                                  "text": "Date"
                              }
                          },
                          "yAxis": [
                              {
                                  "type": "linear"
                              },
                              {
                                  "type": "linear"
                              }
                          ],
                          "legend": {
                              "enabled": false
                          },
                          "reverseX": false,
                          "numberFormat": "0,000.ma",
                          "columnMapping": {
                              "time": "x",
                              "eth_price": "y",
                              "validators": "y"
                          },
                          "seriesOptions": {
                              "eth_price": {
                                  "name": "ETH price",
                                  "type": "line",
                                  "color": "#000000",
                                  "yAxis": 1,
                                  "zIndex": 1
                              },
                              "validators": {
                                  "name": "Validators",
                                  "type": "column",
                                  "color": "#2515d5",
                                  "yAxis": 0,
                                  "zIndex": 0
                              }
                          },
                          "valuesOptions": {},
                          "globalSeriesType": "column",
                          "numberFormatRightYAxisSeries": "0,000.00$"
                      },
                      "created_at": "2023-04-12T15:21:48.042872+00:00",
                      "query_details": {
                          "query_id": 2360905,
                          "name": "ETH Withdrawals after Shanghai Unlock vs ETH price",
                          "description": "",
                          "show_watermark": true,
                          "parameters": [],
                          "dataset_id": 11,
                          "user": {
                              "id": 31626,
                              "name": "KARTOD",
                              "profile_image_url": "https://prod-dune-media.s3.eu-west-1.amazonaws.com/profile_img_1041177d-69b0-4c4f-82ee-8f929758aef8_hhgyb.jpeg",
                              "__typename": "users"
                          },
                          "team": null,
                          "__typename": "query_details"
                      },
                      "__typename": "visualizations"
                  },
                  "__typename": "visualization_widgets"
              },
              {
                  "id": 1154795,
                  "created_at": "2023-04-12T14:46:43.688183+00:00",
                  "updated_at": "2023-04-17T11:33:31.511816+00:00",
                  "options": {
                      "position": {
                          "col": 3,
                          "row": 14,
                          "sizeX": 3,
                          "sizeY": 12
                      }
                  },
                  "visualization": {
                      "id": 3361628,
                      "type": "chart",
                      "name": "",
                      "options": {
                          "sortX": true,
                          "xAxis": {
                              "type": "-"
                          },
                          "yAxis": [
                              {
                                  "type": "linear"
                              }
                          ],
                          "legend": {
                              "enabled": false
                          },
                          "reverseX": false,
                          "numberFormat": "0,000.00ma",
                          "columnMapping": {
                              "entity": "x",
                              "eth_deposited": "y"
                          },
                          "seriesOptions": {
                              "eth_deposited": {
                                  "name": "ETH deposited",
                                  "type": "pie",
                                  "yAxis": 0,
                                  "zIndex": 0
                              }
                          },
                          "valuesOptions": {
                              "Lido": {
                                  "color": "#e58f8f"
                              },
                              "Other": {
                                  "color": "#a9a4a4"
                              },
                              "Kraken": {
                                  "color": "#0077ff"
                              },
                              "Binance": {
                                  "color": "#f4f000"
                              },
                              "Coinbase": {
                                  "color": "#0c22e3"
                              }
                          },
                          "showDataLabels": true,
                          "globalSeriesType": "pie"
                      },
                      "created_at": "2023-02-22T05:36:54.424854+00:00",
                      "query_details": {
                          "query_id": 2030664,
                          "name": "Ethereum Beacon Chain Deposits Entity",
                          "description": "",
                          "show_watermark": true,
                          "parameters": [],
                          "dataset_id": 1,
                          "user": {
                              "id": 123584,
                              "name": "impossible_finance",
                              "profile_image_url": "https://prod-dune-media.s3.eu-west-1.amazonaws.com/profile_img_5836a3d0-7c8e-4e6b-a19b-bd296806bbb2_yrbam.png",
                              "__typename": "users"
                          },
                          "team": null,
                          "__typename": "query_details"
                      },
                      "__typename": "visualizations"
                  },
                  "__typename": "visualization_widgets"
              },
              {
                  "id": 1158114,
                  "created_at": "2023-04-14T15:35:34.30113+00:00",
                  "updated_at": "2023-04-17T11:33:31.511816+00:00",
                  "options": {
                      "position": {
                          "col": 0,
                          "row": 53,
                          "sizeX": 3,
                          "sizeY": 9
                      }
                  },
                  "visualization": {
                      "id": 3867995,
                      "type": "chart",
                      "name": "ETH withdrawals cumsum",
                      "options": {
                          "sortX": true,
                          "xAxis": {
                              "type": "-",
                              "title": {
                                  "text": "Date"
                              }
                          },
                          "yAxis": [
                              {
                                  "type": "linear",
                                  "title": {
                                      "text": "ETH"
                                  }
                              }
                          ],
                          "legend": {
                              "enabled": false
                          },
                          "series": {
                              "stacking": "stack"
                          },
                          "reverseX": false,
                          "numberFormat": "0,000.ma",
                          "columnMapping": {
                              "time": "x",
                              "ETH_cum": "y"
                          },
                          "seriesOptions": {
                              "ETH_cum": {
                                  "name": "ETH total",
                                  "type": "area",
                                  "color": "#000000",
                                  "yAxis": 0,
                                  "zIndex": 0
                              }
                          },
                          "valuesOptions": {},
                          "globalSeriesType": "area"
                      },
                      "created_at": "2023-04-12T15:17:46.181645+00:00",
                      "query_details": {
                          "query_id": 2360815,
                          "name": "ETH Withdrawals after Shanghai Unlock",
                          "description": "",
                          "show_watermark": true,
                          "parameters": [],
                          "dataset_id": 11,
                          "user": {
                              "id": 31626,
                              "name": "KARTOD",
                              "profile_image_url": "https://prod-dune-media.s3.eu-west-1.amazonaws.com/profile_img_1041177d-69b0-4c4f-82ee-8f929758aef8_hhgyb.jpeg",
                              "__typename": "users"
                          },
                          "team": null,
                          "__typename": "query_details"
                      },
                      "__typename": "visualizations"
                  },
                  "__typename": "visualization_widgets"
              },
              {
                  "id": 1158122,
                  "created_at": "2023-04-14T15:38:46.606765+00:00",
                  "updated_at": "2023-04-17T11:33:31.511816+00:00",
                  "options": {
                      "position": {
                          "col": 4,
                          "row": 48,
                          "sizeX": 2,
                          "sizeY": 5
                      }
                  },
                  "visualization": {
                      "id": 3868026,
                      "type": "counter",
                      "name": "ETH price",
                      "options": {
                          "rowNumber": 2,
                          "stringSuffix": "$",
                          "counterColName": "eth_price"
                      },
                      "created_at": "2023-04-12T15:22:05.977377+00:00",
                      "query_details": {
                          "query_id": 2360905,
                          "name": "ETH Withdrawals after Shanghai Unlock vs ETH price",
                          "description": "",
                          "show_watermark": true,
                          "parameters": [],
                          "dataset_id": 11,
                          "user": {
                              "id": 31626,
                              "name": "KARTOD",
                              "profile_image_url": "https://prod-dune-media.s3.eu-west-1.amazonaws.com/profile_img_1041177d-69b0-4c4f-82ee-8f929758aef8_hhgyb.jpeg",
                              "__typename": "users"
                          },
                          "team": null,
                          "__typename": "query_details"
                      },
                      "__typename": "visualizations"
                  },
                  "__typename": "visualization_widgets"
              },
              {
                  "id": 1160533,
                  "created_at": "2023-04-17T11:13:02.583322+00:00",
                  "updated_at": "2023-04-17T11:33:31.511816+00:00",
                  "options": {
                      "position": {
                          "col": 0,
                          "row": 41,
                          "sizeX": 2,
                          "sizeY": 4
                      }
                  },
                  "visualization": {
                      "id": 3897681,
                      "type": "counter",
                      "name": "Full withdrawn ETH",
                      "options": {
                          "rowNumber": 1,
                          "counterColName": "ETH"
                      },
                      "created_at": "2023-04-17T10:59:08.18981+00:00",
                      "query_details": {
                          "query_id": 2360932,
                          "name": "Total ETH withdrawn after Shanghai Unlock",
                          "description": "",
                          "show_watermark": true,
                          "parameters": [],
                          "dataset_id": 11,
                          "user": {
                              "id": 31626,
                              "name": "KARTOD",
                              "profile_image_url": "https://prod-dune-media.s3.eu-west-1.amazonaws.com/profile_img_1041177d-69b0-4c4f-82ee-8f929758aef8_hhgyb.jpeg",
                              "__typename": "users"
                          },
                          "team": null,
                          "__typename": "query_details"
                      },
                      "__typename": "visualizations"
                  },
                  "__typename": "visualization_widgets"
              },
              {
                  "id": 1160534,
                  "created_at": "2023-04-17T11:13:03.871069+00:00",
                  "updated_at": "2023-04-17T11:33:31.511816+00:00",
                  "options": {
                      "position": {
                          "col": 0,
                          "row": 45,
                          "sizeX": 2,
                          "sizeY": 4
                      }
                  },
                  "visualization": {
                      "id": 3897666,
                      "type": "counter",
                      "name": "Full withdrawn validators",
                      "options": {
                          "rowNumber": 1,
                          "counterColName": "validators"
                      },
                      "created_at": "2023-04-17T10:56:03.855564+00:00",
                      "query_details": {
                          "query_id": 2360932,
                          "name": "Total ETH withdrawn after Shanghai Unlock",
                          "description": "",
                          "show_watermark": true,
                          "parameters": [],
                          "dataset_id": 11,
                          "user": {
                              "id": 31626,
                              "name": "KARTOD",
                              "profile_image_url": "https://prod-dune-media.s3.eu-west-1.amazonaws.com/profile_img_1041177d-69b0-4c4f-82ee-8f929758aef8_hhgyb.jpeg",
                              "__typename": "users"
                          },
                          "team": null,
                          "__typename": "query_details"
                      },
                      "__typename": "visualizations"
                  },
                  "__typename": "visualization_widgets"
              },
              {
                  "id": 1160538,
                  "created_at": "2023-04-17T11:13:18.590597+00:00",
                  "updated_at": "2023-04-17T11:33:31.511816+00:00",
                  "options": {
                      "position": {
                          "col": 2,
                          "row": 45,
                          "sizeX": 2,
                          "sizeY": 4
                      }
                  },
                  "visualization": {
                      "id": 3897724,
                      "type": "counter",
                      "name": "Reward validators",
                      "options": {
                          "rowNumber": 1,
                          "counterColName": "validators"
                      },
                      "created_at": "2023-04-17T11:06:04.926056+00:00",
                      "query_details": {
                          "query_id": 2377352,
                          "name": "Total ETH rewards after Shanghai Unlock",
                          "description": "",
                          "show_watermark": true,
                          "parameters": [],
                          "dataset_id": 11,
                          "user": {
                              "id": 31626,
                              "name": "KARTOD",
                              "profile_image_url": "https://prod-dune-media.s3.eu-west-1.amazonaws.com/profile_img_1041177d-69b0-4c4f-82ee-8f929758aef8_hhgyb.jpeg",
                              "__typename": "users"
                          },
                          "team": null,
                          "__typename": "query_details"
                      },
                      "__typename": "visualizations"
                  },
                  "__typename": "visualization_widgets"
              },
              {
                  "id": 1154796,
                  "created_at": "2023-04-12T14:46:48.329924+00:00",
                  "updated_at": "2023-04-17T11:33:31.511816+00:00",
                  "options": {
                      "position": {
                          "col": 0,
                          "row": 14,
                          "sizeX": 3,
                          "sizeY": 12
                      }
                  },
                  "visualization": {
                      "id": 3361568,
                      "type": "table",
                      "name": "",
                      "options": {
                          "columns": [
                              {
                                  "name": "ranking",
                                  "title": "Rnk"
                              },
                              {
                                  "name": "entity",
                                  "title": "Pool name"
                              },
                              {
                                  "name": "eth_deposited",
                                  "type": "progressbar",
                                  "title": "ETH deposited",
                                  "numberFormat": "0,000.",
                                  "coloredNegativeValues": false,
                                  "coloredPositiveValues": false
                              },
                              {
                                  "name": "validators",
                                  "title": "Validators",
                                  "numberFormat": "0,000"
                              },
                              {
                                  "name": "marketshare",
                                  "title": "Share",
                                  "numberFormat": "0,000.00%"
                              }
                          ]
                      },
                      "created_at": "2023-02-22T05:21:04.526397+00:00",
                      "query_details": {
                          "query_id": 2030664,
                          "name": "Ethereum Beacon Chain Deposits Entity",
                          "description": "",
                          "show_watermark": true,
                          "parameters": [],
                          "dataset_id": 1,
                          "user": {
                              "id": 123584,
                              "name": "impossible_finance",
                              "profile_image_url": "https://prod-dune-media.s3.eu-west-1.amazonaws.com/profile_img_5836a3d0-7c8e-4e6b-a19b-bd296806bbb2_yrbam.png",
                              "__typename": "users"
                          },
                          "team": null,
                          "__typename": "query_details"
                      },
                      "__typename": "visualizations"
                  },
                  "__typename": "visualization_widgets"
              },
              {
                  "id": 1154803,
                  "created_at": "2023-04-12T14:49:05.475296+00:00",
                  "updated_at": "2023-04-17T11:33:31.511816+00:00",
                  "options": {
                      "position": {
                          "col": 2,
                          "row": 26,
                          "sizeX": 4,
                          "sizeY": 9
                      }
                  },
                  "visualization": {
                      "id": 3361708,
                      "type": "chart",
                      "name": "Chart",
                      "options": {
                          "sortX": true,
                          "xAxis": {
                              "type": "-",
                              "title": {
                                  "text": "Date"
                              }
                          },
                          "yAxis": [
                              {
                                  "type": "linear",
                                  "title": {
                                      "text": "ETH deposited"
                                  }
                              }
                          ],
                          "legend": {
                              "enabled": false
                          },
                          "series": {
                              "stacking": "stack"
                          },
                          "reverseX": false,
                          "numberFormat": "0,000.00ma",
                          "columnMapping": {
                              "date": "x",
                              "total_eth": "y",
                              "depositor_entity_category": "series"
                          },
                          "seriesOptions": {
                              "CEX": {
                                  "type": "area",
                                  "color": "#d52828",
                                  "yAxis": 0,
                                  "zIndex": 0
                              },
                              "Others": {
                                  "type": "area",
                                  "color": "#000000",
                                  "yAxis": 0,
                                  "zIndex": 2
                              },
                              "Unidentified": {
                                  "type": "area",
                                  "color": "#bcb8b8",
                                  "yAxis": 0,
                                  "zIndex": 4
                              },
                              "Staking Pools": {
                                  "type": "area",
                                  "color": "#49a34f",
                                  "yAxis": 0,
                                  "zIndex": 3
                              },
                              "Liquid Staking": {
                                  "type": "area",
                                  "color": "#d2da25",
                                  "yAxis": 0,
                                  "zIndex": 1
                              }
                          },
                          "valuesOptions": {},
                          "globalSeriesType": "area"
                      },
                      "created_at": "2023-02-22T05:55:13.141662+00:00",
                      "query_details": {
                          "query_id": 2030745,
                          "name": "ETH Staked - Cumulative",
                          "description": "",
                          "show_watermark": true,
                          "parameters": [],
                          "dataset_id": 1,
                          "user": {
                              "id": 123584,
                              "name": "impossible_finance",
                              "profile_image_url": "https://prod-dune-media.s3.eu-west-1.amazonaws.com/profile_img_5836a3d0-7c8e-4e6b-a19b-bd296806bbb2_yrbam.png",
                              "__typename": "users"
                          },
                          "team": null,
                          "__typename": "query_details"
                      },
                      "__typename": "visualizations"
                  },
                  "__typename": "visualization_widgets"
              },
              {
                  "id": 1158116,
                  "created_at": "2023-04-14T15:35:36.787002+00:00",
                  "updated_at": "2023-04-17T11:33:31.511816+00:00",
                  "options": {
                      "position": {
                          "col": 3,
                          "row": 62,
                          "sizeX": 3,
                          "sizeY": 8
                      }
                  },
                  "visualization": {
                      "id": 3867929,
                      "type": "chart",
                      "name": "ETH withdrawals",
                      "options": {
                          "sortX": true,
                          "xAxis": {
                              "type": "-",
                              "title": {
                                  "text": "Date"
                              }
                          },
                          "yAxis": [
                              {
                                  "type": "linear",
                                  "title": {
                                      "text": "ETH"
                                  }
                              }
                          ],
                          "legend": {
                              "enabled": true
                          },
                          "series": {
                              "stacking": "stack"
                          },
                          "reverseX": false,
                          "numberFormat": "0,000.ma",
                          "columnMapping": {
                              "ETH": "y",
                              "time": "x",
                              "category": "series"
                          },
                          "seriesOptions": {
                              "Reward": {
                                  "type": "column",
                                  "color": "#378944",
                                  "yAxis": 0,
                                  "zIndex": 0
                              },
                              "Full Withdraw": {
                                  "type": "column",
                                  "color": "#b03030",
                                  "yAxis": 0,
                                  "zIndex": 1
                              }
                          },
                          "valuesOptions": {},
                          "globalSeriesType": "column"
                      },
                      "created_at": "2023-04-12T15:09:37.988668+00:00",
                      "query_details": {
                          "query_id": 2360815,
                          "name": "ETH Withdrawals after Shanghai Unlock",
                          "description": "",
                          "show_watermark": true,
                          "parameters": [],
                          "dataset_id": 11,
                          "user": {
                              "id": 31626,
                              "name": "KARTOD",
                              "profile_image_url": "https://prod-dune-media.s3.eu-west-1.amazonaws.com/profile_img_1041177d-69b0-4c4f-82ee-8f929758aef8_hhgyb.jpeg",
                              "__typename": "users"
                          },
                          "team": null,
                          "__typename": "query_details"
                      },
                      "__typename": "visualizations"
                  },
                  "__typename": "visualization_widgets"
              },
              {
                "id": 416309,
                "created_at": "2022-08-12T10:22:52.398565+00:00",
                "updated_at": "2023-04-20T07:24:55.367512+00:00",
                "options": {
                    "position": {
                        "col": 1,
                        "row": 24,
                        "sizeX": 5,
                        "sizeY": 9
                    }
                },
                "visualization": {
                    "id": 1972041,
                    "type": "chart",
                    "name": "$RDNT Price Chart",
                    "options": {
                        "sortX": true,
                        "xAxis": {
                            "type": "-"
                        },
                        "yAxis": [
                            {
                                "type": "-",
                                "tickFormat": "$0[].00a"
                            },
                            {
                                "type": "-",
                                "tickFormat": "$0[].00a"
                            }
                        ],
                        "legend": {
                            "enabled": false
                        },
                        "reverseX": false,
                        "numberFormat": "$0[.,].00",
                        "columnMapping": {
                            "time": "x",
                            "rdnt_price": "y",
                            "red_volume": "y",
                            "green_volume": "y"
                        },
                        "seriesOptions": {
                            "rdnt_price": {
                                "name": "Price",
                                "type": "area",
                                "yAxis": 0,
                                "zIndex": 0
                            },
                            "red_volume": {
                                "name": "$USD Volume",
                                "type": "column",
                                "color": "#f51818",
                                "yAxis": 1,
                                "zIndex": 2
                            },
                            "green_volume": {
                                "name": "$USD Volume",
                                "type": "column",
                                "color": "#4fa0e0",
                                "yAxis": 1,
                                "zIndex": 1
                            }
                        },
                        "valuesOptions": {},
                        "globalSeriesType": "line",
                        "numberFormatRightYAxisSeries": "$0[.,].00"
                    },
                    "created_at": "2022-08-10T03:35:14.946473+00:00",
                    "query_details": {
                        "query_id": 1154848,
                        "name": "RDNT Price Chart on Arbitrum and BSC",
                        "description": "RDNT Price and Volume Chart on Arbitrum and BSC",
                        "show_watermark": true,
                        "parameters": [],
                        "dataset_id": 1,
                        "user": {
                            "id": 26781,
                            "name": "shogun",
                            "profile_image_url": "https://prod-dune-media.s3.eu-west-1.amazonaws.com/profile_img_a2d00e92-d62e-4d60-a92d-f15cf1421ee9_tgatu.png",
                            "__typename": "users"
                        },
                        "team": null,
                        "__typename": "query_details"
                    },
                    "__typename": "visualizations"
                },
                "__typename": "visualization_widgets"
            },
            {
                "id": 889832,
                "created_at": "2023-02-11T10:46:06.481704+00:00",
                "updated_at": "2023-04-20T07:24:55.367512+00:00",
                "options": {
                    "position": {
                        "col": 0,
                        "row": 36,
                        "sizeX": 6,
                        "sizeY": 7
                    }
                },
                "visualization": {
                    "id": 3290785,
                    "type": "chart",
                    "name": "Holders OverTime",
                    "options": {
                        "sortX": true,
                        "xAxis": {
                            "type": "-"
                        },
                        "yAxis": [
                            {
                                "type": "linear"
                            },
                            {
                                "type": "linear"
                            }
                        ],
                        "legend": {
                            "enabled": false
                        },
                        "reverseX": false,
                        "columnMapping": {
                            "time": "x",
                            "red_change": "y",
                            "green_change": "y",
                            "total_holders": "y"
                        },
                        "seriesOptions": {
                            "red_change": {
                                "name": "Change",
                                "type": "column",
                                "color": "#ff0000",
                                "yAxis": 1,
                                "zIndex": 2
                            },
                            "green_change": {
                                "name": "Change",
                                "type": "column",
                                "color": "#00ff17",
                                "yAxis": 1,
                                "zIndex": 1
                            },
                            "total_holders": {
                                "name": "Total Holders",
                                "type": "line",
                                "yAxis": 0,
                                "zIndex": 0
                            }
                        },
                        "valuesOptions": {},
                        "globalSeriesType": "line"
                    },
                    "created_at": "2023-02-11T10:17:12.865265+00:00",
                    "query_details": {
                        "query_id": 947867,
                        "name": "RDNT and RDNT V2 Holders Overtime",
                        "description": "",
                        "show_watermark": true,
                        "parameters": [],
                        "dataset_id": 11,
                        "user": {
                            "id": 26781,
                            "name": "shogun",
                            "profile_image_url": "https://prod-dune-media.s3.eu-west-1.amazonaws.com/profile_img_a2d00e92-d62e-4d60-a92d-f15cf1421ee9_tgatu.png",
                            "__typename": "users"
                        },
                        "team": null,
                        "__typename": "query_details"
                    },
                    "__typename": "visualizations"
                },
                "__typename": "visualization_widgets"
            },
            {
                "id": 774920,
                "created_at": "2023-01-15T03:09:40.193204+00:00",
                "updated_at": "2023-04-20T07:24:55.367512+00:00",
                "options": {
                    "position": {
                        "col": 4,
                        "row": 46,
                        "sizeX": 2,
                        "sizeY": 9
                    }
                },
                "visualization": {
                    "id": 3115958,
                    "type": "chart",
                    "name": "RDNT/WETH LP Staked Supply",
                    "options": {
                        "sortX": true,
                        "xAxis": {
                            "type": "-"
                        },
                        "yAxis": [
                            {
                                "type": "linear"
                            }
                        ],
                        "legend": {
                            "enabled": true
                        },
                        "series": {
                            "stacking": "stack",
                            "percentValues": true
                        },
                        "reverseX": false,
                        "columnMapping": {
                            "time": "x",
                            "masterchef_pool": "y",
                            "non_masterchef_pool": "y"
                        },
                        "seriesOptions": {
                            "masterchef_pool": {
                                "name": "Staked",
                                "type": "area",
                                "color": "#2793cb",
                                "yAxis": 0,
                                "zIndex": 0
                            },
                            "non_masterchef_pool": {
                                "name": "Unstaked",
                                "type": "area",
                                "color": "#ff0000",
                                "yAxis": 0,
                                "zIndex": 1
                            }
                        },
                        "valuesOptions": {},
                        "globalSeriesType": "area"
                    },
                    "created_at": "2023-01-15T02:53:31.494863+00:00",
                    "query_details": {
                        "query_id": 283918,
                        "name": "Radiant Capital Pool2 Staking LP",
                        "description": "",
                        "show_watermark": true,
                        "parameters": [],
                        "dataset_id": 11,
                        "user": {
                            "id": 26781,
                            "name": "shogun",
                            "profile_image_url": "https://prod-dune-media.s3.eu-west-1.amazonaws.com/profile_img_a2d00e92-d62e-4d60-a92d-f15cf1421ee9_tgatu.png",
                            "__typename": "users"
                        },
                        "team": null,
                        "__typename": "query_details"
                    },
                    "__typename": "visualizations"
                },
                "__typename": "visualization_widgets"
            },
            {
                "id": 515766,
                "created_at": "2022-10-01T02:15:06.598275+00:00",
                "updated_at": "2023-04-20T07:24:55.367512+00:00",
                "options": {
                    "position": {
                        "col": 0,
                        "row": 169,
                        "sizeX": 6,
                        "sizeY": 10
                    }
                },
                "visualization": {
                    "id": 2279265,
                    "type": "chart",
                    "name": "Reserve Cumulative Value",
                    "options": {
                        "sortX": true,
                        "xAxis": {
                            "type": "-"
                        },
                        "yAxis": [
                            {
                                "type": "linear",
                                "tickFormat": "$0[].0a"
                            },
                            {
                                "type": "linear",
                                "tickFormat": "0[].0%"
                            }
                        ],
                        "legend": {
                            "enabled": true
                        },
                        "series": {
                            "stacking": "stack"
                        },
                        "reverseX": false,
                        "numberFormat": "$0[].00a",
                        "columnMapping": {
                            "": "y",
                            "time": "x",
                            "market": "series",
                            "cumulative_dai": "y",
                            "cumulative_diff": "y",
                            "cumulative_usdc": "y",
                            "cumulative_usdt": "y",
                            "cumulative_wbtc": "y",
                            "cumulative_weth": "y",
                            "cumulative_tokens_value": "y"
                        },
                        "seriesOptions": {
                            "cumulative_dai": {
                                "name": "DAI",
                                "type": "area",
                                "yAxis": 0,
                                "zIndex": 6
                            },
                            "cumulative_diff": {
                                "name": "% Change",
                                "type": "line",
                                "color": "#ff0000",
                                "yAxis": 1,
                                "zIndex": 0
                            },
                            "cumulative_usdc": {
                                "name": "USDC",
                                "type": "area",
                                "yAxis": 0,
                                "zIndex": 5
                            },
                            "cumulative_usdt": {
                                "name": "USDT",
                                "type": "area",
                                "yAxis": 0,
                                "zIndex": 2
                            },
                            "cumulative_wbtc": {
                                "name": "WBTC",
                                "type": "area",
                                "yAxis": 0,
                                "zIndex": 4
                            },
                            "cumulative_weth": {
                                "name": "WETH",
                                "type": "area",
                                "yAxis": 0,
                                "zIndex": 3
                            },
                            "cumulative_tokens_value": {
                                "name": "Total",
                                "type": "scatter",
                                "yAxis": 0,
                                "zIndex": 1
                            }
                        },
                        "valuesOptions": {},
                        "globalSeriesType": "area",
                        "numberFormatRightYAxisSeries": "0[].0%"
                    },
                    "created_at": "2022-09-30T23:03:10.721689+00:00",
                    "query_details": {
                        "query_id": 1333833,
                        "name": "Radiant Capital Reserve Markets (Weekly % change)",
                        "description": "",
                        "show_watermark": true,
                        "parameters": [],
                        "dataset_id": 1,
                        "user": {
                            "id": 26781,
                            "name": "shogun",
                            "profile_image_url": "https://prod-dune-media.s3.eu-west-1.amazonaws.com/profile_img_a2d00e92-d62e-4d60-a92d-f15cf1421ee9_tgatu.png",
                            "__typename": "users"
                        },
                        "team": null,
                        "__typename": "query_details"
                    },
                    "__typename": "visualizations"
                },
                "__typename": "visualization_widgets"
            }
          ],
          "param_widgets": [],
          "dashboard_favorite_count_all": {
              "favorite_count": 57,
              "__typename": "dashboard_favorite_count_all"
          },
          "trending_scores": {
              "score_1h": 0,
              "score_4h": 0.0302856201424231,
              "score_24h": 0.482652944355055,
              "updated_at": "2023-04-19T07:10:02.226159+00:00",
              "__typename": "dashboard_trending_scores"
          },
          "__typename": "dashboards",
          "favorite_dashboards": []
      }
  ]
}