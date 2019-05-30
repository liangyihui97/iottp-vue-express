var graph = new Q.Graph('canvas');

                var node1 = graph.createNode("HS1DS-E", -200, -50);
                node1.image = "http://"+location.hostname+":4000/images/node1.png";
                var node2 = graph.createNode("HS2GW-E\n节点级别:1\n地址：192.168.1.254", 200, -50);
                node2.image = "http://"+location.hostname+":4000/images/node2.png";
                var edge = graph.createEdge("ZigBee", node1, node2);
                /*虚线样式*/
                edge.edgeType = Q.Consts.EDGE_TYPE_ELBOW;
                edge.setStyle(Q.Styles.EDGE_LINE_DASH, [8, 4, 0.01, 4]);
                edge.setStyle(Q.Styles.LINE_CAP, "round");
                edge.setStyle(Q.Styles.LABEL_OFFSET_Y, -10);
                /*连线文字样式*/
                edge.setStyle(Q.Styles.LABEL_POSITION, Q.Position.CENTER_TOP);
                edge.setStyle(Q.Styles.LABEL_ANCHOR_POSITION, Q.Position.CENTER_BOTTOM);
                edge.setStyle(Q.Styles.LABEL_BORDER, 1);
                edge.setStyle(Q.Styles.LABEL_POINTER, true);
                edge.setStyle(Q.Styles.LABEL_PADDING, new Q.Insets(2, 5));
                edge.setStyle(Q.Styles.LABEL_BACKGROUND_GRADIENT,
                    Q.Gradient.LINEAR_GRADIENT_VERTICAL);

                /*双击改名*/
                graph.ondblclick = function(evt){
                    var node = graph.getElementByMouseEvent(evt);
                    if(node){
                        var newName = prompt("New Name:");
                        if(newName){
                            node.name = newName;
                        }
                    }
                }
